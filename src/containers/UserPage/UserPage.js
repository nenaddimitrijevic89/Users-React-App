import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/layout";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import { useToast } from "@chakra-ui/toast";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import User from "../../components/User/User";
import withAuth from "../../hoc/withAuth";
import { userService } from "../../services/userService";

const UserPage = () => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  const history = useHistory();
  let { id } = useParams();
  const toast = useToast();

  const getSingleUser = async (id) => {
    const fetchedUser = await userService.getUser(id);
    setUser(fetchedUser);
    setLoader(false);
  };

  const deleteUser = async (id) => {
    const toaster = await userService.deleteUser(id);
    toast(toaster);
    if (toaster.status === "success") {
      history.push("/users");
    }
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
      <Button margin="15px" onClick={() => history.push(`/users/${id}/edit`)}>
        Edit
      </Button>
      <Button margin="15px" onClick={() => deleteUser(id)}>
        Delete
      </Button>
    </Container>
  );
};

export default withAuth(UserPage);
