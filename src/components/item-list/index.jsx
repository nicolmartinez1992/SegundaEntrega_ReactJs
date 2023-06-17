import Item from "../item"
import "./index.css"

const ItemList = ({products}) => {
    return (
        <div className ="ListContainer">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList