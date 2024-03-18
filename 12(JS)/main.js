window.onload = function () {
    
    //Task #1---------------------------------------------------------

    let colorForm = document.getElementById("changeColor");
    let colorOptions = document.querySelectorAll(".color-option");

    colorForm.addEventListener("change", function() {
        colorOptions.forEach(function(option) {
            if (option.checked) {
                document.body.style.backgroundColor = option.value;
            }
        });
    });
}