import React from "react"
import "./index.css"
import CartWidget from "../cart-widget"

const Navbar = () => {
    return (
        <div className="container">
            <ul className="list">
                <div className="menuContainer">
                <li className="brand">
                    <h1>TRACTO</h1>
                </li>
                <li className="listItem">
                    <a href="#" className="itemName">Inicio</a>
                </li>
                <li className="listItem">
                    <a href="#" className="itemName">Categorías</a>
                </li>
                <li className="listItem contact">
                    <a href="#" className="itemName">Contacto</a>
                </li>
                </div>
                <div className="cartContainer">
                <li className="cart">
                    <a href="#" className="itemName"><CartWidget /></a>
                </li>
                <li>
                    <h2 className="contador">0</h2>
                </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar 
