import React from "react"
import { useState } from "react"
import "./index.css"

const ItemCount = ({stock, initial}) => {
    const [items, setItems] = useState(initial)

    const increment = () => {
        if (items < stock) {
            setItems(items + 1)
        }
    }

    const decrement = () => {
        if (items > 1) {
            setItems(items - 1)
        }
    }

    return (
        <div>
            <div className="counterContainer" style={{height:"38px", width: "150px", marginBottom: "8px", borderRadius: "3px"}}>
                <button className="button" onClick={decrement}>-</button>
                <h4 className="quantity" style={{color: "black"}}>{items}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default ItemCount