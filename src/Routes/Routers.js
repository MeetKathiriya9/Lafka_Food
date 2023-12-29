import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'

import Home from '../Pages/Home'
import Allfood from '../Pages/Allfood';
import FoodDetails from '../Pages/Fooddetails'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

export default function Routers() {
    return (
            <Routes>
                <Route path='/' element={<Navigate
                    to='/home'></Navigate>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/foods' element={<Allfood></Allfood>}></Route>
                <Route path='/foods/:id'
                    element={<FoodDetails></FoodDetails>}></Route>
                <Route path='/cart' element={<Cart></Cart>}></Route>
                <Route path='/checkout' element={<Checkout></Checkout>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
    )
}