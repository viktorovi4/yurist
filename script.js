document.addEventListener('DOMContentLoaded', function() {
    // Всплывающее окно обратного звонка
    const callbackBtn = document.getElementById('callbackBtn');
    const callbackModal = document.getElementById('callbackModal');
    const closeModal = document.querySelector('.modal .close');
    
    callbackBtn.addEventListener('click', () => {
        callbackModal.style.display = 'flex';
    });
    
    closeModal.addEventListener('click', () => {
        callbackModal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === callbackModal) {
            callbackModal.style.display = 'none';
        }
    });

    // Гамбургер меню
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });
});
