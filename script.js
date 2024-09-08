// Существующий код для модального окна
var modal = document.getElementById("callbackModal");
var btn = document.getElementById("callbackBtn");
var span = document.getElementsByClassName("close")[0];

// Открытие модального окна при клике на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрытие модального окна при клике на крестик
span.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Новый код для раскрывающегося меню на мобильных устройствах
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".main-menu ul");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("show-menu");
    });
});
