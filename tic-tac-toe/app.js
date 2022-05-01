class Gameboard {
  drawFreshBoard() {
    const boardContainer = document.querySelector(".board-container");

    for (let i = 0; i < 9; i++) {
      const boardSquare = document.createElement("div");
      boardSquare.setAttribute("data-gridNum", i);
      boardSquare.classList.add("board-square");
      boardContainer.appendChild(boardSquare);
    }

    this.boardSquares = document.querySelectorAll(".board-square");
  }

  addMarkerToSquare(squareId, playerMarker) {
    this.boardSquares[squareId].innerHTML = playerMarker;
  }

  getCurrentPlays() {
    // Get te current played markers as a 2D array
  }
}

class Player {
  constructor(id, marker) {
    this.id = id;
    this.marker = marker;
  }
}

class Game {
  constructor(gameboard, playerOne, playerTwo) {
    this.gameboard = gameboard;
    this.players = [playerOne, playerTwo];
    this.currentPlayer = 0;
  }

  changePlayer() {
    this.currentPlayer = 1 - this.currentPlayer;
    console.log(this.currentPlayer);
  }

  handleInput() {
    // Waits for input and adds current players marker to the screen
    this.gameboard.boardSquares.forEach((square) => {
      square.addEventListener("click", () => {
        this.gameboard.addMarkerToSquare(
          square.dataset.gridnum,
          this.players[this.currentPlayer].marker
        );
        console.log(this.players[this.currentPlayer]);
        this.changePlayer();
      });
    });
  }
}

function playGame() {
  // Set up players
  const playerOne = new Player((id = 1), (marker = "X"));
  const playerTwo = new Player((id = 2), (marker = "O"));

  const gameboard = new Gameboard();
  const game = new Game(gameboard, playerOne, playerTwo);
  gameboard.drawFreshBoard();
  game.handleInput();
}

playGame();
