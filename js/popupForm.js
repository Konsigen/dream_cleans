const popupForm = document.getElementById('popup__form');
const popupClose1 = document.getElementById('popupClose1');
const popupClose2 = document.getElementById('popupClose2');


// CALCULATOR POPUP
popupClose1.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'none';
    document.body.style.overflow = 'visible';
});

popupClose2.addEventListener('click', (e) => {
    e.preventDefault();
    popupFormBlock.style.display = 'none';
    document.body.style.overflow = 'visible';
});

// FORM POPUP
popupForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

function showPopupForm() {
    popupFormBlock.style.display = 'block';
    document.body.style.overflow = 'hidden';
}