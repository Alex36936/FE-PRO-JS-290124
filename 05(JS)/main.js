//Task #1 -------------------------
// for (var i = 0; i < 5; i++) { console.log(i); }

let newLet = 10;
for (let i = 0; i < 5; i++){
    console.log(i);
}

const newConst = 10;
for (let i = 0; i < 5; i++){
    console.log(i);
}


//Task #2 -------------------------
let message = 'test';
function example() {
    if (true) {
        let message = 'Hello, world!';
        console.log(message);
    }
}
example();

// const message = 'test';
// function example() {
//     if (true) {
//         const message = 'Hello, world!';
//         console.log(message);
//     }
// }
// example();



//Task #3 -------------------------

const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};
for (const info in person) {
    console.log(`info:${info},${person[info]}`);
}


//Task #4 -------------------------

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

for (const value of students) {
    console.log(value);
}


for (let newValue in students) {
    console.log(students[newValue]);
}

//---------------------------------------------------------------------------
//Завдання на map
// Task #1  -----------------------

let doubleValue = (a) => a * a;
let simpleArr = [2, 5, 8].map(doubleValue);
console.log(simpleArr);


//Task #2  -----------------------
let products = ['date', 'mounth', 'year',2024];
function changeMap() {
    let newMap = products.map((value) => `'new value' ${value}`);
console.log(newMap);
}
changeMap();



// Task #3-------------------------

const numberArr = [10, 20, 30];

function infoForEach() {
    sum = 0;
    numberArr.forEach(elements => {
        console.log(sum+=elements);
    })
}
infoForEach(numberArr);
