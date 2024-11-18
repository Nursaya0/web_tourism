if (window.screen.width <= 1130) {
    function removeall() {
        $(".cir_border").css("border", "none");
    }
    $("#sec").on("click", function () {
        removeall();
        $("#sec").css("border", "2px solid whitesmoke");
        $("#sec").css("border-radius", "20px");
    });
    $("#pri").on("click", function () {
        removeall();
        $("#pri").css("border", "2px solid whitesmoke");
        $("#pri").css("border-radius", "20px");
    });
    $("#tri").on("click", function () {
        removeall();
        $("#tri").css("border", "2px solid whitesmoke");
        $("#tri").css("border-radius", "20px");
    });
    $("#quad").on("click", function () {
        removeall();
        $("#quad").css("border", "2px solid whitesmoke");
        $("#quad").css("border-radius", "20px");
    });
    $("#quint").on("click", function () {
        removeall();
        $("#quint").css("border", "2px solid whitesmoke");
        $("#quint").css("border-radius", "20px");
    });
    $("#hex").on("click", function () {
        removeall();
        $("#hex").css("border", "2px solid whitesmoke");
        $("#hex").css("border-radius", "20px");
    });
    $("#hept").on("click", function () {
        removeall();
        $("#hept").css("border", "2px solid whitesmoke");
        $("#hept").css("border-radius", "20px");
    });
}

$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

$("input").on("change", function () {
    $("body").toggleClass("blue");
});

// Light/Dark toggle
const checkbox = document.getElementById("checkbox");
const themeChangeSound = new Audio('src/sound/theme.mp3'); // Загрузка звука
themeChangeSound.volume = 0.5; // Установить громкость

// Функция для применения сохраненной темы при загрузке страницы
function applySavedTheme() {
    const darkModeEnabled = localStorage.getItem("tourism_website_darkmode") === "true";
    if (darkModeEnabled) {
        document.body.classList.add("dark");
        checkbox.checked = true;
    } else {
        document.body.classList.remove("dark");
        checkbox.checked = false;
    }
}

// Вызов функции для проверки и применения сохраненной темы
applySavedTheme();

// Обработчик переключения темы
checkbox.addEventListener("change", () => {
    const darkModeEnabled = checkbox.checked;
    document.body.classList.toggle("dark", darkModeEnabled); // Применение класса 'dark'
    localStorage.setItem("tourism_website_darkmode", darkModeEnabled); // Сохранение состояния в localStorage
    
    // Воспроизведение звука с обработкой ошибок
    themeChangeSound.play().catch(error => {
        console.error("Ошибка воспроизведения звука: ", error);
    });
});


// scroll button

let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Update Navbar While Scrolling
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (window.screen.width <= 425) {
            if (rect.top <= 1300) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else if (425 <= window.screen.width <= 768) {
            if (rect.top <= 1250) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else {
            if (rect.top <= 1000) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        }
    });
}

function togle_change(){ 
    var event1 = document.getElementById("first-events"); 
    var event2 = document.getElementById("second-events"); 
 
    if (event1.style.display !== "none") { 
        event1.style.display = "none"; 
        event2.style.display = "block"; 
      } else { 
        event1.style.display = "block"; 
        event2.style.display = "none"; 
      } 
}



// Получение приветствия в зависимости от времени суток
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    switch (true) {
        case (hour >= 5 && hour < 12):
            greeting = "Good Morning!";
            break;
        case (hour >= 12 && hour < 17):
            greeting = "Good Afternoon!";
            break;
        case (hour >= 17 && hour < 21):
            greeting = "Good Evening!";
            break;
        default:
            greeting = "Good Night!";
            break;
    }

    return greeting;
}

// Функция для отображения приветствия на странице
function displayGreeting() {
    const greeting = getGreeting();
    const greetingElement = document.getElementById('display-greeting');
    greetingElement.textContent = greeting;

    // Показываем имя пользователя, если он авторизован
    const username = localStorage.getItem('username');
    if (username && isLoggedIn) {
        const usernameElement = document.createElement('div');
        usernameElement.textContent = `Welcome, ${username}!`;
        greetingElement.appendChild(usernameElement);
    }
}

// Вызываем функцию для отображения приветствия при загрузке страницы
window.onload = displayGreeting;

