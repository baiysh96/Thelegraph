const popup = document.querySelector('.popup')
const popupBody = document.querySelector('.popup__body')
const popupLink = document.querySelector('.popup-link')
const popupClose = document.querySelector('.popup__close')


popupLink.addEventListener('click', () => {
    popup.classList.add ('open');
    popupBody.classList.add('open');

});
popupClose.addEventListener('click', () => {
    popup.classList.remove ('open');
    popupBody.classList.remove('open');
});
document.addEventListener('click',(e) => {
    if (e.target === popup){
        popup.classList.remove ('open');
        popupBody.classList.remove('open');
    }
});






