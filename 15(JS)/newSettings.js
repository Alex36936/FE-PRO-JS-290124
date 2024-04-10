window.onload = function () {
let colorPicker = document.querySelector('#colorPicker');
let saveButton = document.querySelector('#saveButton');

// Завантаження з localStorage попередніх збережень
let savedColor = localStorage.getItem('backgroundColor');
if (savedColor) {
  document.body.style.backgroundColor = savedColor;
  colorPicker.value = savedColor;
}

// Збереження кольору при кліку
saveButton.addEventListener('click', function() {
  let selectedColor = colorPicker.value;
  document.body.style.backgroundColor = selectedColor;
  localStorage.setItem('backgroundColor', selectedColor);
});

function fetchSWAPI() {
  fetch('https://swapi.dev/api/planets/1/')
    .then(response => response.json())
    .then(data => {
      let name = data.name;
      let climate = data.climate;
      let terrain = data.terrain;
      let url = data.url;
      let cardHTML = `
        <div>
          <h2>${name}</h2>
          <p><strong>Climate:</strong> ${climate}</p>
          <p><strong>Terrain:</strong> ${terrain}</p>
          <p><strong>URL:</strong> <a href="${url}" target="_blank">${url}</a></p>
        </div>
      `;
      swapiCard.innerHTML = cardHTML;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      swapiCard.innerHTML = '<p>Error fetching data from SWAPI</p>';
    });
}

// Виклик функції при кліку на кнопку
saveButton.addEventListener('click', fetchSWAPI);

// Запуск функції при завантаженні сторінки
fetchSWAPI();

}