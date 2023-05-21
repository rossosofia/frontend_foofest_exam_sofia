import React, { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import InputField from "./InputField";
import TextField from "@mui/material/TextField";
import { DispatchContext } from "@/context/storeContext";

export default function GuestAccordion({ index }) {
  const dispatch = useContext(DispatchContext);

  const handleFirstNameChange = (e) => {
    const firstName = e.target.value;
    dispatch({ action: "UPDATE_GUEST_INFO", payload: { index, firstName } });
  };

  const handleLastNameChange = (e) => {
    const lastName = e.target.value;
    dispatch({ action: "UPDATE_GUEST_INFO", payload: { index, lastName } });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    dispatch({ action: "UPDATE_GUEST_INFO", payload: { index, email } });
  };
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
          <TextField
            label="First Name"
            variant="outlined"
            helperText="Please enter the guest's first name"
            required
            onChange={handleFirstNameChange}
            // onChange={(event) =>
            //   handleGuestInfoChange(index, "firstName", event.target.value)
            // }
          />
          <TextField
            label="Last Name"
            variant="outlined"
            helperText="Please enter the guest's last name"
            required
            onChange={handleLastNameChange}
            // onChange={(event) =>
            //   handleGuestInfoChange(index, "lastName", event.target.value)
            // }
          />
          <TextField
            label="Email"
            variant="outlined"
            helperText="Please enter the guest's email name"
            required
            onChange={handleEmailChange}
            // onChange={(event) =>
            //   handleGuestInfoChange(index, "email", event.target.value)
            // }
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
