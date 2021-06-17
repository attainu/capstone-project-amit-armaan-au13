import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link }from 'react-router-dom'
import { Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap'
import { addToCart } from '../action/cartAction'
const Cart = ({match,location,history}) => {

    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]):1

    const dispatch = useDispatch()
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])
    return (
        <div>
            this is ur cart items
            
        </div>
    )
}

export default Cart
