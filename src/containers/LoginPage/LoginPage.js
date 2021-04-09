import React, { useState } from "react";
import { Button, Container } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import InputEl from "../../components/InputEl/InputEl";
import { validationLogin } from "../../shared/utilities";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const history = useHistory();

  const set = (data) => {
    setEmail(data);
  };

  const login = () => {
    const toaster = validationLogin(email);
    toast(toaster);
    if (toaster.status === "success") {
      history.push("/");
    }
  };

  return (
    <Container
      p="25px"
      borderColor="#50e3c2"
      borderWidth="3px"
      marginTop="30px"
      borderRadius="10px"
    >
      <InputEl
        type="email"
        name="email"
        onChange={set}
        children="Email"
        placeholder="Enter email"
      />
      <Button bg="lightGrey" color="black" onClick={login} marginTop="15px">
        Login
      </Button>
    </Container>
  );
};

export default LoginPage;
