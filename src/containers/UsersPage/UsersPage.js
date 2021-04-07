import { Button } from "@chakra-ui/button";
import { Center, Container } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import User from "../../components/User/User";
import { userService } from "../../services/userService";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  const getInitUsers = async () => {
    const users = await userService.getUsers();
    console.log(users);
    setUsers(users);
    setLoader(false);
  };

  useEffect(() => {
    getInitUsers();
  }, []);

  return loader ? (
    <Center>
      <Spinner size="xl" marginTop="50px" />
    </Center>
  ) : (
    <Container maxW="container.lg">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>City</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <User user={user} />
          ))}
        </Tbody>
      </Table>
      <Button marginTop="15px">Create new user</Button>
    </Container>
  );
};

export default UsersPage;
