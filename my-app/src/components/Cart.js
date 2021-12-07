import React from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Cards } from './Cards'

const Cart = () => {
    const navigate = useNavigate()
    const products = useSelector((state) =>  state?.products)
    const carts = useSelector((state) =>  state?.carts)
    const goBack = () => {
        navigate(-1)
    }

    console.log(products?.[carts[0]], carts)

    return (
        <>
            <button className="button" type="button" onClick={goBack}>Back</button>
            <h1>Cart</h1>
            <div className="card_container">
                {carts && carts.map((data, index) => (
                    <Cards {...products[data]} index={index} isCart key={index}/>
                ))}
            </div>
        </>
        )
}

export default Cart;