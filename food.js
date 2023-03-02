import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
let foodCount = 0
var EXPANSION_RATE = 3

export function update() {
  if (onSnake(food)) {
    updateFoodCount()
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}


export function draw(gameBoard) {
  // console.log('draw snake')

  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}

function updateFoodCount() {
  foodCount++;
  document.getElementById('overlay-text').innerHTML = 'Score: ' + foodCount;
}

