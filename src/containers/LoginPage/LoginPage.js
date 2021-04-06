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
    <Container>
      <Form
        type="email"
        name="email"
        onChange={set}
        children="Email"
        placeholder="Enter email"
      />
      <Button onClick={login}>Login</Button>
    </Container>
  );
};

export default LoginPage;
