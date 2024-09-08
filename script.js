// Модальное окно для формы обратного звонка
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

// Функционал выпадающего меню для мобильных устройств
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menuList = document.getElementById("menuList");

    menuToggle.addEventListener("click", function() {
        menuList.classList.toggle("show-menu");
    });
});
