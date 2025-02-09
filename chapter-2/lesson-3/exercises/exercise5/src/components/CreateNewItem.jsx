import {useState} from "react";

// invoke addItem method,
const CreateNewItem = ({onAddItem}) => {
    // track item name via state
    const [itemName, setItemName] = useState("");

    // on change set item name
    const handleChange = (event) => {
        setItemName(event.target.value);
    };

    // add item to items array
    const addItem = (event) => {
        event.preventDefault();
        onAddItem(itemName);
        setItemName("");
    };

    // disable the button, when input is empty
    const inputIsEmpty = () => itemName === "";

    return (
        <div>
            <form onSubmit={addItem}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={itemName}
                    onChange={handleChange}
                />
                <button disabled={inputIsEmpty()}>Add</button>
            </form>
        </div>
    )
}

export default CreateNewItem