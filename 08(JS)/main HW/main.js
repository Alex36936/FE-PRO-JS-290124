window.onload = function () {
//Task #1--------------------------------------------
      const booksArray = [
    {
    title: 'Пригоди Аліси в Країні Див',
    year: 1865,
    rating: 4.5
    },
    {
    title: '1984',
    year: 1949,
    rating: 4.8
    },
    {
    title: 'Гаррі Поттер і філософський камінь',
    year: 1997,
    rating: 4.7
    }
      ];
    
let table = document.getElementById('table');

for (let books of booksArray) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = books.title;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = books.year;
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = books.rating;
	tr.appendChild(td3);
	
    table.appendChild(tr);
}
    
    table.setAttribute('style', 'background-color:pink');
    let tableEl = document.querySelector('table');
    tableEl.style.color = 'blue';
    tableEl.style.border = 'solid', '5px';
    tableEl.style.padding = '10px';


//Task #2--------------------------------------------
    const menuData = [
        { name: 'Головна', url: '/' },
        { name: 'Про нас', url: '/about' },
        { name: 'Послуги', url: '/services' }];
    
    let parent = document.querySelector('#header');
    for (let elem of menuData) {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = elem.name;
        ul.appendChild(li);

        parent.appendChild(ul);
    }
    
    parent.setAttribute('style', 'background-color:yellow');
    parent.style.padding = '50px';
    parent.style.textAlign = 'center';
    parent.style.justifyContent = 'space-around';
    parent.style.display = 'flex';
    
//Task #3--------------------------------------------
    // menuData.setAttribute('a', 'url');
    // let newLink = document.createElement('a');
    // newLink.setAttribute('href', 'url');
    // newLink.innerText = 'text';
    // parent.after(newLink);
    // console.log(menuData);

    
//Task #4--------------------------------------------  
    let divBlock = document.querySelector('.block');
    console.log(divBlock);

    divBlock.style.display = 'flex';
    divBlock.style.flexWrap = 'wrap';

    let fragment = document.createDocumentFragment();
    let amount = 50;
    
    for (let i = 1; i <= amount; i++){
        let divEl = document.createElement('div');
        divEl.innerHTML = '  name '+i  ;
        divBlock.appendChild(divEl);
        fragment.appendChild(divBlock);


        divEl.style.backgroundColor = 'orange';
        divEl.style.borderRadius = '15px';
        divEl.style.width = '50px';
        divEl.style.height = '50px';
        divEl.style.display = 'flex';
        divEl.style.textAlign = 'center';
   }
    document.body.appendChild(fragment);
    console.log(fragment);


















}