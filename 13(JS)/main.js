window.onload = function () {
    
    //Task#1-------------------------------------------------------------
    
    let textStr = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia,cumque necessitatibus nemo veniam odit dolor impedit aspernatur,ipsa vitae minima quasi doloribus repellendus cupiditate!";
    let allBigLetters = textStr.match(/[A-Z]/g);
    console.log(allBigLetters);

    //Task#2---allBig----------------------------------------------------------

    let wordsWithFiveLetter = textStr.match(/\b\w{5}\b/g);
    console.log(wordsWithFiveLetter);

    //Task#3-------------------------------------------------------------

    let htmlString = "<p>Це - простий <b>текст</b>.</p>";
    let newText = htmlString.replace(/<\/?[^>]+>/g, "");

    console.log(newText);
    //Task#5-------------------------------------------------------------

    function showMessage() {
    let selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        let ratingValue = selectedRating.value;
        document.getElementById("message").textContent = "Дякуємо за вашу оцінку! Ви оцінили на " + ratingValue + ".";
    } else {
        document.getElementById("message").textContent = "";
    }
}
let radioButtons = document.querySelectorAll('input[name="rating"]');
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', showMessage);
});

}