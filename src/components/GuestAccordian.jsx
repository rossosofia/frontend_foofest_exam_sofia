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

    // Calls handleNextAccordion function from Guests page, to expand next accordion
    setIsFormChanged(false); // The form has been submitted and no changes have been made.
    setIsSubmitted(true); // Notify that the form has been submitted
    setExpandedIndex(index + 1);
    // Expand the
    onFormSubmitted(index, true); // Notify the parent component that the form has been submitted
  }

  function formHasChanged() {
    setIsFormChanged(true);
    setIsSubmitted(false);
    onFormSubmitted(index, false);
  }

  function toggleAccordion() {
    const newExpandedIndex = expandedIndex === index ? null : index;
    setExpandedIndex(newExpandedIndex);
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
