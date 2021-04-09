import { Td, Tr } from "@chakra-ui/table";
import React from "react";

const User = ({ user, detailed, onClick }) => {
  return (
    <Tr
      cursor="pointer"
      _hover={{ background: "#50e3c2", color: "black" }}
      onClick={onClick}
    >
      <Td>{user.id}</Td>
      <Td>{user.name}</Td>
      <Td>{user.email}</Td>
      <Td>{user.city}</Td>
      {detailed && <Td>{user.street}</Td>}
      {detailed && <Td>{user.username}</Td>}
      {detailed && <Td>{user.phone}</Td>}
      {detailed && <Td>{user.website}</Td>}
    </Tr>
  );
};

export default User;
