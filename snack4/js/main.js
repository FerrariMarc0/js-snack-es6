'use strict';

const clubs= [
    {team: "Catanzaro", pt:  0, penalty: 0},
    {team: "Crotone", pt:  0, penalty: 0},
    {team: "Foggia", pt:  0, penalty: 0},
    {team: "Pescara", pt:  0, penalty: 0},
    {team: "Monopoli", pt:  0, penalty: 0},
    {team: "Cerignola", pt:  0, penalty: 0},
    {team: "Picerno", pt:  0, penalty: 0},
    {team: "Virtus Francavilla", pt:  0, penalty: 0},
    {team: "Juve Stabia", pt:  0, penalty: 0},
    {team: "Giugliano", pt:  0, penalty: 0},
    {team: "Latina", pt:  0, penalty: 0},
    {team: "Potenza", pt:  0, penalty: 0},
    {team: "Avellino", pt:  0, penalty: 0},
    {team: "Taranto", pt:  0, penalty: 0},
    {team: "Gelbison", pt:  0, penalty: 0},
    {team: "Monterosi Tuscia", pt:  0, penalty: 0},
    {team: "Turris", pt:  0, penalty: 0},
    {team: "Messina", pt:  0, penalty: 0},
    {team: "Viterbese", pt:  0, penalty: 0},
    {team: "Fidelis Andria", pt:  0, penalty: 0}
];

function rnd(min, max){
    return Math.round(Math.random() * (max - min) +1);
} 

const clubList= clubs.map((element)=>{

    element.pt = rnd(0, 100);
    element.penalty = rnd(1, 50);
    return element;
})

const finalList=[];
const newClubList= clubList.filter((element)=>{
    const team= element.team;
    const penalty= element.penalty;
    finalList.push({team, penalty});
    
})

console.log(finalList);
console.log(clubs);
console.log(clubList);