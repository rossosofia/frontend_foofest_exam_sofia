import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext, useRef, useState } from "react";
import { DispatchContext, StoreContext } from "@/context/storeContext";

export default function GuestAccordion({ index, isExpanded, onNextAccordion }) {
  const dispatch = useContext(DispatchContext);
  const formEl = useRef(null);
  const state = useContext(StoreContext);

  const [expanded, setExpanded] = useState(isExpanded);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);

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

    onNextAccordion();
    setIsFormChanged(false);
    setIsSubmitted(true);
    setExpanded(false);
    // setExpanded((currentAccordion) => currentAccordion, +1);
    // console.log("currentaccordion", currentAccordion + 1);
  }

  function toggleAccordion() {
    setExpanded((prevExpanded) => !prevExpanded);
  }

  return (
    <>
      <Accordion expanded={expanded} onChange={toggleAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index + 1}-content`}
          id={`panel${index + 1}-header`}
        >
          <p>Guest {index + 1}</p>
        </AccordionSummary>
        <AccordionDetails>
          <form ref={formEl} onSubmit={submitted}>
            <TextField
              label="First Name"
              variant="outlined"
              helperText="Please enter the guest's first name"
              name="firstName"
              onChange={() => setIsFormChanged(true)}
              // value={submittedFirstName}
              required
            />
            <TextField
              label="Last Name"
              variant="outlined"
              helperText="Please enter the guest's last name"
              name="lastName"
              onChange={() => setIsFormChanged(true)}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              helperText="Please enter the guest's email name"
              name="email"
              type="email"
              onChange={() => setIsFormChanged(true)}
              required
            />
            <Button
              variant="contained"
              color="success"
              type="submit"
              disabled={isSubmitted && !isFormChanged}
            >
              {isSubmitted ? "SAVED" : "SAVED"}
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
