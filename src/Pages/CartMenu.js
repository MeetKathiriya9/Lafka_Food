import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../Store/ShoppingCart/CartSlice';
import { Link } from 'react-router-dom';
import CommonSection from '../CommonSection/CommonSection';
import Helmet from '../Components/Helmet';


export default function CartMenu() {

  const cartItem = useSelector(state => state.cart.cartItems);
  const TotalQuantity = useSelector(state => state.cart.totalQuantity);
  const TotalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title={'Cart'}>
      <div className='Cartmenu'>

        <CommonSection title="CART"></CommonSection>

        <section className='cart_section'>
          <div className=' container'>
            {
              cartItem.length === 0 ? (
                <div>
                  <h2 className='head1'>No Item Added In Your Cart.</h2>

                  <Link to='/foods' style={{ width: '300px', margin: '45px auto 0px', display: 'block' }}><button className='shopping_cart flex1' >MORE SHOPPING</button></Link>

                </div>
              ) : (
                <div className='cart_table'>
                  <table className='clearfix mobileView'>

                    <div className="CartTable_Item flex3">
                      {
                        cartItem.map(item => <Tr key={item.id} item={item}></Tr>)
                      }
                    </div>

                    <div className='CartTable_Bill flex2'>
                      <p className='heading1'>CART TOTALS</p>

                      <div className="clearfix bill_box">
                        <p className='heading2 flex1'>Quantity</p>
                        <p className='heading3 flex1'>{TotalQuantity}</p>
                      </div>
                      <div className="clearfix bill_box">
                        <p className='heading2 flex1'>Subtotal</p>
                        <p className='heading4 flex1'>${TotalAmount}</p>
                      </div>
                      <div className="clearfix bill_box">
                        <p className='heading2 flex1'>Total</p>
                        <p className='heading3 flex1'>${TotalAmount}</p>
                      </div>

                      <div className="bill_box2">
                        <Link to='/foods' style={{ width: '100%' }}><button className='shopping_cart'>MORE SHOPPING</button></Link>
                        <Link to='/checkout' style={{ width: '100%' }}><button className='checkout_btn'>PROCEED TO CHECKOUT</button></Link>
                      </div>
                    </div>

                  </table>
                </div>
              )}

          </div>
        </section>

      </div>
    </Helmet>
  )
}


const Tr = (props) => {
  const { image01, title, totalPrice, quantity, id, price } = props.item;

  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <tr className='clearfix TableTr'>
      <td className='td1' onClick={deleteProduct}><i className="ri-delete-bin-6-line delete_ico"></i></td>
      <td className='td2'><img src={image01} alt="" /></td>
      <td className='td3'>{title}</td>
      <td className='td4'>${price}</td>
      <td className='td5'>{quantity}</td>
      <td className='td6'>${totalPrice}</td>
      <td className='td7'><span className='tdspan'>Product: </span>{title}</td>
      <td className='td8'><span className='tdspan'>Price: </span>${price}</td>
      <td className='td9'><span className='tdspan'>Quantity: </span>{quantity}</td>
      <td className='td10'><span className='tdspan'>Subtotal: </span>${totalPrice}</td>
    </tr>
  )
}