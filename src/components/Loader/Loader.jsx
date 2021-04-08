import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";

const Loader = () => {
  return (
    <Center>
      <Spinner size="xl" marginTop="50px" />
    </Center>
  );
};

export default Loader;
