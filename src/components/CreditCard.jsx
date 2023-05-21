import React, { useState } from "react";
import Container from "@mui/material/Container";
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
    <Container maxWidth="sm" className="flex flex-col mt-10">
      <h2 className="text-2xl mb-6 text-center font-bold">
        Credit Card Information
      </h2>
      <input
        className="border-2 border-gray-200 rounded-md p-2 mb-4"
        type="text"
        name="name"
        placeholder="Cardholder Name"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        autoComplete="name"
      />
      <input
        className="border-2 border-gray-200 rounded-md p-2 mb-4"
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={cardNumber}
        onChange={handleCardNumberChange}
        maxLength="19"
        autoComplete="cc-number"
      />
      <div className="flex space-x-2 mb-4">
        <input
          className="border-2 border-gray-200 rounded-md p-2 flex-1"
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiryDate}
          onChange={handleExpiryChange}
          maxLength="5"
          autoComplete="cc-exp"
        />
        <input
          className="border-2 border-gray-200 rounded-md p-2 flex-1"
          type="text"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
          maxLength="3"
          autoComplete="cc-csc"
        />
      </div>

      <Anchor href="/thanks" disabled={isFormInvalid} onClick={submitForm}>
        Submit
      </Anchor>
    </Container>
  );
}
