import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader";

import { getUserDetails } from "../action/userDetailsAction";

import FormContainer from "../components/FormContainer";


const UserUpdateScreen = ({ match, history }) => {

  const userId = match.params.id;
console.log(userId)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setisAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetail = useSelector((state) => state.userDetail);

  const { loading, error, user } = userDetail;
console.log(error)
  useEffect(() => {
    if (!user || !user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setisAdmin(user.isAdmin);
    }
  }, [user,dispatch,userId]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Link to="/admin/userList" className="btn-btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <h2>{error}</h2>
        ) : (
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
            <Form.Group controlId="isadmin">
              <Form.Check
                type="checkbox"
                label="is Admin"
                checked={isAdmin}
                onChange={(e) => setisAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <br></br>
            <Button type="submit" variant="primary">
              {" "}
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserUpdateScreen;
