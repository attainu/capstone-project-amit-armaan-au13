import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import listProducts from "../action/productActions";
import Loader from "../components/loader";
// import products from "../products";
import Product from "../screens/ProductScreen";
// import axios from 'axios'

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const productList = useSelector((state) => state.productList);
  const { loading, error, productItems } = productList;
  console.log(productList)

  return (
    <>
      <h2>Latest  Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {productItems?productItems.map((product, index) => {
            return (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <Product items={product} />
              </Col>
            );
          }):<h3>no products</h3>}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
