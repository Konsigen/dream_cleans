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