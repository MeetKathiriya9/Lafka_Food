import React, { useState } from 'react'
import products from '../Pages/Prodata'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Store/ShoppingCart/CartSlice'

import CommonSection from '../CommonSection/CommonSection.js'
import userimg from '../asset/images/user.jpeg'
import ProductCart from './ProductCart.js'
import Helmet from '../Components/Helmet.js'

export default function Fooddetails() {

    const [tab, setTab] = useState('desc');
    const dispatch = useDispatch();

    const { id } = useParams();
    const product_item = products.find(product => product.id === id);
    const [itemImg, setItemImg] = useState(product_item.image01)

    const { title, price, category, image01, desc } = product_item;

    const [countQty, setCountqty] = useState(1)

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
            quantity: countQty
        }))
    }

    const counterQtyinc = () => {
        let count = countQty + 1;
        setCountqty(count)
    }

    const counterQtydec = () => {
        let count = countQty;
        if (countQty > 1) {
            count = countQty - 1;
        }
        else {
            count = 1;
        }
        setCountqty(count)
    }

    const relatedProduct = products.filter(item => item.category === category)



    // review functionality

    const [reviews, setReviews] = useState([]);

    const handleAddReview = (review) => {
        setReviews([...reviews, review]);
    };

    const [newReview, setNewReview] = useState({
        name: '',
        email: '',
        content: '',
    });

    const handleChange = (e) => {
        setNewReview({ ...newReview, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddReview(newReview);
        // Reset the form fields after submission
        setNewReview({ name: '', email: '', content: '' });
    };


    return (
        <Helmet title={title}>
        <div>
            <CommonSection title={title}></CommonSection>

            <section className='food'>

                <div className='clearfix imagebox'>
                    <div className='flex'>
                        <img src={itemImg} alt="" className='images' />

                        <div className="clearfix imglists">
                            <div className='imglist' onClick={() => setItemImg(product_item.image01)}>
                                <img src={product_item.image01} alt="" />

                            </div>
                            <div className='imglist' onClick={() => setItemImg(product_item.image02)}>
                                <img src={product_item.image02} alt="" />

                            </div>
                            <div className='imglist' onClick={() => setItemImg(product_item.image03)}>
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
                                <p className='indicator' onClick={() => counterQtyinc()}><i class="ri-add-line"></i></p>
                                <p className='count'>{countQty}</p>
                                <p className='indicator' onClick={() => counterQtydec()}><i class="ri-subtract-fill"></i></p>
                            </div>

                            <button className='order' onClick={addToCart}>ORDER</button>
                        </div>

                    </div>
                </div>

            </section>

            <section className="reviews">

                <div className="rev_desc clearfix">
                    <p className={`rev_descCon1 rev_descConn ${tab === 'desc' ? 'tabs_active' : ''}`} onClick={() => setTab('desc')}>Description</p>
                    <p className={`rev_descCon2 rev_descConn ${tab === 'review' ? 'tabs_active' : ''}`} onClick={() => setTab('review')}>Reviews ({reviews.length})</p>
                </div>


                {tab === 'desc' ? (
                    <div className="description">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae architecto suscipit officiis nemo quisquam eum perferendis saepe natus voluptatem tempore dicta nam illo amet laudantium quaerat magnam, quasi tenetur perspiciatis assumenda accusamus necessitatibus? Eos, reprehenderit. Quia magnam eligendi ipsa facilis doloremque atque exercitationem explicabo soluta, voluptatum, nemo nihil cupiditate repudiandae.</p>
                    </div>
                ) : (
                    <div className="reviewSec clearfix">

                        <div className="revSec1 flex1">

                            <div className="review-list">
                                <p className='revSec1con1'>Reviews</p>
                                {reviews.length === 0 ? (
                                    <p className='revSec1con2'>There are no reviews yet.</p>
                                ) : (
                                    <ul className='reviewBoxes'>
                                        {reviews.map((review, index) => (
                                            <li className='reviewBox' key={index}>
                                                <img src={userimg} alt="userimg" className='userimg' />
                                                <p className='reviewBoxCon1'>{review.name}</p>
                                                <p className='reviewBoxCon2'>{review.content}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="revSec2 flex1">
                            <p className='revSec2con1'>Add a review</p>
                            <p className='revSec2con2'>Your email address will not be published. Required fields are marked *</p>

                            <form onSubmit={handleSubmit}>

                                <div>
                                    <label htmlFor="content" className='revSec2Review'>YOUR REVIEW *</label><br></br>
                                    <textarea name="content"
                                        value={newReview.content}
                                        onChange={handleChange}
                                        required id="review" className='revSec2Reviewin'></textarea>
                                </div>

                                <div className="clearfix">
                                    <div className='flex1'>
                                        <label htmlFor="name" className='revSec2name'>NAME *</label><br></br>
                                        <input type="text" name="name"
                                            value={newReview.name}
                                            onChange={handleChange}
                                            required className='revSec2namein' />
                                    </div>
                                    <div className='flex1'>
                                        <label htmlFor="email" className='revSec2email'>EMAIL *</label><br></br>
                                        <input type="text" name="email"
                                            value={newReview.email}
                                            onChange={handleChange}
                                            required className='revSec2emailin' />
                                    </div>
                                </div>

                                <button type="submit" className='revSec2btn'>SUBMIT</button>
                            </form>

                        </div>
                    </div>
                )}


            </section>


            {/* RelatedRecipes */}
            <section>

            <p className='RelatedTitle'>Other <span className='cateLine'>{category}S</span> You'll Love</p>

                <div className="product_menu">
                    {
                        relatedProduct.map((item) => {
                            return <div className='product_list' key={item.id}>
                                <ProductCart item={item}></ProductCart>
                            </div>
                        })
                    }
                </div>

            </section>
        </div>
        </Helmet>
    )
}
