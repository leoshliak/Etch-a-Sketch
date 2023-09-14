const  slider = document.querySelector('#myRange');
const rangeValue = document.querySelector('.slider-info');

rangeValue.innerHTML = `${slider.value} x ${slider.value} ` ;
slider.oninput = function() {
    rangeValue.innerHTML = `${slider.value} x ${slider.value} `;
}

