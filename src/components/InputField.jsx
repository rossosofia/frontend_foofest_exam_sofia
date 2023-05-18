import React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";

export default function InputField({ label, helperText, type, autocomplete }) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type={type} autoComplete={autocomplete} />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
