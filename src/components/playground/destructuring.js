//Object destructuring

// const person = {
//     name: 'Vova',
//     age: 27,
//     location: {
//         city: 'New York',
//         temp: 92
//     }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age} years old.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`In ${city} it is ${temperature}.`);
// }

const book = {
    title: 'Galaxies',
    Author: 'Mike Penn',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'self-published'} = book.publisher;

console.log(`Name of the publisher is ${publisherName}.`);

//Array destructuring

// const address = ['1299 S Juniper Street', 'New York', 'Washington', '19147'];
// const [, , state = 'Milan'] = address;

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}.`);