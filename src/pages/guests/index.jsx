import FlowLayout from "@/components/FlowLayout";
import Anchor from "@/components/Anchor";
import GuestAccordion from "@/components/GuestAccordian";
import { useContext, useState } from "react";
import { StoreContext } from "@/context/storeContext";
import Timer from "@/components/Timer";

export default function Guests() {
  const state = useContext(StoreContext);
  const [expandedIndex, setExpandedIndex] = useState(0);
  // ExpandedIndex represents the index of the accordion that should be expanded. When an accordion is expanded, its index is stored in expandedIndex. The first value is 0, so that the first accordion is always open at the beginning.

  function getTotalTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }

  const totalTickets = getTotalTickets();

  // Initialize formSubmissionStatus array with false values for each form
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(
    Array(totalTickets).fill(false)
  );

  // handleFormSubmitted updates the submission status of a form when it is submitted. setFormSubmissionStatus is called with a callback function as its argument. The element at the specified index in newStatus is updated with the new status value. The new value for formSubmissionStatus is returned.
  function handleFormSubmitted(index, status) {
    setFormSubmissionStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = status;
      // console.log(`Form at index ${index} submitted with status ${status}`);
      // console.log(newStatus);
      return newStatus;
    });
  }

  const allFormsSubmitted = formSubmissionStatus.every((status) => status);
  // (status) => status is a callback function that returns the value of each status element in the formSubmissionStatus array.
  // The every method evaluates if all elements in the array satisfy the condition
  // If all forms have been submitted (i.e. are true), then allFormsSubmitted will be true.
  // if allFormsSubmitted is true, that the anchor button is active.
  // console.log("all form submitted", allFormsSubmitted);

  return (
    <FlowLayout>
      <h1>Step 3</h1>
      <p>This is the content for Step 3.</p>
      <Timer />
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
