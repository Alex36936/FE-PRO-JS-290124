//Task #1
let userFirstNumber = Number(prompt('Type number'));
let userSecondNumber = Number(prompt('Type number'));

function minus(firstNumberMinus, secondNumberMinus){
    console.log(`Minus ${firstNumberMinus} - ${secondNumberMinus} = ${firstNumberMinus-secondNumberMinus}`);
}

function summ(firstNumberSumm, secondNumberSumm){
    console.log(`Summ ${firstNumberSumm} + ${secondNumberSumm} = ${firstNumberSumm+secondNumberSumm}`);
}

function divide(firstNumberDivide, secondNumberDivide) {
    if (userSecondNumber == 0) {
        alert('0 is not correct number');
    }
    else {
        return userFirstNumber / userSecondNumber;
    }
    console.log(`Divide ${firstNumberDivide} / ${secondNumberDivide} = ${firstNumberDivide/secondNumberDivide}`);
}

function multi(firstNumberMulti, secondNumberMulti){
    console.log(`Multi ${firstNumberMulti} * ${secondNumberMulti} = ${firstNumberMulti*secondNumberMulti}`);
}
function checkNumber(value){
    if(value>0){
        return true;
    }
    else{
        return false;
    }
}
let userOperation = prompt('User chose operation +-/*%');
switch (userOperation) {
    case '+':
        summ(userFirstNumber, userSecondNumber);
        break;
    case '-':
        minus(userFirstNumber, userSecondNumber);
        break;
    case '/':
        divide(userFirstNumber, userSecondNumber);
        break;
    case '*':
        multi(userFirstNumber, userSecondNumber);
        break;
    default:
        console.log('No information');
        break;
}


//----------------------------------------------------------------

//Task #2
for (let i = 0; i <= 20; i++){
    if (i%2==1) {
        continue;
    }
    console.log(`Loop value ${i}`);
}

//----------------------------------------------------------------
//Task #3
for (let i = 10; i > 0; i--) {
    console.log(`Loop value ${i}`);
}

//----------------------------------------------------------------
//Task #4
for (let i = 1; i <= 10; i++){
    console.log(`3*${i}=${3*i}`);
}
console.log(``)
let youNumber=Number(prompt('write number'))
for (let i = 1; i <= 10; i++){
    console.log(`${youNumber}*${i}=${youNumber*i}`);
}

//----------------------------------------------------------------
//Task #5
function table(i) {
    console.log(`5*${i}=${5 * i}`)
    return 5*i
}
table(5)
table(8)


// let a = Number(prompt('write number'));
// function table(a, i) {
//         for (let i = 1; i <= 10; i++) {
//         console.log(`${a}*${i}=${a * i}`);
//     }
//     }
// table(a)

let userNumber= Number(prompt('write number'));
function table(userNumber, iteration) {
        for (let i = 1; i < iteration; i++) {
        console.log(`${userNumber}*${i}=${userNumber * i}`);
    }
    }

    table(5, 4)

//----------------------------------------------------------------
//Task #6
let userPlanet = prompt('Write your planet');
    switch (userPlanet) {
        case 'Меркурий':
            console.log(`ця планета в сонячній системі ${userPlanet}`);
            break;
        case 'Венера':
            console.log(`ця планета в сонячній системі ${userPlanet}`);
            break;
        case 'Нептун':
            console.log(`ця планета в сонячній системі ${userPlanet}`);
            break;
        case 'Земля':
            console.log(`ця планета в сонячній системі ${userPlanet}`);
            break;
        case 'Юпитер':
            console.log(`ця планета в сонячній системі ${userPlanet}`);
            break;
        case 'Сатурн':
            console.log(`ця планета в сонячній системі ${userPlanet}`);
            break;
        case 'Уран':
            console.log(`ця планета в сонячній системі ${userPlanet}`);
            break;
        case 'Марс':
            console.log(`ця планета в сонячній системі ${userPlanet}`);
            break;
        default:
            console.log('такої планети нема в сонячній системі');
            break;
    }
