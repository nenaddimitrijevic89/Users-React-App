import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React from "react";

const Form = ({ type, name, value, onChange, children, placeholder }) => {
  return (
    <FormControl id={name} marginTop="15px">
      <FormLabel>{children}</FormLabel>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
        placeholder={placeholder}
        required
      />
    </FormControl>
  );
};

export default Form;