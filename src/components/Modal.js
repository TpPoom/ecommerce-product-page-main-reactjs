import React from 'react'
import ReactDom from 'react-dom'

import "./Modal.css"
import close from "../images/icon-close.svg"

export default function Modal({ open, children, onClose }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="overlay" />
            <div className="modal">
                <div className="modal-close">
                    <img src={close} className="close" onClick={onClose} alt="close" />
                </div>
                {children}
            </div>
        </>,
        document.getElementById("modal-portal")
    )
}