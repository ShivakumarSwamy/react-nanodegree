import React from 'react';
import ReactDOM from 'react-dom';

// 1st argument is the element type or a React component
// 2nd argument is the element's properties or html attributes
// 3rd argument is the element content or React Element or React Component

// 2nd argument represent DOM attributes and not html attributes
// Example of DOM attributes className and in HTML it is class
const element = React.createElement('div', {
    className: 'welcome-message',
}, 'Hello, world root!');

console.log(element);

// nesting elements
const strongElement = React.createElement('div', null,
    React.createElement('strong', null, 'Hello, world root 2!')
);

const listOfItems = React.createElement('ol', null,
    React.createElement('li', null, 'Item 1'),
    React.createElement('li', null, 'Item 2'),
    React.createElement('li', null, 'Item 3')
);

const people = [
    {name: 'Tyler'},
    {name: 'Karen'},
    {name: 'Richard'}
]

// key is used in li to uniquely identify the element
const listOfPeople = React.createElement('ol', null,
    people.map((person) => React.createElement('li', {key: person.name}, person.name))
);

console.log(listOfPeople);

const container = React.createElement('div', null,
    element, strongElement, listOfItems, listOfPeople);

// DOM - Document Object Model
// element javascript object does not represent the actual DOM element, also knows as Virtual DOM
// If we want to render it to the DOM/browser, we need to use ReactDOM.render
// "root" is the id of the element in the index.html file
ReactDOM.render(
    container,
    document.getElementById('root')
)
