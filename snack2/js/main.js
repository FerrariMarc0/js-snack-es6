'use strict';

const students= [
    {id: 213, name: "Marco Della Rovere", grades: 78},
    {id: 110, name: "Paola Cortellessa", grades: 96},
    {id: 250, name: "Andrea Mantegna", grades: 48},
    {id: 145, name: "Gaia Borromini", grades: 74},
    {id: 196, name: "Luigi Grimaldello", grades: 68},
    {id: 102, name: "Piero Della Francesca", grades: 50},
    {id: 120, name: "Francesca Da Polenta", grades: 84}
];


const toUpper= students.map(element => element.name.toUpperCase());


const byGrades = students.filter((element) => {
    
    if(element.grades > 70){
        return true;
    } 
    return false;
    
});
const byId= byGrades.filter((element) => {
    if(element.id > 120){
        return true;
    }
    return false;
});

console.log(students);
console.log(toUpper);
console.log(byGrades);
byGrades.forEach((element) => { console.log(`
    studente selezionato: ${element.name} con graduatoria di: ${element.grades}
    `);
});
console.log(byId);
byId.forEach((element) => {
    console.log(`
    studente selezionato: ${element.name}, con graduatoria di: ${element.grades}, ID: ${element.id}
    `);
})