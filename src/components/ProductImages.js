import React, { useState, useEffect } from 'react'
import "./ProductImages.css"
import Modal from './Modal'

import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";

import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";

import previousIcon from '../images/icon-previous.svg';
import nextIcon from '../images/icon-next.svg';

export default function ProductImages({ cartIsOpen, menuIsOpen }) {
    const products = [
        { src: product1, class: "show" },
        { src: product2, class: "" },
        { src: product3, class: "" },
        { src: product4, class: "" }
    ]

    const thumbnails = [
        { src: thumbnail1, class: "active" },
        { src: thumbnail2, class: "" },
        { src: thumbnail3, class: "" },
        { src: thumbnail4, class: "" }
    ]

    const [productsNumber, setProductsNumber] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [cart, setCart] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        setCart(cartIsOpen);
        setMenu(menuIsOpen);
    }, [cartIsOpen, menuIsOpen])

    return (
        <>
            <div className="products-container">
                <div className="product-container" onClick={(window.innerWidth > 1200) ? () => setIsOpen(true) : null}>
                    <div className={(cart === true || menu === true) ? "mButton" : "mButton active"}>
                        <div className="mPrevious-container" onClick={() => (productsNumber === 0) ? setProductsNumber(3) : setProductsNumber(productsNumber - 1)}>
                            <img src={previousIcon} className="previous-icon" alt="previousIcon" />
                        </div>
                        <div className="mNext-container" onClick={() => (productsNumber === 3) ? setProductsNumber(0) : setProductsNumber(productsNumber + 1)}>
                            <img src={nextIcon} className="next-icon" alt="nextIcon" />
                        </div>
                    </div>
                    {products.map((product, index) =>
                        <img src={product.src} key={index} className={`product ${(productsNumber === index) ? "show" : ""}`} alt="product-Images" />
                    )}
                </div>
                <div className="thumbnail-container">
                    {thumbnails.map((thumbnail, index) =>
                        <img src={thumbnail.src} key={index} className={`thumbnail ${(productsNumber === index) ? "active" : ""}`} onClick={() => changeProduct(index)} alt="thumbnail-Images" />
                    )}
                </div>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} productsNumber={productsNumber}>
                <div className="modal-product">
                    {products.map((product, index) =>
                        <img src={product.src} key={index} className={`M-product ${(productsNumber === index) ? "show" : ""}`} alt="product-Images" />
                    )}
                    <div className="previous-container" onClick={() => (productsNumber === 0) ? setProductsNumber(3) : setProductsNumber(productsNumber - 1)}>
                        <img src={previousIcon} className="previous-icon" alt="previousIcon" />
                    </div>
                    <div className="next-container" onClick={() => (productsNumber === 3) ? setProductsNumber(0) : setProductsNumber(productsNumber + 1)}>
                        <img src={nextIcon} className="next-icon" alt="nextIcon" />
                    </div>
                </div>
                <div className="modal-thumbnail">
                    {thumbnails.map((thumbnail, index) =>
                        <img src={thumbnail.src} key={index} className={`M-thumbnail ${(productsNumber === index) ? "active" : ""}`} onClick={() => changeProduct(index)} alt="thumbnail-Images" />
                    )}
                </div>
            </Modal>
            <div id="modal-portal" />
        </>
    )

    function changeProduct(index) {
        setProductsNumber(index)
    }
}
