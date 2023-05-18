import React, { useContext, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import InputField from "./InputField";
import TextField from "@mui/material/TextField";
// import { DispatchContext } from "@/context/storeContext";

export default function GuestAccordion({ index, handleGuestInfoChange }) {
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
            onChange={(event) =>
              handleGuestInfoChange(index, "firstName", event.target.value)
            }
          />
          <TextField
            label="Last Name"
            variant="outlined"
            helperText="Please enter the guest's last name"
            required
            onChange={(event) =>
              handleGuestInfoChange(index, "lastName", event.target.value)
            }
          />
          <TextField
            label="Email"
            variant="outlined"
            helperText="Please enter the guest's email name"
            required
            onChange={(event) =>
              handleGuestInfoChange(index, "email", event.target.value)
            }
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
