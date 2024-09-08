// Модальное окно для формы обратного звонка
var modal = document.getElementById("callbackModal");
var btn = document.getElementById("callbackBtn");
var span = document.getElementsByClassName("close")[0];

// Открытие и закрытие модального окна для формы обратного звонка
const callbackBtn = document.getElementById('callbackBtn');
const callbackModal = document.getElementById('callbackModal');
const closeBtn = callbackModal.querySelector('.close');

callbackBtn.addEventListener('click', () => {
    callbackModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    callbackModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === callbackModal) {
        callbackModal.style.display = 'none';
    }
});

// Показ дополнительных услуг
const showMoreBtn = document.getElementById('showMoreBtn');
const moreServices = document.getElementById('moreServices');

showMoreBtn.addEventListener('click', () => {
    moreServices.style.display = 'none';
    // Отобразите все услуги при необходимости
});

// Управление видимостью меню на мобильных устройствах
const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');

menuToggle.addEventListener('click', () => {
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'block';
    }
});
