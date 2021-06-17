import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader";
import { getUserDetails } from "../action/userDetailsAction";
const ProfileScreen = ({ location, history }) => {
  console.log(location);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetail = useSelector((state) => state.userDetail);

  const { loading, error, user } = userDetail;

  const userLogin = useSelector((state)=>state.userLogin)
  const{ userInfo } = userLogin


  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
    else{
        if(!user.name){
            dispatch(getUserDetails('profile'))
        }
        else{
            setName(user.name)
            setEmail(user.email)
        }
    }
  }, [history, dispatch, userInfo,user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== conformPassword) {
      setMessage("password do not match");
    } else {
    //dispatch update profile
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h1>User Profile</h1>
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
         

          <br></br>
          <Button type="submit" variant="primary">
            {" "}
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>my orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
