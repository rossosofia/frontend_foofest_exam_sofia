import FlowLayout from "@/components/FlowLayout";
import Anchor from "@/components/Anchor";
import GuestAccordion from "@/components/GuestAccordian";
import { useContext, useState } from "react";
import { StoreContext } from "@/context/storeContext";
import Timer from "@/components/Timer";
import Basket from "@/components/Basket";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto items-start">
        <section>
          <h1 className="mb-6 text-2xl">Guest Information</h1>
          <p className="mb-6">
            To make your FooFest Extravaganza experience as smooth as possible,
            we gather essential details about each guest.
          </p>
          <p className="mb-6">
            We have organized this information into handy accordion-style
            sections. Each section requests only the most critical information,
            ensuring your registration is efficient and straightforward.
          </p>
          <p className="mb-6">
            We value your privacy and assure that all personal information is
            kept secure and used only for the purpose of enhancing your festival
            experience.
          </p>

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
          <Anchor
            className="mt-4 w-full text-center"
            href="/payment/"
            disabled={!allFormsSubmitted}
          >
            GO TO PAYMENT
          </Anchor>
        </section>

        <section>
          <Basket />
        </section>
      </div>
    </FlowLayout>
  );
}
