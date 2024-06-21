import React, { useState } from 'react';
import { Container, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../Store/ShoppingCart/CartSliceUi';
import logo from '../asset/images/logo-lafka-shop.png';
import close from '../asset/images/close.png';

export default function Header() {

  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const toggleform = () => {
    dispatch(cartUiActions.accounttoggle());
  };


  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };


  const showform = useSelector(state => state.cartUi.accountIsVisible);

  const nav__link = [
    { display: "HOME", path: "/home" },
    // { display: "ABOUT LAFKA", path: "/about" },
    { display: "OUR MENU", path: "/foods" },
    { display: "YOUR CART", path: "/cart" },
    { display: "CONTACTS", path: "/contact" },
  ];

  const [activeLink, setActiveLink] = useState('/home');

  return (
    <header className='header'>

      <Container>

        <div className='navbar_head'>
          <div className='navigation'>

            <div className='menu navbar_header '>
              <ul>
                <li><NavLink to="/home" className={(navClass) => navClass.isActive ? "active__menu" : ""}>HOME</NavLink></li>
                {/* <li><NavLink to="/about" className={(navClass) => navClass.isActive ? "active__menu" : ""}>ABOUT LAFKA</NavLink></li> */}
                <li><NavLink to="/foods" className={(navClass) => navClass.isActive ? "active__menu" : ""}>OUR MENU</NavLink></li>
              </ul>
            </div>

            <div className='logo'>
              <img src={logo} alt='logo'></img>
            </div>

            <div className='menu navbar_header2 '>
              <ul>
                {/* <li><NavLink to="/home" className={(navClass) => navClass.isActive ? "active__menu" : ""}>HOME</NavLink></li> */}
                <li><NavLink to="/cart" className={(navClass) => navClass.isActive ? "active__menu" : ""}>YOUR CART</NavLink></li>
                <li><NavLink to="/contact" className={(navClass) => navClass.isActive ? "active__menu" : ""}>CONTACTS</NavLink></li>
              </ul>
            </div>

          </div>

          <ul className={`Nav-menu ${isActive ? 'active' : ''}`}>
            <button onClick={toggleNav}><img src={close} alt='' /></button>
            {nav__link.map((item, index) => (
              <li key={index} className='nav-item'>
                <NavLink to={item.path} onClick={() => setActiveLink(item.path)} className={`nav-tab ${activeLink === item.path ? 'active_menu' : ''}`}>{item.display}</NavLink>
              </li>
            ))}
          </ul>

          <Col>
            <div className='nav__right navbar_header3'>
              <button className="call_btn">
                <span><i className="ri-phone-fill"></i></span>
              </button>
              <button className="navbar_button1">
                <p>Order Online or Call Now:</p>
                <span><i className="ri-phone-fill"></i> +555 234 765 1</span>
              </button>
              <div className='navbar_btn_con'>
                <button className="navbar_button2">

                  {showform ? (
                    <span className='iconsbtn' onClick={toggleform}><i class="ri-close-line"></i></span>
                  ) : (
                  <span className='iconsbtn' onClick={toggleform}><i className="ri-user-line"></i></span>
                  )}
                  <span><i className="ri-heart-line"></i></span>
                  <span onClick={toggleCart}><i className="ri-shopping-cart-line"></i> <span className="cart__badge">{totalQuantity}</span></span>
                  <span><i className="ri-search-2-line"></i></span>
                </button>
                <button className="menu_offcanvas" onClick={toggleNav}>
                  <span><i className="ri-menu-2-line"></i></span>
                </button>
              </div>
            </div>
          </Col>
        </div>
        
      </Container>
    </header>
  );
}
