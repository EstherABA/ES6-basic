//////EX1
const square = (square) => {
    return square**2 
}
console.log(square(3));

//////EX2
const isPositive = (a) => {
    if (a>0){
        return true 
    }
    else {
        return false
    }
};
console.log(isPositive(3));

//////EX3
const formatName = (firstName, lastName, operator = " " ) => {
    return (`${firstName}${operator}${lastName} `)
};

console.log(formatName("ester","abasov"));

//////EX4
import {greet} from "./utils/utils.js"
console.log(greet("ester", true));

//////EX5
import {calculate} from "./utils/utils.js"
console.log(calculate(3,4,"add"));
console.log(calculate(3,4,"multiply"));

//////EX6
const team = ["chennai", "mumbai" , "bangalore"]
const captain = ["Dhoni", "Rohit" , "Kohli"]
const merged = [...team , ...captain]
console.log(merged);

/////EX9
const user = ['ester', 24, 'maya'];
const [firstName, age, motherName] = user
console.log("age:", age);
console.log("MOM name:", motherName);

/////EX10
const a = []
const b = []
const c = []

/////EX11
const actors = [
    { actorName: "Tom Hanks", birthdate: "July 9, 1956" },
    { actorName: "Meryl Streep", birthdate: "June 22, 1949" },
    { actorName: "Leonardo DiCaprio", birthdate: "November 11, 1974" },
];

//a
const [firstActor, , thirdActor] = actors
console.log(thirdActor);

//b
let thirdActorB = ["Leonardo DiCaprio",  "November 11, 1974"]
const [name, leoBDay ] = thirdActorB
console.log(leoBDay);