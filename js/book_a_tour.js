// Функция для фильтрации туров
function filterToursByCity() {
    const cityFilter = document.getElementById('cityFilter').value;
    const tourSelect = document.getElementById('tour');
    const tours = [
        { name: "Journey through Kazakhstan(Almata)", city: "Almata", value: "500$" },
        { name: "Cultural heritage(Astana)", city: "Astana", value: "300$" },
        { name: "Unforgettable Kazakhstan Adventure Tours(Almata)", city: "Almata", value: "500$" },
    ];

    // Сохранение выбранного фильтра в localStorage
    localStorage.setItem('cityFilter', cityFilter);

    // Очистка существующих опций
    tourSelect.innerHTML = `<option value="not-selected">Please select the tour</option>`;

    // Добавление опций, соответствующих фильтру
    tours
        .filter(tour => cityFilter === "all" || tour.city === cityFilter)
        .forEach(tour => {
            const option = document.createElement('option');
            option.value = tour.value;
            option.textContent = tour.name;
            tourSelect.appendChild(option);
        });
}

// Функция для загрузки фильтра при загрузке страницы
function loadCityFilter() {
    const cityFilter = localStorage.getItem('cityFilter') || 'all';
    document.getElementById('cityFilter').value = cityFilter;
    filterToursByCity();
}

// Запуск фильтрации при загрузке страницы
window.onload = loadCityFilter;