class Gameboard {
  drawFreshBoard() {
    // Draw empty board to screen
    const boardContainer = document.querySelector(".board-container");
    for (let i = 0; i < 9; i++) {
      const boardSquare = document.createElement("div");
      boardSquare.setAttribute("data-gridNum", i);
      boardSquare.classList.add("board-square");
      boardContainer.appendChild(boardSquare);
    }
    this.boardSquares = document.querySelectorAll(".board-square");

    // Create an empty board array to track plays
    this.boardArray = new Array(9).fill(0);
  }

  addMarkerToSquare(squareId, player) {
    if (!this.boardSquares[squareId].childElementCount == 0) {
      return false;
    }
    const newMarker = document.createElement("span");
    newMarker.innerHTML = player.marker;
    this.boardSquares[squareId].appendChild(newMarker);
    this.boardArray[squareId] = player.id;
    this.checkWinCondition();
    return true;
  }

  checkWinCondition() {
    const winIndexes = [
      // Horizontal win cons
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // Vertical win cons
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // Diagonal win cons
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let winIndex of winIndexes) {
      if (
        this.boardArray[winIndex[0]] == this.boardArray[winIndex[1]] &&
        this.boardArray[winIndex[0]] == this.boardArray[winIndex[2]] &&
        this.boardArray[winIndex[0]] +
          this.boardArray[winIndex[1]] +
          this.boardArray[winIndex[0]] >
          0
      ) {
        console.log("Player " + this.boardArray[winIndex[0]] + " wins!");
      }
    }
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
  }

  handleInput() {
    // Waits for input and adds current players marker to the screen
    this.gameboard.boardSquares.forEach((square) => {
      square.addEventListener("click", () => {
        const newMarker = this.gameboard.addMarkerToSquare(
          square.dataset.gridnum,
          this.players[this.currentPlayer]
        );
        if (newMarker) {
          this.changePlayer();
        }
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
