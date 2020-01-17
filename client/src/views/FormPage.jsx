import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
  console.log(props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "anouar@gmail.com") {
      console.log(props.history);
      props.history.push("/admin");
    }
  }


  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="Formulair">
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button
            className="submitForm"
            block
            bsSize="large"
            disabled={!validateForm()}
            type="submit"
          >
            Login
          </Button>
          <ControlLabel> Don't have an account ? <a href="/Register">  Sign Up</a></ControlLabel>
        </div>
      </form>
    </div>
  );
}
