import React, {Component} from 'react';
import ReactDOM from "react-dom";

// example component with arrow function, which returns JSX or UI

const StaticList = () => (<ol>
    <li>static item</li>
</ol>)

const ContactList = () => {

    const people = [
        {name: 'Tyler'},
        {name: 'Karen'},
        {name: 'Richard'}
    ]
    return (
        <ol>
            {people.map((person) => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ol>
    )
};

// example component in legacy react code (i.e., prior to React 16.8)
class ContactListLegacy extends Component {
    render() {
        const people = [
            {name: 'Foo'},
            {name: 'Alex'},
            {name: 'Bob'}
        ]
        return (
            <ul>
                {people.map((person) => (
                    <li key={person.name}>{person.name}</li>
                ))}
            </ul>
        )
    }
}

// example component via function
function Container() {
    return (
        <div>
            <StaticList/>
            <ContactList/>
            <ContactListLegacy/>
        </div>)
}

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
)
