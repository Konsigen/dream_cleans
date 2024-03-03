const calculatorForm = document.getElementById('calculator__form');

const popup = document.getElementById('calcPopup')
const popupPriceField = document.getElementById('popupPrice')
const popupPricePerMeterField = document.getElementById('popupPricePerMeter')
const popupExit = document.getElementById('popupClose')

const cleanKind = document.getElementById('select-kind')
const cleanExtra = document.getElementById('select-service')
const cleanTypeAccomodation = document.getElementById('select-accomodation')
const cleanArea = document.getElementById('range-number');
const userPhone = document.getElementById('phone')

const dryCleaningPrice = 1300;

const prices = {
    'supportive': [
        [27, 45], [22, 42] // [clean < 100m, clean < 100m + window], [clean > 100m, clean > 100m + window]
    ],
    'general': [
        [63, 91], [59, 86]
    ],
    'postRenovation': [
        [72, 94], [68, 89]
    ],
    'window': [
        [75, 75], [75, 75]
    ],
    "dryCleaning": dryCleaningPrice
}

calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let generalPrice = 0;
    const cleanAreaValue = parseInt(cleanArea.textContent)

    const isWindowsCleaning = cleanExtra.value === 'window' ? 1 : 0;
    const isMoreThan100 = cleanAreaValue === 100 ? 1 : 0;

    console.log(isMoreThan100 + '=')

    const priceByMeter = prices[cleanKind.value][0][0]
    
    generalPrice +=  cleanExtra.value === 'furniture' ? dryCleaningPrice : 0;
    generalPrice += priceByMeter * cleanAreaValue

    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';

    popupPriceField.textContent = generalPrice + ' грн';
    popupPricePerMeterField.textContent = parseInt(generalPrice / cleanAreaValue) + ' грн / м²';

})

const windowOption = document.getElementById('window_option');
cleanKind.addEventListener('change', (e) => {
    e.preventDefault()

    if (cleanKind.value === 'window') {
        windowOption.remove()
    } else {
        cleanExtra.appendChild(windowOption)
    }
})

popupExit.addEventListener('click', (e) => {
    e.preventDefault()

    popup.style.display = 'none';
    document.body.style.overflow = 'visible'

})


const popupFormBlock = document.getElementById('popup__form')
const popupForm = document.getElementById('popup__form')
const popupCloseForm = document.getElementById('popup-close-form')

function showPopupForm() {
    popupFormBlock.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

popupCloseForm.addEventListener('click', (e) => {
    e.preventDefault()

    popupFormBlock.style.display = 'none';
    document.body.style.overflow = 'visible'

})

popupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
})