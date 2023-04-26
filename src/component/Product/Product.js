import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    // console.log(product)
    const{img, name, seller, price, ratings }=product;

   


    return (
        <div className='product-container'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h2>{name}</h2>
                <p>Price : {price}</p>
                <p>Seller : {seller}</p>
                <p>Rating : {ratings}</p>

            </div>
            <button onClick={()=> handleAddToCart(product)} className='add-button'>Add To Cart</button>
        </div>
    );
};

export default Product;