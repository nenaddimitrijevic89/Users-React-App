import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/layout";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import User from "../../components/User/User";
import withAuth from "../../hoc/withAuth";
import { userService } from "../../services/userService";

const UserPage = () => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  let { id } = useParams();

  const getSingleUser = async (id) => {
    const fetchedUser = await userService.getUser(id);
    setUser(fetchedUser);
    setLoader(false);
  };

  useEffect(() => {
    getSingleUser(id);
  }, [id]);

  return loader ? (
    <Loader />
  ) : (
    <Container maxW="container.xl">
      <Table variant="simple" marginTop="15px">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>City</Th>
            <Th>Street</Th>
            <Th>Username</Th>
            <Th>Phone</Th>
            <Th>Website</Th>
          </Tr>
        </Thead>
        <Tbody>
          <User user={user} detailed />
        </Tbody>
      </Table>
      <Button margin="15px">Edit</Button>
      <Button margin="15px">Delete</Button>
    </Container>
  );
};

export default withAuth(UserPage);
