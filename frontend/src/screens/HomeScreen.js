import React from 'react'
import {Row,Col} from 'react-bootstrap'
import products from '../products'
import Product from '../screens/ProductScreen'

const HomeScreen = () => {
    return (
        <>
        <h2>Latest Health Products</h2>
            <Row>
                {products.map(product=>{
                    return <Col sm={12} md={6} lg={4} xl={3}>
                        <Product items={product}/>
                    </Col>;
                   
                })}
            </Row>
        
        
        </>


    )
}

export default HomeScreen
