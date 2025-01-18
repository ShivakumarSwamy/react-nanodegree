// run script via node in terminal, example 'node chapter-2/lesson-1/declarative_code.js'
// example of imperative code
const people = ['Amanda', 'David', 'Andrew', 'Karen', 'Richard', 'Tyler'];
const excitedPeople = []
for (let i = 0; i < people.length; i++) {
    excitedPeople[i] = people[i] + '!';
}

console.log('Imperative code');
console.log(excitedPeople);

// example of declarative code
excitedPeopleDeclarativeWay = people.map(person => person + '!');
console.log('Declarative code via map function');
console.log(excitedPeopleDeclarativeWay);

