import React, { useState } from 'react'
import "./Page.css";
import Navbar from '../components/Navbar';
import ProductImages from "../components/ProductImages";

import iconMinus from "../images/icon-minus.svg";
import iconPlus from "../images/icon-plus.svg";
import iconCart from "../images/icon-cart.svg"

function Page() {

    const info = [
        {
            name: 'Autumn Limited Edition...',
            company: 'Sneaker Company',
            title: 'Fall Limited Edition Sneakers',
            description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
            price: 250.00,
            discount: 0.5
        }
    ];

    const [amount, setAmount] = useState(0);
    const [id] = useState(0);
    const price = (info[id].price * info[id].discount).toFixed(2);
    const title = info[id].title;
    const [cartProduct, setCartProduct] = useState([]);

    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function details({ company, title, description, price, discount }) {
        return <div className="details">
            <h5>{company}</h5>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="price-product">
                <div className="discount">
                    <h2>${(price * discount).toFixed(2)}</h2>
                    <h3>{discount * 100}%</h3>
                </div>
                <h4>${price.toFixed(2)}</h4>
            </div>
        </div>
    }

    function addAmount() {
        return <div className="amount">
            <img src={iconMinus} className="icon-minus" onClick={() => (amount === 0) ? setAmount(0) : setAmount(amount - 1)} alt="iconMinus" />
            <span className="number">{amount}</span>
            <img src={iconPlus} className="icon-plus" onClick={() => setAmount(amount + 1)} alt="iconPlus" />
        </div>
    }

    function addCart() {
        if (amount !== 0) {
            const newCartProduct = [{ productId: id, productAmount: amount, productPrice: price, productTitle: title }]
            setCartProduct(cartProduct.concat(newCartProduct))
            setAmount(0);
        }
    }

    function sendCart(cart) {
        setCartIsOpen(cart);
    }

    function sendMenu(menu) {
        setMenuIsOpen(menu);
    }

    return (
        <>
            <Navbar cartProducts={cartProduct} setCartProduct={setCartProduct} sendCart={sendCart} sendMenu={sendMenu} />
            <section className="page">
                <div className="page-container">
                    <div className="left-content">
                        <ProductImages cartIsOpen={cartIsOpen} menuIsOpen={menuIsOpen} />
                    </div>
                    <div className="right-content">
                        {details(info[id])}
                        <div className="add-cart">
                            {addAmount()}
                            <button className="add-btn" onClick={addCart}>
                                <img src={iconCart} alt="iconCart" />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page;
