import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../Store/ShoppingCart/CartSlice'

import deletelogo from '../../asset/images/delete.png'

export default function CartItem({ item }) {

    const { id, title, price, image01, quantity, totalPrice } = item;

    const dispatch = useDispatch();
    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01,
            quantity: 1
        }))
    }

    const decrementItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }

    return (
        <ListGroupItem className='border-0 cart__item'>
            <div className='cart__item-info'>
                <img src={image01} alt='product_01.1.jpg'></img>
                <div className='cart__product-info'>
                    <div>
                        <h6 className='cart__product-title'>{title}</h6>
                        <p className='cart__product-price'>{quantity} x <span>${totalPrice}</span></p>
                        <div className=' increase__decrease-btn'>
                            <span className='increase__btn' onClick={incrementItem}><i
                                className="ri-add-line"></i></span>
                            <span className='quantity'>{quantity}</span>
                            <span className='decrease__btn' onClick={decrementItem}><i className="ri-subtract-line"></i></span>
                        </div>
                    </div>
                    <span className='delete__btn' onClick={deleteItem}><img src={deletelogo} alt="" /></span>
                </div>
            </div>
        </ListGroupItem>
    )
}
