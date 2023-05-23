import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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

  // const submittedFirstName = state.guestInfo[index];
  // console.log("submitted", submittedFirstName);

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
      <Accordion expanded={isExpanded} onChange={toggleAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index + 1}-content`}
          id={`panel${index + 1}-header`}
        >
          <p style={{ color: isSubmitted ? "green" : "black" }}>
            Guest {index + 1}
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <form ref={formEl} onSubmit={submitted}>
            <TextField
              label="First Name"
              variant="outlined"
              helperText="Please enter the guest's first name"
              name="firstName"
              onChange={formHasChanged}
              // value={submittedFirstName}
              required
            />
            <TextField
              label="Last Name"
              variant="outlined"
              helperText="Please enter the guest's last name"
              name="lastName"
              onChange={formHasChanged}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              helperText="Please enter the guest's email name"
              name="email"
              type="email"
              onChange={formHasChanged}
              required
            />
            <Button
              variant="contained"
              color="success"
              type="submit"
              disabled={isSubmitted && !isFormChanged}
            >
              {isSubmitted ? "SAVED" : "SAVE"}
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
