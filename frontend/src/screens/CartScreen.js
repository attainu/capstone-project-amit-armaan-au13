import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart } from "../action/cartAction";
const Cart = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const Cart = useSelector((state)=>state.cart)

  const {cartItems} = Cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
const removeFromCartHandler=(id)=>{
    console.log("remove")
}

  return (
    <Row>
      <Col md={9}>
        <h1>Shipping Cart</h1>
        {cartItems.length === 0 ?(<h1>No Items In Your Cart</h1>):(<h3>{cartItems.map((item)=>{
            <h5>{cartItems.name}</h5>
        })}</h3>)}
      </Col>

      <Col md={3}>
        <h1>My Orders</h1>

      </Col>
    </Row>
  );
};

export default Cart;
