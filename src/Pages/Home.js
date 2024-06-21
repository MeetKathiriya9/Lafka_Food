import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import products from './Prodata'

import slider_logo from '../asset/images/build-burger-slide-final.png'
import cat_logo1 from '../asset/images/cat-burger1-440x440.jpg'
import cat_logo2 from '../asset/images/cat-pizza1-440x440.jpg'
import cat_logo3 from '../asset/images/cat-dessert1-440x440.jpg'
import cat_logo4 from '../asset/images/cat-sides1-440x440.jpg'
import cat_logo5 from '../asset/images/cat-sandwiches1-440x440.jpg'
import services_img1 from '../asset/images/delivery-pic-home.png'
import food1 from '../asset/images/pizza-slice.png'
import food2 from '../asset/images/hamburger.png'
import food3 from '../asset/images/ice-cream.png'
import food4 from '../asset/images/salad.png'
import ProductCart from './ProductCart'
import Slider from '../Slider/Slider'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Helmet from '../Components/Helmet'


export default function Home() {

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
    });
  }, [])

  // product cart

  const [category, setCategory] = useState('ALL');
  const [allproducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products)
    }
    if (category === 'BURGER') {
      const filterProduct = products.filter(item => item.category === 'BURGER')
      setAllProducts(filterProduct)
    }
    if (category === 'PIZZA') {
      const filterProduct = products.filter(item => item.category === 'PIZZA')
      setAllProducts(filterProduct)
    }
    if (category === 'SALAD') {
      const filterProduct = products.filter(item => item.category === 'SALAD')
      setAllProducts(filterProduct)
    }
    if (category === 'DESSERT') {
      const filterProduct = products.filter(item => item.category === 'DESSERT')
      setAllProducts(filterProduct)
    }
  }, [category])

  // product cart


  return (
    <Helmet title={'Home'}>

    <div>
      <Container>

        <section className='slider'>

          <div className='slider_content'>
            <h2>YOUR BURG'R</h2>
            <h1>YOUR TASTE</h1>
            <p>Choose Your Favorite Ingridients</p>
            <button>BUILD YOUR BURGER</button>
          </div>

          <div className='slider_logo'>
            <img src={slider_logo} alt="burger logo" />
          </div>

        </section>

      </Container>

      {/* section 1 complete */}

      <Container>

        {/* there is need of silder for responsive */}

        <section className='product_category'>

          <div className='product_cards' data-aos="fade-up" data-aos-duration='100'>

            <div className='product_card'>
              <img src={cat_logo1} alt="" />
            </div>
            <p>BURGERS</p>

          </div>

          <div className='product_cards' data-aos="fade-up" data-aos-duration='200'>

            <div className='product_card'>
              <img src={cat_logo2} alt="" />
            </div>
            <p>PIZZA</p>

          </div>

          <div className='product_cards' data-aos="fade-up" data-aos-duration='300'>

            <div className='product_card'>
              <img src={cat_logo5} alt="" />
            </div>
            <p>SANDWICHES</p>

          </div>

          <div className='product_cards' data-aos="fade-up" data-aos-duration='400'>

            <div className='product_card' >
              <img src={cat_logo3} alt="" />
            </div>
            <p>DESSERTS</p>

          </div>

          <div className='product_cards' data-aos="fade-up" data-aos-duration='500'>

            <div className='product_card'>
              <img src={cat_logo4} alt="" />
            </div>
            <p>SALADS</p>

          </div>

        </section>

      </Container>

      {/* section 2 complete */}


      <div className='services'>

        <div className='service_content1'>
          <h3>4 Convenient Pick Up Spots</h3>
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button>FIND NEAREST LAFKA</button>
        </div>

        <div className='service_img' data-aos="zoom-in" data-aos-duration='300'>
          <img src={services_img1} alt="" />
        </div>

        <div className='service_content2'>
          <h3>Fast & Free Home Delivery</h3>
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button>ORDER ONLINE DELIVERY</button>
        </div>

      </div>

      {/* section 3 complete */}

      <div className='food_menu'>

        <div className='food_header'>
          <h1>Popular Foods</h1>

          <div className='food_button'>
            <button className={`${category === 'ALL' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('ALL')}>ALL</button>

            <button className={`${category === 'PIZZA' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('PIZZA')}><img src={food1} alt="" className='ih' />PIZZA</button>

            <button className={`${category === 'BURGER' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('BURGER')}><img src={food2} alt="" className='ih' />BURGER</button>

            <button className={`${category === 'SALAD' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('SALAD')}><img src={food4} alt="" className='ih' />SALAD</button>

            <button className={`${category === 'DESSERT' ? 'foodBtnActive' : ''}`} onClick={() => setCategory('DESSERT')}><img src={food3} alt="" className='ih' />DESSERT</button>
          </div>
        </div>

        <div className='product_menu'>
          {
            allproducts.map((item) => {
              return (
                <div className='product_list' key={item.id}  data-aos="fade-up" data-aos-duration="1000">
                  <ProductCart item={item}></ProductCart>
                </div>
              )
            })
          }
        </div>

      </div>

      {/* section 4 complete */}


      <Slider></Slider>

    </div>
    </Helmet>

  )
}
