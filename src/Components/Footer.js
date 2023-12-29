import React from 'react'
import c1 from '../asset/images/c1.webp'
import c2 from '../asset/images/c2.jpg'
import c3 from '../asset/images/c3.png'
import c4 from '../asset/images/c4.webp'
import c5 from '../asset/images/c5.png'
import c6 from '../asset/images/c6.png'
import c7 from '../asset/images/c7.jpg'
import c8 from '../asset/images/c8.webp'

export default function Footer() {
  return (
    <div>

          <div className='footer'>
              <ul className='footer_menu'> 
                <li>Information</li>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Menu</li>
                <li>Blog</li>
                <li>Contacts</li>
              </ul>

              <ul className='footer_menu'> 
                <li>Extras</li>
                <li>My Order</li>
                <li>Checkout</li>
                <li>Catering</li>
                <li>Our Locations</li>
                <li>Privacy Policy</li>
              </ul>

              <ul className='footer_menu'> 
                <li>Get In Touch</li>
                <li><i className="ri-time-fill"></i>Mon. - Sun.: 10:00 - 23:00</li>
                <li><i className="ri-map-pin-fill"></i>164 7th Avenue, Seattle, WA 9801</li>
                <li><i className="ri-phone-fill"></i>+1.888.292.7171</li>
                <li><i className="ri-phone-fill"></i>+1.888.292.7172</li>
                <li><i className="ri-mail-fill"></i>orders@pizza.con</li>
              </ul>

              <ul className='footer_menu'>
                <li>We Accept</li>
                <li><img src={c1} alt="" /><img src={c2} alt="" /><img src={c3} alt="" /><img src={c4} alt="" /></li>
                <li><img src={c5} alt="" /><img src={c6} alt="" /><img src={c7} alt="" /><img src={c8} alt="" /></li>
              </ul>
          </div>

          <div className='footer2'>

            <div>
              <span><i className="ri-facebook-fill"></i></span>
              <span><i className="ri-twitter-fill"></i></span>
              <span><i className="ri-youtube-fill"></i></span>
              <span><i className="ri-instagram-fill"></i></span>
            </div>
            
              <p>Lafka theme by <span>MEET_KATHIRIYA</span> | © 2023 All rights reserved!</p>
          
          </div>

    </div>
  )
}
