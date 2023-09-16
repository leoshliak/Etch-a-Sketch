const  slider = document.querySelector('#myRange');
const rangeValue = document.querySelector('.slider-info');
const gridBoard = document.querySelector('.grid-board');
const black = document.querySelector('#default-btn');
const eraser = document.querySelector('#eraser-mode');
rangeValue.innerHTML = `${slider.value} x ${slider.value} ` ;
slider.oninput = function() {
    rangeValue.innerHTML = `${slider.value} x ${slider.value} `;
}
 let color = 'black';

function createElement(size) {
  let squares = gridBoard.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  gridBoard.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  gridBoard.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    gridBoard.insertAdjacentElement("beforeend", square);
  }
}

createElement(32);
function changeSize(input){
  createElement(input);
}
function colorSquare(){
  this.style.backgroundColor = color;
}

function changeColor(choise){
 color = choise;
}


