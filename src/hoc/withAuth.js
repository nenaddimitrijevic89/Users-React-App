import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loader from "../components/Loader/Loader";

const withAuth = (Component) => {
  return () => {
    const [auth, setAuth] = useState(false);
    const history = useHistory();

    useEffect(() => {
      const email = localStorage.getItem("email");
      if (!email) {
        history.push("/login");
      } else {
        setAuth(true);
      }
    }, [history]);
    return <>{auth ? <Component /> : <Loader />}</>;
  };
};

export default withAuth;
