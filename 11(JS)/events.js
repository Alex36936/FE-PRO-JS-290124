window.onload = function () {
//Task #1-----------------------------------------------------------
  function exchange() {
        let uan = Number(document.querySelector('.uan').value);
      let rate = Number(document.querySelector('.euro').value);
      if (uan <= 0) {
          alert(`Is not correct value!`);
      }
      else {
          let result = uan * rate;
        result = Math.round(result * 100) / 100;
        document.querySelector('.result').innerHTML = `Result: ${result} EUR`
    }
      }

    let exchangeBtn = document.querySelector('.changeBtn');
    exchangeBtn.addEventListener('click', exchange);


//Task #2-----------------------------------------------------------

const images = ['images/Tiger1.jpeg','images/Tiger2.jpeg','images/Tiger3.jpeg','images/Tiger4.jpeg'];
    let curentIndex = 0;
    function changeImg(){
        curentIndex+=1;
        if(curentIndex >= images.length){
            curentIndex = 0;
        }
        document.querySelector('img').src = images[curentIndex];
    }
    let slideInterval = setInterval(changeImg, 3000);

    let sliderImg = document.querySelector('img');
    sliderImg.addEventListener('mouseenter', function(){
        clearInterval(slideInterval);
    });
    sliderImg.addEventListener('mouseleave', function(){
        slideInterval = setInterval(changeImg, 3000);
    });
}

//Task -----------------------------------------------------------

function removeElementFromArray(array, elementToRemove) {
    let newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] !== elementToRemove) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
let initialArray = [1, 2, 3, 4, 5];
let elementToRemove = 3;
let modifiedArray = removeElementFromArray(initialArray, elementToRemove);
console.log(modifiedArray);

//Task -----------------------------------------------------------

function mergeArrays(array1, array2) {
    let mergedArray = array1.concat(array2);

    let uniqueElementsMap = {};
    mergedArray.forEach(function(element) {
        uniqueElementsMap[element] = true;
    });
    return Object.keys(uniqueElementsMap);
}
let array1 = [1, 2, 3, 8, 45, 100];
let array2 = [2, 3, 4, 5, 25, 100];
let mergedUniqueArray = mergeArrays(array1, array2);
console.log(mergedUniqueArray);

//Task -----------------------------------------------------------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = separateEvenAndOddNumbers(numbers);
console.log(result.even);
console.log(result.odd);
function separateEvenAndOddNumbers(numbersArray) {
    let evenNumbers = [];
    let oddNumbers = [];

    for (let i = 0; i < numbersArray.length; i++) {
        let number = numbersArray[i];
        if (number % 2 === 0) {
            evenNumbers.push(number);
        } else {
            oddNumbers.push(number);
        }
    }
   return {
        even: evenNumbers,
        odd: oddNumbers
    };
}