import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios" ;

export default function Registeruser(props) {
  console.log(props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");


 

  function validateForm() {
   
    return email.length > 6 && password.length > 0 && password2.length > 0 
    && firstname.length > 0 
    && secondname.length > 0 
  }
  

  function handleSubmit (event) {
    event.preventDefault();
    if (password === password2 ) {
      console.log(props.history);
      props.history.push("/login");
    }
    else  {
      console.log('Password est incorrect');
    } 
    
  }

  return (

    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="Formulair">

        <ControlLabel>REGISTER</ControlLabel>

        <FormGroup controlId="firstname" bsSize="large">
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="Your FirstNme"
              value={firstname} 
              onChange={e => setFirstname(e.target.value)}              
            />
          </FormGroup>
          <FormGroup controlId="secondname" bsSize="large">
            <ControlLabel>Second Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="Your SecondName"
              value={secondname} 
              onChange={e => setSecondname(e.target.value)}
            />
          </FormGroup>


          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              placeholder="Your Email"
              value={email} required
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={password} required
              placeholder="Your Password"
              onChange={e => setPassword(e.target.value)}
              type="password"
            />

            
          </FormGroup>

          <FormGroup controlId="password2" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={password2} required
              placeholder="Confirm your Password"
              onChange={e => setPassword2(e.target.value)}
              type="password"
            />

            
          </FormGroup>
          <Button
            className="submitForm"
            block
            bsSize="large"
            disabled={!validateForm() }
            type="submit"
            
          >
            Register
          </Button>
          <ControlLabel> Do you have an account ? <a href="/login"> LogIn </a></ControlLabel>
        </div>
      </form>
    </div>
  )
}
