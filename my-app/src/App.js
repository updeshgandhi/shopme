import React, {  useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { Header } from './components/Header'
import { Cards } from './components/Cards'
import { Cart } from './components/Cart'
import { saveProduct } from  './action'

function App() {
  const dispatch = useDispatch()

  const products = useSelector((state) =>  state?.products)

  useEffect(() => {
    fetch(`/api/product`)
      .then((res) => res.json())
      .then((res) => dispatch(saveProduct(res?.products)))
      .catch((err) =>  console.warn(err))
  }, [dispatch])
    
    return (
        <div className="App">
          <Header />
          <div className="card_container">
            {console.log(products, '!!')}
            {products && products.map((data, index) => (
              <Cards {...data} index={index} key={data.productId}/>
            ))}
          </div>
        </div>
    );
}

export default App;
