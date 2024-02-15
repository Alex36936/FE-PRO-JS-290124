

//---------------------------------------------------
//Task #push

let emptyArr = [];
emptyArr.push("Orange");
emptyArr.push("Lime");
emptyArr.push("some Fruits");
alert(emptyArr);
console.log(emptyArr);

//--------------------------------

let freeArr = [];
let newfreeArr = [67, 78, 29, 45];
function emptyArrey (array){
  array.push('hard numbers');
}
emptyArrey(newfreeArr);
console.log(newfreeArr);


//---------------------------------------------------
//Task #pop

let fullArr = ['number', 'fruit', 34, 45, 'name'];
console.log(fullArr);
console.log(fullArr.length);
fullArr.pop(4);
console.log(fullArr);

//--------------------------------

let popArr = [];
let newpopArr = [67, 78, 29, 45];
function emptyArrey (array){
  array.pop('hard numbers');
}
emptyArrey(newpopArr);
console.log(newpopArr);


//---------------------------------------------------
// Task #unshift

let newArr = ['room', 'appartment', 'house', 'building'];
console.log(newArr);

newArr.unshift('new item');
console.log(newArr);

//--------------------------------

let unshiftArr = [];
let newunshiftArr = ['car','bus','moto'];
function emptyArrey (array){
  array.unshift('some transport');
}
emptyArrey(newunshiftArr);
console.log(newunshiftArr);

//---------------------------------------------------
//Task #shift


let newTask = ['room', 'appartment', 'house', 'building'];
console.log(newTask);

newTask.shift('new item');
console.log(newTask);

//--------------------------------

let counrtyArr = [];
let newshiftArr = ['Ireland','Austria','Hungary'];
function emptyArrey (array){
  array.shift('Germany');
}
emptyArrey(newshiftArr);
console.log(newshiftArr);

//---------------------------------------------------
//Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), 
//і викликає цю функцію для кожного елемента масиву.
let userArr = ['Tom', 'Karl', 'Kalvin'];
function hiUser(user) {
    for (i = 0; i < userArr.length; i++);
     console.log(`Вітаю ${user}`)
 }
function wellcomUser() {
}
hiUser(userArr);
console.log(user);
 //Додаткова робота:
    //Створіть новий массив за допомогою методів розглянутих на уроці в якому видалені всі значення "Remove" з масиву -
    //["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"] в результаті повинен бути ось такий новий
//массив ["Keep", "Keep", "Keep", ...]
    
let newremoveArr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];
console.log(newremoveArr);
newremoveArr.filter("Remove");
console.log(newremoveArr);
