class Gameboard {
  drawFreshBoard() {
    const boardContainer = document.querySelector(".board-container");

    for (let i = 0; i < 9; i++) {
      const boardSquare = document.createElement("div");
      boardSquare.setAttribute("data-gridNum", i);
      boardSquare.classList.add("board-square");
      boardContainer.appendChild(boardSquare);
    }
  }
}

class Player {}

class Game {}

function game() {
  gameboard = new Gameboard();
  gameboard.drawFreshBoard();
}

game();
