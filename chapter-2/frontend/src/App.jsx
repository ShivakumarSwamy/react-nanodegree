import "./App.css";
import ListContacts from "./components/ListContacts.jsx";
import {useEffect, useState} from "react";
import {create, getAll, remove} from "./utils/ContactsAPI.js";
import CreateContact from "./components/CreateContact.jsx";
import {Route, Routes, useNavigate} from "react-router-dom";

const App = () => {
    let naviagte = useNavigate();

    // 1st variable to access the state
    // 2nd function to change state
    // useState is initialised with initial state
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getAll().then(results => setContacts(results))
            .catch(error => console.error("Error fetching contacts: ", error))
    }, [])

    const removeContact = (sContact) => {
        remove(sContact)
            .catch(error => console.error(`"Unable to delete contact:${sContact}"`, error))
        setContacts(contacts.filter(contact => contact.id !== sContact.id));
    }

    const createContact = (contact) => {
        create(contact)
            .then(result => {
                    setContacts(contacts.concat(result))
                    naviagte("/")
                }
            )
            .catch(error => console.error(`Unable to create contact: ${contact}`, error))
    }


    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<ListContacts contacts={contacts} onDeleteContact={removeContact}/>}
            />
            <Route
                path="/create"
                element={<CreateContact onCreateContact={createContact}/>}
            />
        </Routes>
    )
};

export default App;