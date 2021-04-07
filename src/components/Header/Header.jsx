import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import { Menu } from "@chakra-ui/menu";
import { useColorMode } from "@chakra-ui/color-mode";
import React from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Menu>
      <Center bg="#50e3c2" p="15px">
        <Button onClick={toggleColorMode} bg="lightGrey" color="black">
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Center>
    </Menu>
  );
};

export default Header;
