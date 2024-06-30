import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Coffee from './components/Coffee';
import ShoppingCart from './components/ShoppingCart';
import { coffee } from './components/MenuData';


function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (coffeeItem) => {
    setCart([...cart, coffeeItem]);
  };



  return (
    <div>
      <div>
        <Coffee addToCart = {addToCart} />
        <ShoppingCart cart = {cart} />

      </div>

      


    </div>
    

  );
}

export default App;
