import React from 'react'
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { cartActions } from '../Store/ShoppingCart/CartSlice';


export default function ProductCart(props) {

    const { id, title, image01, price } = props.item;

    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }

    return (
        <>

            <div className='product_item'>
                <p>$ {price}</p>
                <div className='product_img'>
                    <Link to={`/foods/${id}`}><img src={image01} alt='Product Img'
                        className='w-50'></img></Link>
                </div>
                <h4><Link to={`/foods/${id}`}>{title}</Link></h4>
            </div>

            <div className='product_button'>
                <button  onClick={addToCart}>ADD TO CART</button>

            </div>

        </>
    )
}
