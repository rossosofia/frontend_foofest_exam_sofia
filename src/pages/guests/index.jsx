import FlowLayout from "@/components/FlowLayout";
import Anchor from "@/components/Anchor";
import GuestAccordion from "@/components/GuestAccordian";
import { useContext, useState } from "react";
import { StoreContext } from "@/context/storeContext";

export default function Guests() {
  const state = useContext(StoreContext);
  const [expandedIndex, setExpandedIndex] = useState(0);
  // EpandedIndex is used to control the expansion of the accordions based on user interactions. It represents the index of the accordion that should be expanded. When an accordion is expanded, its index is stored in expandedIndex, and when it should be closed, expandedIndex is set to null. The first value is 0, so that the first accordion is always open when you load the page.

  function getTotalTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }

  const totalTickets = getTotalTickets();

  function handleNextAccordion(index) {
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
          isExpanded={i === expandedIndex}
          onNextAccordion={handleNextAccordion}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
      ))}
      <Anchor href="/payment/">GO TO PAYMENT</Anchor>
    </FlowLayout>
  );
}
