import FlowLayout from "@/components/FlowLayout";
import Anchor from "@/components/Anchor";
import GuestAccordion from "@/components/GuestAccordian";
import { useContext, useState } from "react";
import { StoreContext } from "@/context/storeContext";

export default function Guests() {
  const state = useContext(StoreContext);
  const [currentAccordion, setCurrentAccordion] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  function getTotalTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }

  const totalTickets = getTotalTickets();

  function handleNextAccordion(index) {
    setCurrentAccordion((currentAccordion) => currentAccordion + 1);
    setExpandedIndex(index + 1);
  }

  return (
    <FlowLayout>
      <h1>Step 3</h1>
      <p>This is the content for Step 3.</p>
      {[...Array(totalTickets)].map((_, i) => (
        <GuestAccordion
          key={i}
          index={i}
          totalAccordions={totalTickets}
          isExpanded={i === currentAccordion}
          onNextAccordion={handleNextAccordion}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
      ))}
      <Anchor href="/payment/">GO TO PAYMENT</Anchor>
    </FlowLayout>
  );
}
