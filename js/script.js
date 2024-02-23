const rangeThumb = document.getElementById('range-thumb'),
      rangeNumber = document.getElementById('range-number'),
      rangeLine = document.getElementById('range-line'),
      rangeInput = document.getElementById('range-input')

const rangeInputSlider = () =>{

   rangeNumber.textContent = rangeInput.value

   const thumbPosition = (rangeInput.value / rangeInput.max),
   space = rangeInput.offsetWidth - rangeThumb.offsetWidth
   rangeThumb.style.left = (thumbPosition * space) + 'px'
   rangeLine.style.width = rangeInput.value + '%'

   rangeInput.addEventListener('input', rangeInputSlider)
}

rangeInputSlider()