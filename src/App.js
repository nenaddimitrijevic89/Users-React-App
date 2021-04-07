import LoginPage from "./containers/LoginPage/LoginPage";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router";
import UsersPage from "./containers/UsersPage/UsersPage";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/users/:id" component={UsersPage} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
