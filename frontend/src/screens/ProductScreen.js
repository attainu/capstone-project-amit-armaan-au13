import React from "react";
import Rating from '../components/Rating'
import { Card,Button } from "react-bootstrap";

function ProductScreen(props) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <a href={`/product/${props.items._id}`}>
          <Card.Img src={props.items.image} variant="top" />
        </a>
        <Card.Body>
          <a href={`/product/${props.items._id}`}>
            <Card.Title as="div">
              <strong>{props.items.name}</strong>
            </Card.Title>
          </a>
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
