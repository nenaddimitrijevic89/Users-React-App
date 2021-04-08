import LoginPage from "./containers/LoginPage/LoginPage";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router";
import UsersPage from "./containers/UsersPage/UsersPage";
import UserPage from "./containers/UserPage/UserPage";
import EditUserPage from "./containers/EditUserPage/EditUserPage";
import CreateUserPage from "./containers/CreateUserPage/CreateUserPage";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/createuser" component={CreateUserPage} />
        <Route exact path="/users/:id" component={UserPage} />
        <Route exact path="/users/:id/edit" component={EditUserPage} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
