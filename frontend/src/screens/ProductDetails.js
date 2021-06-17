import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button ,Form} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/loader";
import productItemDetail from '../action/productDetailsAction'
// import axios from 'axios'

const ProductDetails = ({ history,match }) => {

  const[Qty,setQty] = useState(1)
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("i am here1")
    dispatch(productItemDetail(match.params.id));
    // console.log("i am here2")
  }, [dispatch, match]);

  const addToCartHandler=()=>{
    history.push(`/cart/${match.params.id}?Qty=${Qty}`)
  }

  const product_Item = useSelector(state => state.product_Item);
  const { loading, error, productItem :product} = product_Item;
  console.log("productitemPage", product_Item);


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
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>error</h3>
      ) : (
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

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>qty</Col>
                      <Col>
                        <Form.Control as='select' value={Qty} onChange={(e)=> setQty(e.target.value)}>
                        {
                          [...Array(product.countInStock).keys()].map(x =>(
                            <option key={ x + 1} value={ x + 1 }>{x+1}</option>
                          ))
                        }
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Row>
                    <Button 
                    onClick={addToCartHandler}
                    disabled={product.countInStock === 0}>
                      Add To Cart
                    </Button>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductDetails;
