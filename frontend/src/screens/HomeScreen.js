import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../screens/ProductScreen";
import axios from 'axios'

const HomeScreen = () => {
  const [products, SetProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products');
      SetProducts(data);
    }
    fetchProducts()
    
  },[]);
  return (
    <>
      <h2>Latest Health Products</h2>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product items={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
