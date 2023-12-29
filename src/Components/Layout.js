import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Routers from '../Routes/Routers'
import Carts from '../Category/Cart/Carts'
import { useSelector } from 'react-redux'

export default function Layout() {
    const showCart = useSelector(state => state.cartUi.cartIsVisible)
    return (
        <div>
            <Header></Header>
            {showCart ? <Carts></Carts> : null}
            {/* <Carts></Carts>  */}
            <div>
                <Routers></Routers>
            </div>
            <Footer></Footer>
        </div>
    )
}