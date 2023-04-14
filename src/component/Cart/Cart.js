import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart-info'>
            <h2>Order Summary</h2>
            <p>Selected Item : {}</p>
            <p>Total Price : {}</p>
            <p>Shipping Charge : {}</p>
            <p>Tax : {}</p>
            <p>Grand Total : {}</p>
        </div>
    );
};

export default Cart;