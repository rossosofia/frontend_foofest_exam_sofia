import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import Anchor from "./Anchor";
import { StoreContext } from "@/context/storeContext";
import { createClient } from "@supabase/supabase-js";

// Supabase client
const supabaseUrl = "https://ihjawproqviyqyssqucs.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CreditCardForm() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const state = useContext(StoreContext);
  const reservationId = state.reserveSpot[0]?.id;

  const router = useRouter();

  const isFormInvalid =
    !cardName ||
    !cardNumber ||
    !expiryDate ||
    !cvc ||
    cardNumber.replace(/\s/g, "").length !== 16 ||
    cvc.length !== 3 ||
    !expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/);

  const postBasketToSupabase = async (state) => {
    const basketData = {
      area: state.area,
      ticketBasket: JSON.stringify(state.ticketBasket),
      tentBasket: JSON.stringify(state.tentBasket),
      guestInfo: JSON.stringify(state.guestInfo),
      paymentInfo: JSON.stringify(state.paymentInfo),
      greenFee: JSON.stringify(state.greenFee),
      reserveSpot: JSON.stringify(state.reserveSpot),
    };

    try {
      const { data, error } = await supabase
        .from("foofest-extravaganza")
        .insert([basketData]);

      if (error) throw error;
      console.log("Posted basket data to Supabase: ", data);
    } catch (error) {
      console.error("Error posting basket data to Supabase: ", error);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!isFormInvalid && reservationId) {
      try {
        const response = await fetch(
          "https://brazen-fortune-fight.glitch.me/fullfill-reservation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: reservationId,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Request succeeded with JSON response", data);
          router.push("/thanks");
        } else {
          console.log("Request failed with status", response.status);
          const errorData = await response.json();
          console.log("Error details:", errorData);
        }

        // Post basket data to Supabase
        await postBasketToSupabase(state);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    }
  };

  const handleExpiryChange = (e) => {
    const value = e.target.value;
    const trimmedValue = value.replace(/[^0-9]/g, "");
    let finalValue = trimmedValue;
    if (trimmedValue.length >= 2) {
      finalValue = `${trimmedValue.slice(0, 2)}/${trimmedValue.slice(2, 4)}`;
    }
    setExpiryDate(finalValue);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    const trimmedValue = value.replace(/[^0-9]/g, "");
    let finalValue = trimmedValue;

    if (trimmedValue.length > 4) {
      const matches = trimmedValue.match(/(\d{0,4})/g);
      finalValue = matches.join(" ").trim();
    }
    setCardNumber(finalValue);
  };

  return (
    <>
      <h2 className="text-2xl mb-6 text-center font-bold">
        Credit Card Information
      </h2>
      <TextField
        className="mb-4"
        variant="outlined"
        label="Cardholder Name"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        autoComplete="name"
      />
      <TextField
        className="mb-4"
        variant="outlined"
        label="Card Number"
        value={cardNumber}
        onChange={handleCardNumberChange}
        inputProps={{
          maxLength: 19,
          autoComplete: "cc-number",
        }}
      />

      <TextField
        className="flex-1"
        variant="outlined"
        label="MM/YY"
        value={expiryDate}
        onChange={handleExpiryChange}
        inputProps={{
          maxLength: 5,
          autoComplete: "cc-exp",
        }}
      />
      <TextField
        className="flex-1"
        variant="outlined"
        label="CVC"
        value={cvc}
        onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
        inputProps={{
          maxLength: 3,
          autoComplete: "cc-csc",
        }}
      />

      <Anchor href="/thanks" disabled={isFormInvalid} onClick={submitForm}>
        Submit
      </Anchor>
    </>
  );
}
