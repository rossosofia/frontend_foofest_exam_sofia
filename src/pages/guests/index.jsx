import React, { useContext } from "react";
import FlowLayout from "@/components/FlowLayout";
import Anchor from "@/components/Anchor";
import GuestAccordion from "@/components/GuestAccordian";
import { StoreContext } from "@/context/storeContext";

export default function Guests() {
  const state = useContext(StoreContext);

  function getTotalTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }

  const totalTickets = getTotalTickets();

  return (
    <FlowLayout>
      <h1>Step 3</h1>
      <p>This is the content for Step 3.</p>
      {[...Array(totalTickets)].map((_, i) => (
        <GuestAccordion key={i} />
      ))}
      <Anchor href="/payment/">GO TO PAYMENT</Anchor>
    </FlowLayout>
  );
}
