import React from 'react';
import ReactDOM from "react-dom";



const people = [
    {name: 'Tyler'},
    {name: 'Karen'},
    {name: 'Richard'}
]

// example of JSX (JavaScript Syntax Extension) - write javascript with HTML
// open with { to add javascript code
// return value should be single element
const element = (
    <ol>
        {people.map((person) => (
            <li key={person.name}>{person.name}</li>
        ))}
    </ol>
);

// ERROR: Adjacent JSX elements must be wrapped in an enclosing tag
// const message = (
//     <h1>All About JSX:</h1>
//     <ul>
//         <li>JSX</li>
//         <li>is</li>
//         <li>awesome!</li>
//     </ul>
// );

ReactDOM.render(
    element,
    document.getElementById('root')
)

// ReactDOM.render(
//     message,
//     document.getElementById('root')
// )