import React, { Fragment, useContext, useState } from "react";
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
  const [create, setCreate] = useState(false);
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
        <Switch location={location}>
          <Route exact path="/" children={<SignIn setCreate={setCreate} />} />
          <Route exact path="/password" children={<Password setCreate={setCreate} />} />
          <Route exact path="/create" children={<CreateAccount />} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Login;
