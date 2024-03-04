window.onload=function() {
    //Task #1-------------------------------------------------------

    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb (${r},${g},${b})`;
    }

    // let name = document.querySelector('.name');
    // function changeColor() {
    //     name.style.color = 'red';
    // }
    // changeColor();
    
    //Task #2-------------------------------------------------------
let card = document.querySelector(".addsize");

card.addEventListener("dblclick", (e) => {
    card.classList.toggle("large");
    card.innerHTML = 'I was changed!';
});
    //Task #3-------------------------------------------------------
    let listenerBtn = document.querySelector('.listner');
    let count = 0;
    let pEl = document.querySelector('.pEl');
    listenerBtn.addEventListener('click', function () {
           if (count >= 10) {
          listenerBtn.removeEventListener('click');
	}
        count += 1;
        pEl.innerHTML = `Counter your push <strong>${count}</strong>`;
    })
}