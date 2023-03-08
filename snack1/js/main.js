'use strict';

const guests= [
    {name: "Brad", lastName: "Pitt"},
    {name: "Jhonny", lastName: "Depp"},
    {name: "Lady", lastName: "Gaga"},
    {name: "Cristiano", lastName: "Ronaldo"},
    {name: "Gaetano", lastName: "Frascolla"},
    {name: "Pupo", lastName: ""},
    {name: "Little", lastName: "Tony"},
    {name: "Amedeo", lastName: "Minghi"},
    {name: "Herbert", lastName: "Ballerina"},
    {name: "George", lastName: "Clooney",}
]

console.log(guests);

guests.forEach((element, index) => {
    console.log(`
    Il Signor ${element.name} ${element.lastName} siede al tavolo VIP al posto ${index + 1}
    `);

})