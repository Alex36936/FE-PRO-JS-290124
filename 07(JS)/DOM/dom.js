window.onload = function(){
    //Task #1---------------------------------------
    let newUl = document.querySelector('ul');
    console.log(newUl.firstElementChild);
    console.log(newUl.lastElementChild);
    let newUlLi = document.querySelector('li:nth-child(3)');
    console.log(newUlLi);
    

    //Task #2---------------------------------------
    let secondUl = document.querySelectorAll('div li');
    console.log(secondUl);

    let [...allLi] = document.querySelectorAll('div li')
    console.log(allLi);




    //Task #3---------------------------------------
    let listItems = document.querySelectorAll('ul.nav > li');
    console.log(listItems);

    let listItem = document.querySelectorAll('li:nth-child(2)');
    console.log(listItem);



}