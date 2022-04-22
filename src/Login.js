import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import './styles/Authstack.css';
import { Link } from "react-router-dom";
import { db } from './base.js';

const Login = ({ history }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  db.collection('user_directory').add({
    user_email: email,
    user_password: password
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });

  const handleSetEmail = event => {
    setEmail(event.target.value);
  }

  const handleSetPassword = event => {
    setPassword(event.target.value);
  }

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="authcontainer">
      <h1>Log In</h1>
      <form className="form" onSubmit={handleLogin}>
          <input name="email" type="email" placeholder="Email" onChange={handleSetEmail} />
          <input name="password" type="password" placeholder="Password" onChange={handleSetPassword} />
        <button type="submit" >Log in</button>
      </form>
      <p className="bottomline">Don't have an account? <Link to={"/signup"}>Sign Up</Link></p>
    </div>
  );
};

export default withRouter(Login);
