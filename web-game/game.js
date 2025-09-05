"use strict";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let food;
let score = 0;

(function setup() {
  snake = new Snake();
  food = randomFoodPosition();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.draw();

    // draw food
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(food.x, food.y, scale, scale);

    // check if snake eats food
    if (snake.x === food.x && snake.y === food.y) {
      snake.grow();
      score += 10;
      document.getElementById("score").textContent = score;
      food = randomFoodPosition();
    }

    // collision with walls
    if (snake.x >= canvas.width || snake.x < 0 || snake.y >= canvas.height || snake.y < 0) {
      gameOver();
    }

    // collision with itself
    for (let i = 0; i < snake.tail.length; i++) {
      if (snake.x === snake.tail[i].x && snake.y === snake.tail[i].y) {
        gameOver();
      }
    }
  }, 100);
})();

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale;
  this.ySpeed = 0;
  this.tail = [];

  this.draw = function () {
    ctx.fillStyle = "#00ff00";

    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  };

  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.tail.length) {
      this.tail[this.tail.length - 1] = { x: this.x, y: this.y };
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  };

  this.direction = function (direction) {
    switch (direction) {
      case "Up":
        if (this.ySpeed === 0) {
          this.xSpeed = 0;
          this.ySpeed = -scale;
        }
        break;
      case "Down":
        if (this.ySpeed === 0) {
          this.xSpeed = 0;
          this.ySpeed = scale;
        }
        break;
      case "Left":
        if (this.xSpeed === 0) {
          this.xSpeed = -scale;
          this.ySpeed = 0;
        }
        break;
      case "Right":
        if (this.xSpeed === 0) {
          this.xSpeed = scale;
          this.ySpeed = 0;
        }
        break;
    }
  };

  this.grow = function () {
    this.tail.push({});
  };
}

window.addEventListener("keydown", (evt) => {
  const direction = evt.key.replace("Arrow", "");
  snake.direction(direction);
});

function randomFoodPosition() {
  return {
    x: Math.floor(Math.random() * columns) * scale,
    y: Math.floor(Math.random() * rows) * scale,
  };
}

function gameOver() {
  alert("Game Over! Your score: " + score);
  window.location.reload();
}