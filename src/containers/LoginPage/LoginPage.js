import React, { useState } from "react";
import { Button, Container } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import Form from "../../components/Form/Form";
import { validationToaster } from "../../shared/utilities";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const history = useHistory();

  const set = (data) => {
    setEmail(data)
  }

  const login = () => {
    const toaster = validationToaster(email);
    toast(toaster);
    if(toaster.status === "success"){
      history.push("/success")
    }
  }
  return (
    <Container p="25px" bg="#50e3c2" marginTop="30px" borderRadius="10px" color="black">
      <Form
        type="email"
        name="email"
        onChange={set}
        children="Email"
        placeholder="Enter email"
      />
      <Button bg="lightGrey" onClick={login} marginTop="15px">Login</Button>
    </Container>
  );
};

export default LoginPage;