const backgroundMusic = new Audio('src/sound/main.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

window.addEventListener('focus', () => backgroundMusic.play());
window.addEventListener('blur', () => backgroundMusic.pause());

let isTimeVisible = false;
const showTimeButton = document.getElementById('show-time-btn');
const displayTime = document.getElementById('display-time');
if (showTimeButton) {
    showTimeButton.addEventListener('click', function () {
        if (isTimeVisible) {
            displayTime.textContent = ""; // Скрыть время
            isTimeVisible = false;
            showTimeButton.textContent = "Show time"; 
        } else {
            const currentTime = new Date().toLocaleTimeString();
            displayTime.textContent = currentTime; // Показать время
            isTimeVisible = true;
            showTimeButton.textContent = "Hide time"; 
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Получаем все ссылки навигации и секции
    const links = document.querySelectorAll(".nav-links .cir_border");
    const sections = document.querySelectorAll("header, section");
  
    // Функция для удаления класса active у всех ссылок
    function clearActiveLinks() {
      links.forEach((link) => link.classList.remove("active"));
    }
  
    // Обработчик для клика на ссылки
    links.forEach((link) => {
      link.addEventListener("click", function () {
        clearActiveLinks();
        this.classList.add("active");
      });
    });
  
    // Обновление активного класса при прокрутке
    function updateActiveLinkOnScroll() {
      let currentSection = "";
  
      // Определяем текущую секцию на основе прокрутки
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70; // Учитываем высоту navbar
        const sectionHeight = section.offsetHeight;
  
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });
  
      // Обновляем активное состояние ссылок
      clearActiveLinks();
      const activeLink = document.querySelector(
        `.nav-links .cir_border[href="#${currentSection}"]`
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  
    // Привязываем обработчик к событию прокрутки
    window.addEventListener("scroll", updateActiveLinkOnScroll);
});

// Логика авторизации
let isLoggedIn = false; // Переменная для отслеживания состояния авторизации

function toggleAuth() {
    const authBtn = document.getElementById('authBtn');

    if (isLoggedIn) {
        // Логика выхода из системы
        isLoggedIn = false;
        authBtn.textContent = 'Log In'; // Меняем текст на "Log In"
        localStorage.removeItem('username'); // Удаляем данные пользователя из localStorage
        localStorage.removeItem('password');
        alert('You have logged out!');
        displayGreeting(); // Обновляем приветствие после выхода
    } else {
        // Логика входа в систему
        const username = prompt("Enter your username (mail required):"); // Запрашиваем имя пользователя (email)
        const password = prompt("Enter your password:"); // Запрашиваем пароль

        const storedUsername = localStorage.getItem('username'); // Получаем сохраненное имя пользователя
        const storedPassword = localStorage.getItem('password'); // Получаем сохраненный пароль

        // Проверяем, является ли username email и соответствует ли домен Gmail
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(username)) {
            alert('Please enter a valid mail address!');
            return;
        }

       // Проверка пароля: минимальная длина пароля 6 символов, хотя бы одна буква, одна цифра и одна заглавная буква
if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
    alert('Wrong password!');
    return;
}


        if (username === storedUsername && password === storedPassword) {
            isLoggedIn = true;
            authBtn.textContent = 'Log Out'; // Меняем текст на "Log Out"
            alert('Login successful!');
            localStorage.setItem('username', username); // Сохраняем имя пользователя
            displayGreeting(); // Обновляем приветствие с именем пользователя
        } else {
            alert('Invalid username or password!');
        }
    }
}

// Функция для регистрации
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const phone = document.getElementById('regPhone').value;


    // Проверка на наличие email и домена gmail
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(username)) {
        alert('Please enter a valid Gmail address!');
        return;
    }

    // Проверка пароля: минимальная длина 6 символов, хотя бы одна буква, одна цифра и одна заглавная буква
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
if (!passwordPattern.test(password)) {
    alert('Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, and one number!');
    return;
}


// Проверка номера телефона: казахстанский стандарт "8 775 460 48 52"
const phonePattern = /^8\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
if (!phonePattern.test(phone)) {
    alert('Please enter a valid Kazakhstan phone number in the format: 8 775 460 48 52');
    return;
}



    if (username && password && phone) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('phone', phone);
        alert('Registration successful! You can now log in.');
    } else {
        alert('Please fill out all fields!');
    }
    // Очистка полей после успешной регистрации
    document.getElementById('regUsername').value = '';
    document.getElementById('regPassword').value = '';
    document.getElementById('regPhone').value = '';

});

// Получение всех навигационных элементов с классом `.cir_border`
const navItems = document.querySelectorAll('.cir_border');
let currentIndex = 0;

function focusNavItem(index) {
    // Удаление класса active с текущего элемента
    navItems[currentIndex].classList.remove('active');
    currentIndex = index;
    navItems[currentIndex].focus();
    navItems[currentIndex].classList.add('active');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (currentIndex < navItems.length - 1) {
            focusNavItem(currentIndex + 1);
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (currentIndex > 0) {
            focusNavItem(currentIndex - 1);
        }
    }
});
