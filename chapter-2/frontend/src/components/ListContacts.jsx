import {useState} from "react";
import {Link} from "react-router-dom";

const ListContacts = ({contacts, onDeleteContact}) => {

    const [query, setQuery] = useState("");

    const updateQuery = (query) => {
        setQuery(query.trim());
    }

    const clearQuery = () => setQuery("");

    const showingContacts = query === ""
        ? contacts
        : contacts.filter(sContact => sContact.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <div className="list-contacts">
            <div className="list-contacts-top">
                <input className="search-contacts" type="text"
                       placeholder="Search Contacts"
                       value={query}
                       onChange={event => updateQuery(event.target.value)}
                />
                <Link to="/create" className="add-contact">
                    Add contact
                </Link>
            </div>

            {
                ((showingContacts.length !== contacts.length) || (query !== "")) && (
                    <div className="showing-contacts">
                        <span>
                            Now showing {showingContacts.length} of {contacts.length}
                        </span>
                        <button onClick={clearQuery}>Show all</button>
                    </div>
                )
            }

            <ol className="contact-list">
                {/*js code*/}
                {
                    // 1st param callback code
                    showingContacts.map((sContact) => (
                            <li key={sContact.id} className="contact-list-item">
                                <div
                                    className="contact-avatar"
                                    style={
                                        {
                                            backgroundImage: `url(${sContact.avatarURL})`
                                        }
                                    }>
                                </div>
                                <div className="contact-details">
                                    <p>{sContact.name}</p>
                                    <p>{sContact.handle}</p>
                                </div>
                                <button className="contact-remove"
                                        onClick={() => onDeleteContact(sContact)}>
                                    Remove
                                </button>
                            </li>
                        )
                    )
                }
            </ol>
        </div>
    )
}

export default ListContacts;