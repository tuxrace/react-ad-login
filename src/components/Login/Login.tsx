import React, { Fragment, useContext, useState, useEffect } from "react";
import SignIn from "../SignIn";
import CreateAccount from "../CreateAccount";
import Password from "../Password";
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Login.style.scss';

const initialState = {
  create: false,
};

export const LoginContext = React.createContext(initialState);

const Login = () => {
  const location = useLocation();
  const [ create, setCreate ] = useState(false);

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route exact path="/" children={<SignIn create={create} />} />
          <Route exact path="/password" children={<Password />} />
          <Route exact path="/create" children={<CreateAccount setCreate={setCreate} />} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Login;
