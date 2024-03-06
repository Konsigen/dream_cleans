const rangeThumb = document.getElementById('range-thumb'),
      rangeNumber = document.getElementById('range-number'),
      rangeLine = document.getElementById('range-line'),
      rangeInput = document.getElementById('range-input')

 

const step = 100 / rangeInput.max 

const rangeInputSlider = () =>{
   rangeNumber.textContent = rangeInput.value;
   if (rangeNumber.textContent === rangeInput.max) rangeNumber.textContent += '+'
 
   const thumbPosition = rangeInput.value !== rangeInput.min ? (rangeInput.value / rangeInput.max) : 0;
   
   const space = rangeInput.offsetWidth - rangeThumb.offsetWidth;
   
   rangeThumb.style.left = (thumbPosition * space) + 'px'
   rangeLine.style.width = rangeInput.value * step + '%'

   

   rangeInput.addEventListener('input', rangeInputSlider)
}

rangeInputSlider()

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.remove('hamburger_active');
          menu.classList.remove('menu_active'); 
      });
  });
});
window.onload = function(){
    const preloader = document.querySelector(".preloader");

    setTimeout(function(){
        preloader.style.display = "none";
    }, 2000);
}