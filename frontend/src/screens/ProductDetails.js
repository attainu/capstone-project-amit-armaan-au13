import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from 'axios'

const ProductDetails = ({match}) => {
const[product,SetProduct] = useState({})
useEffect(() => {
  const fetchProduct = async () => {
    const { data } = await axios.get(`/api/products/${match.params.id}`);
    SetProduct(data);
  };
  fetchProduct();
}, []);
  return (
    <>
      <Link to="/">
        <Button
          variant="success"
          style={{ borderRadius: "25px" }}
          className="my-3"
        >
          Go Back
        </Button>
      </Link>

      <Row className="mx-3">
        <Col md={6}>
          <Image
            style={{ borderRadius: "20px" }}
            src={product.image}
            alt={product.name}
            fluid
          />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                color="orange"
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>

            <ListGroup.Item>
              <Button
                variant="success"
                style={{ borderRadius: "25px" }}
                className="my-3"
              >
                Rs.{product.price}
              </Button>
            </ListGroup.Item>

            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Rs.{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Button disabled={product.countInStock === 0}>
                    Add To Cart
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
  
};

export default ProductDetails;
