import React from "react";
import {Link} from 'react-router-dom'
import { Navbar, Container, Nav,NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../action/userAction";


const Header = () => {
  const dispatch =useDispatch()

  const userLogin = useSelector(state=>state.userLogin)
  const{userInfo}=userLogin

  const logoutHandler = ()=>{
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/" style={{ textDecoration: "None" }}>
            <Navbar.Brand>
              <img
                src="/images/healthy.png"
                style={{ height: 60, width: 60 }}
              />
              health+
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <LinkContainer to="/cart/:id">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
