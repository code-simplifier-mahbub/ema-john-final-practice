import React from 'react';
import './Header.css';
import img from '../images/Logo.svg'

const Header = () => {
    return (
        <div className='nav-container'>
            <div className="logo">
                <img src={img} alt="" />
            </div>
            <div className="navbar">
                <a href="/order">Order</a>
                <a href="review">Order Review</a>
                <a href="inventory">Manage Inventory</a>
                <a href="login">Login</a>
            </div>
        </div>
    );
};

export default Header;