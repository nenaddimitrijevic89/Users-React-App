import { Container } from "@chakra-ui/layout";
import React from "react";

const Layout = ({children, ...props}) => {
  return (
    <Container
      p="25px"
      borderColor="#50e3c2"
      borderWidth="3px"
      marginTop="30px"
      borderRadius="10px"
      {...props}
    >
      {children}
    </Container>
  );
};

export default Layout;
