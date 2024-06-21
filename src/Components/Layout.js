import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Routers from '../Routes/Routers'
import Carts from '../Category/Cart/Carts'
import { useSelector } from 'react-redux'
import Login from '../Pages/Login'

export default function Layout() {

    const showCart = useSelector(state => state.cartUi.cartIsVisible)
    const showform = useSelector(state => state.cartUi.accountIsVisible);

    return (
        <div>

            <Header></Header>

            {showform ? <Login /> : null}
            {showCart ? <Carts></Carts> : null}
            {/* //             <Carts></Carts>  */}

            <div>
                <Routers></Routers>
            </div>

            <Footer></Footer>

        </div>
    )
}