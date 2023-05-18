import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputField from "./InputField";

export default function GuestAccordion({ index }) {
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
          <InputField
            label="First Name"
            helperText="Please enter your first name."
            type="text"
            autocomplete="given-name"
            required
          />

          <InputField
            label="Last Name"
            helperText="Please enter your last name."
            type="text"
            autocomplete="family-name"
            required
          />

          <InputField
            label="Email"
            helperText="Please enter your email."
            type="email"
            autocomplete="email"
            required
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
