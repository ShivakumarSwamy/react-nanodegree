import {useState} from "react";
import user from "./User.jsx";

function textInput(placeholder, value, setValue) {
    return (
        <div>
            <label>
                {`${placeholder}: `}
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </label>
        </div>
    );
}

const CreateNewUser = ({onSubmitAddUser, users}) => {
    const [userName, setUserName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError] = useState("")

    const addUser = (event) => {
        event.preventDefault()
        if (users.some(user => user.username === userName)) {
            setError("Username already exists. Please choose a different username.")
            return;
        }

        onSubmitAddUser(
            {
                "username": userName,
                "firstName": firstName,
                "lastName": lastName,
                "gamesPlayed": 0
            }
        );
        setUserName("")
        setFirstName("")
        setLastName("")
        setError("")
    }

    const inputIsEmpty = () => userName === "" || firstName === "" || lastName === "";

    return (
        <div>
            <form onSubmit={addUser}>
                {textInput("Enter UserName", userName, setUserName)}
                {textInput("Enter First Name", firstName, setFirstName)}
                {textInput("Enter Last Name", lastName, setLastName)}
                <button disabled={inputIsEmpty()}>Add</button>
            </form>
            {error && <div style={{color: "red"}}>{error}</div>}
        </div>
    )

}

export default CreateNewUser