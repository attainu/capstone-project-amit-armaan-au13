import React from "react";
import Rating from '../components/Rating'
import { Card,Button } from "react-bootstrap";
import {Link} from 'react-router-dom'


function ProductScreen(props) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/productDetails/${props.items._id}`}>
          <Card.Img src={props.items.image} variant="top"/>
        </Link>
        <Card.Body>
          <Link to={`/productDetails/${props.items._id}`}>
            <Card.Title as="div">
              <strong>{props.items.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
          <Rating color="orange" value={props.items.rating} text={`${props.items.numReviews} reviews`}/>
          </Card.Text>
          <Button style={{borderRadius:"25px"}} type="button" variant="success">Rs.{props.items.price}</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductScreen;
