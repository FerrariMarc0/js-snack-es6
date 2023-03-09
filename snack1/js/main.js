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
    {name: "George", lastName: "Clooney"}
]

console.log(guests);

const guestsList= guests.map((element, i) => {
    return {
        tableName: 'Tavolo VIP',
        guest: element,
        place: i+1
    }
    
});
console.log(`
    Il Signor ${element.name} ${element.lastName} siede al tavolo VIP al posto ${i + 1}
    `);