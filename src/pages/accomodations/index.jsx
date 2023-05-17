import FlowLayout from "@/components/FlowLayout";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import TentCard from "@/components/TentCard";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Anchor from "@/components/Anchor";

export default function Accomodations() {
  const [selectedValue, setSelectedValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <FlowLayout>
      <h1>Step 2</h1>
      <p>This is the content for Step 2.</p>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
        label="Green Option / 249-"
      />

      <RadioGroup value={selectedValue} onChange={handleChange}>
        <label>
          <div
            className={`${
              selectedValue !== "set-up-tent" && selectedValue === "own-tent"
                ? "bg-pink-100"
                : ""
            } ${selectedValue === "set-up-tent" ? "bg-slate-200" : ""}`}
          >
            {/* we need to create a style to use istead of the "bg-pink-100", so that everything looks "deactivated" */}
            <FormControlLabel
              value="set-up-tent"
              control={<Radio />}
              label="Rent a tent"
            />
            <TentCard></TentCard>
            {/* {selectedValue === "set-up-tent" && <TentCard />} */}
          </div>
        </label>

        <FormControlLabel
          value="own-tent"
          control={<Radio />}
          label="No, I'm bringing my own tent"
          className={selectedValue === "own-tent" ? "bg-slate-200" : ""}
        />
      </RadioGroup>

      <Anchor href="/guests/">GO TO GUESTS</Anchor>
    </FlowLayout>
  );
}
