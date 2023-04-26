import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoreCard } from '../utilities/fakedb';

const Shop = () => {

    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart)



    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    useEffect( ()=>{
        const storedCart = getStoreCard();
        // console.log(storedCart)
        for(const id in storedCart){
            if(storedCart){
                const addedProduct = products.find(product => product.id === id);
                console.log(addedProduct)
            }
        }
    } ,[products])


    const handleAddToCart = (selectedProduct) => {
        const newCart = [...cart, selectedProduct]
        setCart(newCart);
        addToDb(selectedProduct.id)
        
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;