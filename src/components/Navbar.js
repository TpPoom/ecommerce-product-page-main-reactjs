import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css";
import CartMenu from "../components/CartMenu"

import iconClose from "../images/icon-close.svg"
import iconMenu from "../images/icon-menu.svg"
import iconCart from "../images/icon-cart.svg";
import iconAvatar from "../images/image-avatar.png";
import iconDelete from "../images/icon-delete.svg"
import product1 from "../images/image-product-1.jpg";

export default function Navbar({ cartProducts, setCartProduct, sendCart, sendMenu }) {
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState(false);

    useEffect(() => {
        sendCart(cart)
        sendMenu(menu)
    })

    const navLists = ["Collections", "Men", "Women", "About", "Contract"];

    function deleteCart(index) {
        delete cartProducts[index]
        cartProducts = cartProducts.filter(function (element) {
            return element !== undefined;
        });
        setCartProduct(cartProducts)
    }

    function cartProduct() {
        return cartProducts.map((cartProduct, index) =>
            <li key={index} className="cart-item">
                <img src={product1} className="cartProduct" alt="product1" />
                <div className="cart-details">
                    <div className="title">{cartProduct.productTitle}</div>
                    <div className="price">${cartProduct.productPrice}x{cartProduct.productAmount}</div>
                    <div className="total">${(cartProduct.productPrice * cartProduct.productAmount).toFixed(2)}</div>
                </div>
                <img src={iconDelete} className="deleteProduct" onClick={() => deleteCart(index)} alt="iconDelete" />
            </li>
        )
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <img src={menu ? iconClose : iconMenu} className="icon-menu" alt="icon-menu" onClick={() => setMenu(!menu)} />
                    <div className="mMenu">
                        <div className={menu ? "ddOverlay active" : "ddOverlay"} />
                        <ul className={menu ? "mNav-menu active" : "mNav-menu"}>
                            {navLists.map((navList, index) =>
                                <li key={index} className="mNav-item" onClick={() => setMenu(false)}>
                                    <Link to="/" className="mNavbar-links">
                                        {navList}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="navbar-logo-container">
                        <Link to="/" className="navbar-logo">
                            sneakers
                        </Link>
                    </div>
                    <ul className="nav-menu">
                        {navLists.map((navList, index) =>
                            <li key={index} className="nav-item">
                                <Link to="/" className="navbar-links">
                                    {navList}
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div className="navbar-end-container">
                        <CartMenu cart={cart} onClose={() => setCart(false)}>
                            <ul style={(cartProducts.length === 0) ? { height: "16rem" } : { height: 150 + (cartProducts.length * 80) + "px" }} className="cart-dropdown">
                                <div className="header-cart">Cart</div>
                                {(cartProducts.length === 0) ? <div className="empty">Your cart is empty.</div> : cartProduct()}
                                <button to="/" className={(cartProducts.length === 0) ? "checkout" : "checkout active"}>Checkout</button>
                            </ul>
                        </CartMenu>
                        <div id="cart-portal" />
                        <Link to="/" className="cart">
                            <img src={iconCart} alt="icon-cart" onClick={() => setCart(true)} />
                            <div className={(cartProducts.length === 0) ? "notification" : "notification active"}>{cartProducts.length}</div>
                        </Link>
                        <Link to="/" className="avatar">
                            <img src={iconAvatar} alt="Avatar" />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}