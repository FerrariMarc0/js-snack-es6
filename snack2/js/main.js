'use strict';

const students= [
    {id: 213, firstname: "Marco", lastname: "Della Rovere", grades: 78},
    {id: 110, firstname: "Paola", lastname: "Cortellessa", grades: 96},
    {id: 250, firstname: "Andrea", lastname: "Mantegna", grades: 48},
    {id: 145, firstname: "Gaia", lastname: "Borromini", grades: 74},
    {id: 196, firstname: "Luigi", lastname: "Grimaldello", grades: 68},
    {id: 102, firstname: "Piero", lastname: "Della Francesca", grades: 50},
    {id: 120, firstname: "Francesca", lastname: "Da Polenta", grades: 84}
];
console.log(students);

const toUpper= students.map((element) => {
    element.firstname.toUpperCase;
    console.log(element.firstname)
})


const byGrades = students.filter((element) => {
    
    if(element.grades > 70){
        return true;
    } 
    return false;
    
});
console.log(byGrades);

byGrades.forEach((element) => {
    console.log(`
    studente selezionato: ${element.firstname} ${element.lastname} con graduatoria di: ${element.grades}
    `);
});




const byId= byGrades.filter((element) => {
    if(element.id > 120){
        return true;
    }
    return false;
});

console.log(byId);

byId.forEach((element) => {
    console.log(`
    studente selezionato: ${element.firstname} ${element.lastname}, con graduatoria di: ${element.grades}, ID: ${element.id}
    `);
})