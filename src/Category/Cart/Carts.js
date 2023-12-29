import React from 'react'
import { ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

import CartItem from './CartItem'

import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../../Store/ShoppingCart/CartSliceUi'


import close from '../../asset/images/close.png'

export default function Carts() {

    const cartProducts = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    }

    return (
        
        <div className='cart__container'>
            <ListGroup className='cart'>
                <div className='cart__close' onClick={toggleCart}>
                    <img src={close} alt="" />
                </div>

                <div className='hr1'></div>

                <div className='cart__item-list'>
                    {
                        cartProducts.length === 0 ? (<h6 className='text'>No item added
                            to the cart</h6>) : (cartProducts.map((item, index) => {
                                return <CartItem item={item} key={index}></CartItem>
                            }))
                    }
                </div>
                <div className='cart__bottom'>
                    <h6>Subtotal: <span>${totalAmount}</span></h6>
                    <button><Link to='/checkout'>CHECKOUT</Link></button>
                </div>
            </ListGroup>
        </div>
    )
}