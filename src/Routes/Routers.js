import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'

import Home from '../Pages/Home'
import Allfood from '../Pages/Allfood';
import FoodDetails from '../Pages/Fooddetails'
import Checkout from '../Pages/Checkout'
import Contact from '../Pages/Contact'
import CartMenu from '../Pages/CartMenu';

export default function Routers() {
    return (
            <Routes>
                <Route path='/' element={<Navigate
                    to='/home'></Navigate>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/foods' element={<Allfood></Allfood>}></Route>
                <Route path='/foods/:id'
                    element={<FoodDetails></FoodDetails>}></Route>
                <Route path='/cart' element={<CartMenu></CartMenu>}></Route>
                <Route path='/checkout' element={<Checkout></Checkout>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
    )
}