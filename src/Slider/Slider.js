import React from "react";
import Slider from "react-slick";

import logo1 from '../asset/images/waiter.png'
import logo2 from '../asset/images/fried-chicken.png'
import logo3 from '../asset/images/menu.png'
import stars from '../asset/images/5stars-80x15.png'

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };
    return (
        <div className="Slider_body">
            <div className="Slider">
                <Slider {...settings}>

                    <div>
                        <div className="Slider_box">
                            <img src={logo1} alt="" className="img" />
                            <h4>“The Lafka is, in fact, the burger king when it comes to offering the best food of its kind in Chicago.”</h4>
                            <img src={stars} alt="" className="stars" />
                            <p>Abigail’s Food Blog</p>
                        </div>
                    </div>
                    <div>
                        <div className="Slider_box">
                            <img src={logo2} alt="" className="img" />
                            <h4>“I don´t remember a single mouthful I didn’t enjoy. Right now if I go to any other burger place I’ll wish I´d have gone to the Lafka instead.”</h4>
                            <img src={stars} alt="" className="stars" />
                            <p>Mark Taylor</p>
                        </div>
                    </div>
                    <div>
                        <div className="Slider_box">
                            <img src={logo3} alt="" className="img" />
                            <h4>“The meat comes from butcher Ruby and White’s, the buns are artisan ciabatta, ingredients are locally sourced – no wonder this is the best place to eat burgers in Chicago.”</h4>
                            <img src={stars} alt="" className="stars" />
                            <p>Andrew Robinson</p>
                        </div>
                    </div>


                </Slider>
            </div>
        </div>
    );
}