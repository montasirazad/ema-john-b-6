import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';


const Product = (props) => {

    const { product, handleAddToCart } = props;
    const { name, img, price, seller, ratings } = product;




    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price : {price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings:{ratings}</small></p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>
                <p className='btn-text'>
                    Add to cart
                </p>

                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;