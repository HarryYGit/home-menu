import React from 'react';
import emailjs from '@emailjs/browser';

const ShoppingCart = ( {cart} ) => {

  const sendOrder = () => {

    const orderDetails = cart.map(item => `${item.name} - $${item.price}`).join(`\n`);

    const templateParams = {
      to_name: 'Customer',
      from_name: 'Your Shop Name',
      message: `Order Details:\n${orderDetails}`
    };

    emailjs
      .send('service_hjp33ty', 'template_i3xszm8', templateParams, {
        publicKey: 'j8gHfeUJcHPL-xZ9n',
        })
      .then(
        () => {
          alert("Order sent to Kitchen Successfully!");
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  }


  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      <ul>
        {cart.length === 0 ? (
          <li className="text-gray-500">Your cart is empty</li>
        ) : (
          cart.map((item, index) => (
            <li key={index} className="border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-gray-500">${item.price} * 1</p>
                </div>

              </div>
            </li>  
          ))
        )}
        
      </ul>
      {cart.length > 0 ? (
        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={sendOrder}
        disabled={cart.length === 0}>
          send to kitchen
        </button>
      ) : (<p></p>)}

    </div>
  );
}

export default ShoppingCart;