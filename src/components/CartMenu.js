import React from 'react'
import ReactDom from 'react-dom'

import "./CartMenu.css"

export default function CartMenu({ cart, children, onClose }) {
    if (!cart) return null

    window.addEventListener('mouseup', function (event) {
        if (event.target.className !== children.props.className && event.target.parentNode.className !== children.props.className && event.target.parentNode.parentNode.className !== children.props.className && event.target.parentNode.parentNode.parentNode.className !== children.props.className) {
            onClose()
        }
    })

    return ReactDom.createPortal(
        <>
            {children}
        </>,
        document.getElementById("cart-portal")
    )
}