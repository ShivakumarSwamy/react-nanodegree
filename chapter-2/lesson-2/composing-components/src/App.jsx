import './App.css'

const ContactList = (props) => {
    return (
        <ol>
            {props.contacts.map((person) => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ol>
    )
};

// example of composition of components
function App() {
    return (
        <div>
            <ContactList contacts={[{name: 'Tyler'}, {name: 'Karen'}, {name: 'Richard'}]}/>
            <ContactList contacts={[{name: 'Foo'}, {name: 'Alex'}, {name: 'Bob'}]}/>
        </div>
    )
}

export default App
