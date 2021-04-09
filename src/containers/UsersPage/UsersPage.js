import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/layout";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loader from "../../components/Loader/Loader";
import User from "../../components/User/User";
import withAuth from "../../hoc/withAuth";
import { userService } from "../../services/userService";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  const history = useHistory();

  const getInitUsers = async () => {
    const fetchedUsers = await userService.getUsers();
    setUsers(fetchedUsers);
    setLoader(false);
  };

  useEffect(() => {
    getInitUsers();
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <Container maxW="container.lg">
      <Table variant="simple" marginTop="15px">
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
            <User user={user} key={user.id} onClick={() => history.push(`users/${user.id}`)}/>
          ))}
        </Tbody>
      </Table>
      <Button marginTop="15px" onClick={() => history.push("/createuser")}>Create new user</Button>
    </Container>
  );
};

export default withAuth(UsersPage);
