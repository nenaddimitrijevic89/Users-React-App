import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import InputEl from "../../components/InputEl/InputEl";
import Layout from "../../components/Layout/Layout";
import withAuth from "../../hoc/withAuth";
import { userService } from "../../services/userService";
import {
  ERROR,
  ERROR_EMAIL,
  ERROR_UPDATE_EMAIL,
  ERROR_UPDATE_EMPTY,
} from "../../shared/constants";
import { validateEmail } from "../../shared/utilities";

const UserForm = ({ isEdit }) => {
  const [user, setUser] = useState({});
  const toast = useToast();
  const { id } = useParams();
  const history = useHistory();

  const getSingleUser = async () => {
    const fetchedUser = await userService.getUser(id);
    setUser(fetchedUser);
  };

  const loadService = async () => {
    let toaster = null;
    if (isEdit) {
      toaster = await userService.editUser(user, id);
    } else {
      toaster = await userService.createUser(user);
    }
    toast(toaster);
    if (toaster.status === "success") {
      history.push("/users");
    }
  };

  const setValues = (data, name) => {
    setUser({ ...user, [name]: data });
  };

  const submit = (data, edit) => {
    const valid = validateEmail(data.email);

    if (!data.name) {
      toast(edit ? ERROR_UPDATE_EMPTY : ERROR);
      return;
    }
    if (!valid) {
      toast(edit ? ERROR_UPDATE_EMAIL : ERROR_EMAIL);
      return;
    } else {
      loadService();
    }
  };

  useEffect(() => {
    if (!id) return;
    getSingleUser();
  }, [id]);

  return (
    <Layout>
      <InputEl
        type="text"
        name="name"
        value={user?.name || ""}
        onChange={setValues}
        children="Name"
        placeholder="Enter name"
      />
      <InputEl
        type="email"
        name="email"
        value={user?.email || ""}
        onChange={setValues}
        children="Email"
        placeholder="Enter email"
      />
      <Button
        bg="lightGrey"
        color="black"
        marginTop="15px"
        onClick={() => submit(user, isEdit)}
      >
        {isEdit ? "Save" : "Create"}
      </Button>
    </Layout>
  );
};

export default withAuth(UserForm);
