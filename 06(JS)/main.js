//Task #1-2-----------------------------------------

class Person{
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    sayHello(){
       console.log(`Hello User ${this._name}`);
    }
}
let newName = new Person('John', 30);
console.log(newName);
newName.sayHello();


//Task #3------------------------------------------

class Student extends Person{
    constructor(name, age, studentID) {
        super(name, age);
        this._studentID = studentID;
    }
    info() {
        console.log(`About person: ${this._name}, ${this._age},${this._studentID}`);
    }
}
let newStudent = new Student('John', 30, 'study');
console.log(newStudent);
newStudent.info();


//Task #4------------------------------------------

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (item) {
    numbers.reverse(item);    
})
console.log(numbers);

//Task #5------------------------------------------

let floatNumber = [15.8, 4.3, 22.9, 3.5];
let simpleArrr = floatNumber.map(Math.round);
console.log(simpleArrr);

