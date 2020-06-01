import React, { Fragment, useState, useEffect } from "react";
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
import useScrollTop from "../../hooks/useScrollTop";

const initialState = {
  create: false,
};

export const LoginContext = React.createContext(initialState);

const Login = () => {
  const location = useLocation();
  const [ create, setCreate ] = useState(false);
  useScrollTop();

  useEffect(() => {
      const timeout = setTimeout(() => {
        create && setCreate(false);
      }, 5000);
      return () => {
        clearTimeout(timeout);
      }
  }, [create]);
  
  return (
    <Fragment>
      {create && (
          <div className="alert-panel">
              <div className="alert alert-primary success-alert" role="alert">
                  Account Created Successfully
              </div>
          </div>
      )}
      <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route exact path="/" children={<SignIn />} />
          <Route exact path="/password" children={<Password />} />
          <Route exact path="/create" children={<CreateAccount setCreate={setCreate} />} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    </Fragment>
  );
};

export default Login;
