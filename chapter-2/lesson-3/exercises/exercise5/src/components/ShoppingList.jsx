import {useState} from "react";
import ItemsList from "./ItemsList.jsx";
import CreateNewItem from "./CreateNewItem.jsx";
import DeleteNewItem from "./DeleteNewItem.jsx";

const ShoppingList = () => {
    const [items, setItems] = useState([]);

    const onAddItem = (itemName) => {
        setItems([...items, itemName]);
    };

    const deleteLastItem = (event) => {
        setItems(items.slice(0, -1));
    };

    const noItemsFound = () => items.length === 0;

    return (
        <div>
            <h2>Shopping List</h2>
            <CreateNewItem onAddItem={onAddItem}/>
            <DeleteNewItem noItemsFound={noItemsFound} deleteLastItem={deleteLastItem}/>
            <ItemsList items={items}/>
        </div>
    )
}

export default ShoppingList