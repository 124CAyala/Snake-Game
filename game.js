import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection, } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    youLose()
  }

  
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / snakeSpeed) return

  console.log('Render')
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function youLose() {
  document.getElementById("overlay2").style.display = "block";
  document.getElementById("result").innerHTML = "You Lose!";
  snakeElement = 0
}

// function setSpeed() {
  
// }

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

// function tryAgain() {
//   location.reload();
// }


