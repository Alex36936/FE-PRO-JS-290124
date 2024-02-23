//Task #1 -----------------------------------------
let fruitString = "Orange Apple Watermelone Banan";
console.log(fruitString);
let transform = fruitString.toUpperCase();
console.log(transform);

let firstStringTransform = fruitString.split(',');
console.log(firstStringTransform);

//Task #2 -----------------------------------------

// let yearNow = new Date();
// console.log(`${yearNow.getDate}==${29}`);

//Task #3 -----------------------------------------
let dateToday=function() {
    let newDate = new Date(2024,0);
    console.log(newDate.toDateString());
}
dateToday();


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let endDate = function () {
    const engMonth = new Date("2023-08-19");
    let month = months[engMonth.getMonth()];
    console.log(month);
}
endDate();

//Task #3 -----------------------------------------

// let yourDate = new Date(2022,5,30);
// console.log(`Today ${yourDate.toDateString()}`);
// let timeEnd=new Date()

// let fnDate = function () {
    
// }
// fnDate();
//yourDate.setDate(yourDate.getDate() + i);
