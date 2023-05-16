import FlowLayout from "@/components/FlowLayout";
import { useRouter } from "next/router";
import { Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import TentCard from "@/components/TentCard";
import React, { useState } from "react";
import { red } from "@mui/material/colors";

export default function Accomodations() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const router = useRouter();
  function handleNext() {
    router.push("/guests");
  }

  return (
    <FlowLayout>
      <h1>Step 2</h1>
      <p>This is the content for Step 2.</p>
      <RadioGroup value={selectedValue} onChange={handleChange}>
        <div className={selectedValue === "option1" ? "bg-red" : ""}>
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Rent a tent"
          />
          <TentCard isSelected={selectedValue === "option1"} />
        </div>
        <FormControlLabel
          value="option2"
          control={<Radio />}
          label="No, I'm bringing my own tent"
        />
      </RadioGroup>

      <Button variant="outlined" onClick={handleNext}>
        Go to guest
      </Button>
    </FlowLayout>
  );
}
