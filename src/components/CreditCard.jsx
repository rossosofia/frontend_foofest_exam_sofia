import React, { useState } from "react";
import { TextField } from "@mui/material";
import Anchor from "./Anchor";

export default function CreditCardForm() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const isFormInvalid =
    !cardName ||
    !cardNumber ||
    !expiryDate ||
    !cvc ||
    cardNumber.replace(/\s/g, "").length !== 16 ||
    cvc.length !== 3 ||
    !expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/);

  const submitForm = (e) => {
    e.preventDefault();

    if (!isFormInvalid) {
      // Handle form submission here.
      console.log(cardName, cardNumber, expiryDate, cvc);
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
