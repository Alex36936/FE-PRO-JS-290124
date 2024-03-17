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

