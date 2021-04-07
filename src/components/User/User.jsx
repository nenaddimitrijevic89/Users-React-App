import { Td, Tr } from "@chakra-ui/table";
import React from "react";
import { Link } from "react-router-dom";

const User = ({ user, detailed }) => {
  return (
    <Tr cursor="pointer" _hover={{ background: "#50e3c2", color: "black" }}>
      {/* <Link to={`/users/${user.id}`} key={user.id}> */}
        <Td>{user.id}</Td>
      {/* </Link> */}
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
