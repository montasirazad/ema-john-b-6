import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)

    let total = 0
    let shipping = 0;
    let quantity = 0;


    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * .1).toFixed(2));

    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Order summery</h2>
            <p>Total selected items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;