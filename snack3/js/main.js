'use strict';

const bicycle= [
    {modello: "Tarmac SL 7", peso: 6.2},
    {modello: "Wilier Filante SLR", peso: 7.4},
    {modello: "Graziella", peso: 16},
    {modello: "Scott Speedster Gravel 30", peso: 10},
    {modello: "Grail CF SLX", peso: 8}
];

const [tarmac, wilier, graziella, scott, grail] = bicycle;
const obj= {
    tarmac,
    wilier,
    graziella,
    scott,
    grail
};

let {peso} = tarmac;
console.log(bicycle);
console.log(obj);
console.log(peso);
console.log(`
    
La bicicletta piu leggera è la ${bicycle[0].modello}, con ${bicycle[0].peso} kg totali.
    
`);