import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader";
import { register } from "../action/userRegisterAction";
import FormContainer from "../components/FormContainer";
const RegisterScreen = ({ location, history }) => {
  console.log(location);
  const[name,setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[conformPassword,setConformPassword] = useState("")
  const[message,setMessage] = useState("")



  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;
  console.log(userInfo);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if(password!==conformPassword){
        setMessage('password do not match')
    }
    else{
         dispatch(register(name, email, password));
    }

    //dispatch register
   
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {loading && <Loader></Loader>}
      {message && <h2>{message}</h2>}
      {error && <h1>{error}</h1>}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            autoComplete="off"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Conform Password</Form.Label>
          <Form.Control
          autoComplete='off'
            type="password"
            placeholder="Conform password"
            value={conformPassword}
            onChange={(e) => setConformPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <br></br>
        <Button type="submit" variant="primary">
          {" "}
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Have an account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
