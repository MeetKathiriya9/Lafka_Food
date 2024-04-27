import React, { useState } from 'react'
import products from '../Pages/Prodata'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Store/ShoppingCart/CartSlice'

import CommonSection from '../CommonSection/CommonSection.js'

export default function Fooddetails() {

  const [tab, setTab] = useState('desc');
  const dispatch = useDispatch();

  const { id } = useParams();
  const product_item = products.find(product => product.id === id);
  const [itemImg, setItemImg] = useState(product_item.image01)

  const { title, price, category, image01, desc } = product_item;

  const [countQty , setCountqty] = useState(1)
 
  useEffect(() => {

    setItemImg(product_item.image01);
    window.scrollTo(0, 0)

  }, [product_item]);

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01,
      quantity : countQty
    }))
  }

  const counterQtyinc = () => {
    let count = countQty + 1;
    setCountqty(count)
  }

  const counterQtydec = () => {
    let count = countQty;
    if(countQty > 1){
        count = countQty - 1;
    }
    else{
        count = 1;
    }
    setCountqty(count)
  }

  const relatedProduct = products.filter(item => item.category === category)

  return (
    <div>
        <CommonSection title={title}></CommonSection>

        <section className='food'>

            <div className='clearfix imagebox'>
                <div className='flex'>
                    <img src={itemImg} alt="" className='images'/>

                    <div className="clearfix imglists">
                        <div className='imglist' onClick={() => setItemImg(product_item.image01)}>
                         <img src={product_item.image01} alt="" />

                        </div>
                        <div className='imglist'  onClick={() => setItemImg(product_item.image02)}>
                         <img src={product_item.image02} alt="" />

                        </div>
                        <div className='imglist'  onClick={() => setItemImg(product_item.image03)}>
                         <img src={product_item.image03} alt="" />

                        </div>
 
                    </div>
                </div>

                <div className='flex details'>
                    <h2 className='title'>{title}</h2>
                    <p className='desc'>{desc}</p>

                    <p className='serv'><i class="ri-scales-3-fill"></i><span className='desc1'>Serving size:  </span><span className='desc2'>320g</span></p>

                    <div>
                        <div className='clearfix'>
                            <div className='descbox'>
                                <p className='desc1'>ENERGY</p>
                                <p className='desc2'>430 Cal</p>
                            </div>
                            <div className='descbox'>
                                <p className='desc1'>PROTEIN</p>
                                <p className='desc2'>32 g</p>
                            </div>
                            <div className='descbox'>
                                <p className='desc1'>FAT</p>
                                <p className='desc2'>19 g</p>
                            </div>
                            <div className='descbox'>
                                <p className='desc1'>SAT FAT</p>
                                <p className='desc2'>3.0 g</p>
                            </div>
                            <div className='descbox'>
                                <p className='desc1'>CARBS</p>
                                <p className='desc2'>27 g</p>
                            </div>
                        </div>
                        <div className='clearfix'>
                            <div className='descbox'>
                                <p className='desc1'>DI*</p>
                                <p className='desc2'>22%</p>
                            </div>
                            <div className='descbox'>
                                <p className='desc1'>DI*</p>
                                <p className='desc2'>64%</p>
                            </div>
                            <div className='descbox'>
                                <p className='desc1'>DI*</p>
                                <p className='desc2'>24%</p>
                            </div>
                            <div className='descbox'>
                                <p className='desc1'>DI*</p>
                                <p className='desc2'>15%</p>
                            </div>
                            <div className='descbox'>
                                <p className='desc1'>DI*</p>
                                <p className='desc2'>10%</p>
                            </div>
                        </div>

                    </div>

                    <div className="clearfix">
                        <h3 className='price'><del>$ 8.99</del></h3>
                        <h3 className='price2'>$ {price}</h3>
                    </div>
                    
                    <div className='clearfix'>
                        <div className='clearfix qty'>
                            <p className='indicator'onClick={() => counterQtyinc()}><i class="ri-add-line"></i></p>
                            <p className='count'>{countQty}</p>
                            <p className='indicator' onClick={() => counterQtydec()}><i class="ri-subtract-fill"></i></p>
                        </div>

                        <button className='order' onClick={addToCart}>ORDER</button>
                    </div>

                </div>
            </div>

        </section>

        <section className="reviews">
            
        </section>
    </div>
  )
}
