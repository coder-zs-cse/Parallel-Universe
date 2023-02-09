import React from "react";
import HomeScreen from "../Screens/Home";
import { Route, Switch } from "react-router-dom";
import LoginScreen from "../Screens/Login";
import SignupScreen from "../Screens/Signup";
import ViewUniverse from "../Screens/ViewUniverse";
const Routing = () => {
  return (
    <>
      <Switch>
     
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact  path="/signup">
          <SignupScreen />
        </Route>

        <Route
          exact path="/getuniverse/:id"
          render={(props) => <ViewUniverse {...props} />}
        />
           <Route exact path="/" >
          <HomeScreen />
        </Route>
      </Switch>
    </>
  );
};

export default Routing;
