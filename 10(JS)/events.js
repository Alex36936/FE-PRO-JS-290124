window.onload = function () {
    //Task #1---------------------------------------------------------
    document.querySelector(".contextMenu").oncontextmenu = function() {myFunction()};
    let menuEl = document.querySelector('.contextMenu')
    menuEl.addEventListener("contextmenu", (e) => { e.preventDefault() });
    
    function myFunction() {
        let menuEl = document.querySelector('.myContextMenu');
        menuEl.style.visibility = 'visible';
    }
   
    //Task #2---------------------------------------------------------
    let divImage = document.querySelector('.image');
    let imgPicture = document.querySelector('.image img');
    divImage.addEventListener('mousedown', function () {
          imgPicture.style.width = '100px';
         imgPicture.style.height = '170px';
    })
     divImage.addEventListener('mouseup', function () {
         imgPicture.style.width = '120px';
         imgPicture.style.height = '190px';
     })
    

    //Task #3---------------------------------------------------------
    
//     document.addEventListener('load', () => {
    //const posY=0;
    //const posX = 0;

//      function moveStep(el) {
//         el.style.top = `${posY}px`;
//         el.style.left = `${posX}px`;
//     }
//   let app = document.querySelector('.playPlace');
//   let plane = document.querySelector('.plane');

//   document.addEventListener('keydown', e => {
//     let bl = plane.getBoundingClientRect();
//     if(event.key == left) {
//       if(bl.left > 0) {
//         plane.style.left = bl.left-1 + "px";
//       }
//     } else if(event.key == right) {
//       if(bl.left < (app.offsetWidth - plane.offsetWidth)) {
//         plane.style.left = bl.left+1 + "px";
//       }
//     } else if(event.key == down) {
//       if(bl.top < (app.offsetHeight - ball.offsetHeight)) {
//         plane.style.top = bl.top+1 + "px";
//       } 
//     } else if(Event.key == top) {
//       if(bl.top > 0) {
//         plane.style.top = bl.top-1 + "px";
//       } 
//     }
//       });
//     moveStep(plane);
//     });


    let posX = 0;
    let posY = 0;
    let posStep = 5;
    function moveStep(el) {
        el.style.top = `${posY}px`;
        el.style.left = `${posX}px`;
    }
    let objectEl = document.querySelector('.plane');
    document.addEventListener('keydown', function (event) {
        console.log(event.key);
        switch (event.key) {
            case 'ArrowUp':
                posY -= posStep;
                break;
            case 'ArrowDown':
                posY+= posStep;
                break;
            case 'ArrowLeft':
                posX -= posStep;
                break;
            case 'ArrowRight':
                posX += posStep;
                break;
        }
        moveStep(objectEl);
    })



     //Task #4---------------------------------------------------------





}
