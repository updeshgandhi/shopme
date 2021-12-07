import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { saveCart } from  '../action'
import LazyLoader from "./LazyLoad";

export const Cards = ({ index, gender, primaryColour, searchImage, brand, product, price, isCart }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleCart = (e) => {
        dispatch(saveCart(e.target.value))
        navigate('/cart');
    }

    return (
        <div className="card">
            <div className="card_info">
                <div>Gender: {gender}</div>
                <div>Color: {primaryColour}</div>
            </div>
            {/* <img className="img" src={searchImage} alt="Avatar" />  */}
            <LazyLoader src={searchImage} threshold={[0, 0.5, 1]} />
            <div className="container">
                <h4><b>{brand}</b></h4>
                <p>{product}</p>
                <p>Cost: {price}</p>
                {!isCart && <button className="button" value={index} type="button" onClick={handleCart}>Add to cart</button>}
            </div>
         </div>
    )
}
