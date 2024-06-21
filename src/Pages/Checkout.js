import React, { useState } from 'react'
import CommonSection from '../CommonSection/CommonSection'
import { useSelector } from 'react-redux';
import Helmet from '../Components/Helmet';

export default function Checkout() {

  const cartItem = useSelector(state => state.cart.cartItems);
  const TotalAmount = useSelector(state => state.cart.totalAmount);

  const [checkouted, setcheckouted] = useState(false)

  const placedorder = () => {
    setcheckouted(true)
  }

  return (
    <Helmet title={'Checkout'}>

    <>
      <div className="checkout">

        <CommonSection title="CHECKOUT"></CommonSection>

        {checkouted ? (

          <div className="orderplaced">
            <p className='op1'><i class="ri-checkbox-circle-line"></i>Thank you. Your order has been received.</p>
          </div>

        ) : (
          <section className="checkoutSec clearfix">
            <div className="BillingDetail flex3">
              <p className='BillHeading'>Billing details</p>

              <form action="">


                <div className="BillDetailBoxes clearfix">
                  <div className='BillDetailBox'>
                    <label htmlFor="fname" className='BDBLabel'>FIRST NAME *</label><br />
                    <input type="text" name='fname' className='BDBInput' required />
                  </div>
                  <div className='BillDetailBox'>
                    <label htmlFor="lname" className='BDBLabel'>LAST NAME *</label><br />
                    <input type="text" name='lname' className='BDBInput' required />
                  </div>

                </div>

                <div className='BillDetailBox '>
                  <label htmlFor="country" className='BDBLabel'>COUNTRY / REGION *</label><br />
                  <input type="text" name='country' className='BDBInput' required />
                </div>
                <div className='BillDetailBox '>
                  <label htmlFor="street" className='BDBLabel'>STREET ADDRESS *</label><br />
                  <input type="text" name='street' placeholder='House number and street name' className='BDBInput' required /><br />
                  <input type="text" name='street' placeholder='Apartment, suite, unit, etc.(optional)' className='BDBInput' required />
                </div>
                <div className='BillDetailBox '>
                  <label htmlFor="town" className='BDBLabel'>TOWN / CITY *</label><br />
                  <input type="text" name='town' className='BDBInput' required />
                </div>
                <div className='BillDetailBox '>
                  <label htmlFor="postcode" className='BDBLabel'>POSTCODE / ZIP *</label><br />
                  <input type="number" name='postcode' className='BDBInput' required />
                </div>
                <div className='BillDetailBox'>
                  <label htmlFor="phone" className='BDBLabel'>PHONE *</label><br />
                  <input type="number" name='phone' className='BDBInput' required />
                </div>
                <div className='BillDetailBox '>
                  <label htmlFor="email" className='BDBLabel'>EMAIL *</label><br />
                  <input type="email" name='email' className='BDBInput' required />
                </div>

              </form>
            </div>

            <div className="BillingPricing flex2">
              <div className="billprice_header clearfix">
                <p className='flex1 flx1'>Product</p>
                <p className='flex1 flx2'>Subtotal</p>
              </div>

              <div className="billprice_products">
                {
                  cartItem.map(item =>
                    <div className='clearfix probox' key={item.id}>
                      <p className='flex1 flx1 protitle'>{item.title}<span className='proqty'> x {item.quantity}</span></p>
                      <p className='flex1 flx2 prototalprice'>${item.totalPrice}</p>
                    </div>
                  )
                }

                <div className="clearfix billprice_st">
                  <p className='billprice_head1 flex1 flx1'>Subtotal</p>
                  <p className='billprice_head3 flex1 flx2'>${TotalAmount}</p>
                </div>
                <div className="clearfix billprice_st billprice_st2">
                  <p className='billprice_head1 flex1 flx1'>Total</p>
                  <p className='billprice_head2 flex1 flx2'>${TotalAmount}</p>
                </div>

                <div className="payment">
                  <div className="clearfix">
                    <input type="radio" name="payment" id="cash" />
                    <p className="pay1">CASH ON DELIVERY</p>
                  </div>


                  <p className='pay2'>Pay with cash upon delivery.</p>

                  <div className="clearfix">
                    <input type="radio" name="payment" id="card" />
                    <p className="pay1">CREDIT CARD (STRIPE)</p>
                  </div>

                </div>

              </div>

              <button className='PlaceOrder' onClick={placedorder}>PLACE ORDER</button>
            </div>
          </section>

        )}

      </div>
    </>
    </Helmet>

  )
}
