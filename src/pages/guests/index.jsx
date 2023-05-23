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

  const [formSubmissionStatus, setFormSubmissionStatus] = useState(
    Array(totalTickets).fill(false)
  );

  // Update the submission status of a form when it is submitted
  function handleFormSubmitted(index, status) {
    setFormSubmissionStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = status;
      console.log(`Form at index ${index} submitted with status ${status}`);
      console.log(newStatus);
      return newStatus;
    });
  }

  const allFormsSubmitted = formSubmissionStatus.every((status) => status);
  console.log("all form submitted", allFormsSubmitted);

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
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
          onFormSubmitted={handleFormSubmitted}
        />
      ))}
      <Anchor href="/payment/" disabled={!allFormsSubmitted}>
        GO TO PAYMENT
      </Anchor>
    </FlowLayout>
  );
}
