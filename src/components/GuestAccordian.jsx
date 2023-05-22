import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext, useRef } from "react";
import { DispatchContext } from "@/context/storeContext";

export default function GuestAccordion({ index, onUpdateGuestInfo }) {
  const dispatch = useContext(DispatchContext);
  const formEl = useRef(null);

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
  }

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
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
              required
            />
            <TextField
              label="Last Name"
              variant="outlined"
              helperText="Please enter the guest's last name"
              name="lastName"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              helperText="Please enter the guest's email name"
              name="email"
              required
            />
            <Button color="secondary" type="submit">
              Confirm
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
