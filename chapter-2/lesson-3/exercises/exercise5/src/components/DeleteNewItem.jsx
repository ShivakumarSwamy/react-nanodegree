const DeleteNewItem = ({noItemsFound, deleteLastItem}) => {

    const handleDeleteLastItem = (event) => {
        deleteLastItem();
    }

    return (
        <div>
            <button onClick={handleDeleteLastItem} disabled={noItemsFound()}>
                Delete Last Item
            </button>
        </div>
    )
}

export default DeleteNewItem