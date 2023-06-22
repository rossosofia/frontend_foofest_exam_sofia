import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import { useContext, useRef, useState } from "react";
import { DispatchContext, StoreContext } from "@/context/storeContext";

export default function GuestAccordion({
  index,
  expandedIndex,
  setExpandedIndex,
  onFormSubmitted,
}) {
  const dispatch = useContext(DispatchContext);
  const formEl = useRef(null);
  const state = useContext(StoreContext);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const isExpanded = index === expandedIndex;

  const submittedFirstName = state.guestInfo[index]?.firstName;
  const submittedLastName = state.guestInfo[index]?.lastName;
  const submittedEmail = state.guestInfo[index]?.email;

  function submitted(e) {
    e.preventDefault();
    const formData = new FormData(formEl.current);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");

    dispatch({
      action: "UPDATE_GUEST_INFO",
      payload: {
        index,
        firstName,
        lastName,
        email,
      },
    });

    setIsSubmitted(true); // State setter. Sets form submission status to true (locally)
    setIsFormChanged(false); // The form has been submitted and no changes have been made.
    onFormSubmitted(index, true); // Callback function thet notify the parent component that the form at a specific index has been submitted successfully. It is used to update the formSubmissionStatus state in the Guests, calling the function handleFormSubmitted in Guests page.
    setExpandedIndex(index + 1); // Expand the next accordion
  }

  function toggleAccordion() {
    // Toggles the expansion state of the accordion
    // If the accordion is currently expanded, collapse it; otherwise, expand it
    // This function is INDIPENDENT from submitted status, is triggered but user's click
    const newExpandedIndex = expandedIndex === index ? null : index;
    setExpandedIndex(newExpandedIndex); // Update the expandedIndex state with the new value
  }

  function formHasChanged() {
    setIsFormChanged(true); // Notify that changes have been made
    setIsSubmitted(false); // Resets the form submission status to false
    onFormSubmitted(index, false); // Notifies the parent component that the form has changed but not yet submitted.
  }

  return (
    <>
      <Accordion
        className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 mt-4 p-8"
        expanded={isExpanded}
        onChange={toggleAccordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index + 1}-content`}
          id={`panel${index + 1}-header`}
        >
          <p style={{ color: isSubmitted ? "green" : "black" }}>
            Guest {index + 1}
          </p>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col justify-between items-center md:flex-row md:flex-wrap">
          <form
            ref={formEl}
            onSubmit={submitted}
            className="w-full flex flex-col gap-2 md:flex-row md:flex-wrap md:justify-between"
          >
            <div className="flex flex-col gap-2 md:flex-row md:w-full">
              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                onChange={formHasChanged}
                defaultValue={submittedFirstName ? submittedFirstName : ""}
                required
                className="md:w-full"
              />
              <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                type="text"
                onChange={formHasChanged}
                defaultValue={submittedLastName ? submittedLastName : ""}
                required
                className="md:w-full"
              />
            </div>
            <div className="flex flex-col gap-2 md:w-full">
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                onChange={formHasChanged}
                defaultValue={submittedEmail ? submittedEmail : ""}
                required
                className="md:w-full"
              />
              <button
                variant="contained"
                type="submit"
                disabled={isSubmitted && !isFormChanged}
                className={`inline-block bg-white hover:bg-gray-100 border-2 border-black transition-transform duration-500 ease-in-out transform hover:-translate-x-1 hover:-translate-y-1 text-black font-bold py-2 px-4 rounded w-full ${
                  isSubmitted && !isFormChanged
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {isSubmitted ? "SAVED" : "SAVE"}
              </button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
