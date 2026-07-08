/*
 * Gameboard.
 * Represents the state of the tic tac toe board and its 9 spaces..
 * An array is used with the 9 spaces as getValue.
 * getBoard()
 * markSpace()
 * printBoard() for console version
 */
function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    // Fills board[] with Space objects
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Space());
        }
    }

    // How to get entire board that UI will have to eventually print
    const getBoard = () => board;

    const markSpace = (row, column, playerToken) => {
        const space = board[row][column];
        console.log(`Marking space ${space.getValue()}`);

        if (space.getValue() !== 0) {
            return;
        }

        space.addToken(playerToken);
    };

    const printBoard = () => {
        const boardWithValues = board.map((row) =>
            row.map((space) => space.getValue()),
        );
        console.log(boardWithValues);
    };

    return { getBoard, markSpace, printBoard };
}

/*
 * Space.
 * Space object represents a single space on the board.
 * markSpace(player)
 * getValue()
 *
 * Each space can have these values:
 * 0 = No marking
 * 1 = X (for player 1s marking)
 * 2 = O (for player 2s marking)
 */
function Space() {
    let value = 0;

    const addToken = (playerToken) => {
        value = playerToken;
    };

    const getValue = () => value;

    return { addToken, getValue };
}

/*
 * GameController.
 * Controls the flow and state of players turns and checks for wins and ties.
 * Array with both player objects containing name and mark(1=X 2=O)
 * switchPlayerTurn()
 * printNewRound() reprint board with changes.
 */
function GameController(playerOneName = "player1", playerTwoName = "player2") {
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            token: "X",
        },
        {
            name: playerTwoName,
            token: "O",
        },
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        } else {
            activePlayer = players[0];
        }
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`It is ${getActivePlayer().name}'s turn!`);
    };

    let gameOver = false;
    const playRound = (column, row) => {
        if (gameOver) {
            return;
        }

        console.log(
            `${getActivePlayer().name} has marked space ${column}, ${row}`,
        );

        board.markSpace(column, row, getActivePlayer().token);

        // This is where to check if there is a winner or if the game has resulted in a tie.
        const winner = checkWinner();
        if (winner) {
            gameOver = true;
            return;
        }
        const isTie = isBoardFull();
        if (isTie) {
            gameOver = true;
            return;
        }

        // Switch player turn and reprint updated board
        switchPlayerTurn();
        printNewRound();
    };

    const checkWinner = () => {
        const b = board
            .getBoard()
            .map((row) => row.map((space) => space.getValue()));

        const m = (a, b, c) => a !== 0 && a === b && a === c;

        //rows
        for (let i = 0; i < 3; i++) {
            if (m(b[i][0], b[i][1], b[i][2])) return b[i][0];
        }
        // columns
        for (let j = 0; j < 3; j++) {
            if (m(b[0][j], b[1][j], b[2][j])) return b[0][j];
        }
        // Diagnosis
        if (m(b[0][0], b[1][1], b[2][2])) return b[0][0];
        if (m(b[0][2], b[1][1], b[2][0])) return b[0][2];

        return null;
    };

    const isBoardFull = () => {
        return board
            .getBoard()
            .flat()
            .every((space) => space.getValue() !== 0);
    };

    return {
        players,
        playRound,
        getActivePlayer,
        getBoard: board.getBoard,
        checkWinner,
        isBoardFull,
    };
}

/*
 * ScreenController.
 * Since the players will be interacting with the DOM, we create DOM references.
 * Create DOM references to game board and player turn display
 * updateScreen()
 * Create and render buttons for each space on the board.
 *
 * clickHandlerBoard(); will:
 * Verify a valid cell has been clicked
 * Will get column and row data-attribute clicked and pass it to playRound() method
 * Run updateScreen() to refresh the DOM
 *
 * updateScreen() will:
 * Clear DOM of current board display
 * Get most up to date board from game controller
 * Get the active player from game controller
 * Render players turn in html
 * Render each grid space on the DOM
 */

function ScreenController() {

    let game;
    const playerForm = document.querySelector(".playerForm");
    const playerTurnDiv = document.querySelector(".turn");
    const boardDiv = document.querySelector(".board");

    const startGame = (e) => {
        e.preventDefault();

        const nameOne = document.querySelector("#playerOneName").value || "Player 1";
        const nameTwo = document.querySelector("#playerTwoName").value || "Player 2";
        playerForm.style.display = "none";

        game = GameController(nameOne, nameTwo);
        updateScreen();
    }

    playerForm.addEventListener("submit", startGame);

    const updateScreen = () => {
        // clear the board
        boardDiv.textContent = "";

        // Get the newest version of the board and player turn
        const board = game.getBoard();
        const activePlayer = game.getActivePlayer();

        // Display player's turn or winner / tie
        if (game.checkWinner()) {
            playerTurnDiv.textContent = `${activePlayer.name} wins!`;
            boardDiv.style.display = "none";
        } else if (game.isBoardFull()) {
            playerTurnDiv.textContent = "Tie Game!";
            boardDiv.style.display = "none";
        } else {
            playerTurnDiv.textContent = `${activePlayer.name}'s turn:`;
        }

        // Render board squares
        board.forEach((row, rowIndex) => {
            row.forEach((space, columnIndex) => {
                // Anything clickable should be a button
                const spaceButton = document.createElement("button");
                spaceButton.classList.add("space");

                // Create data attributes to identify the exact row and column
                // This makes it easier to pass into our 'playRound' function
                spaceButton.dataset.row = rowIndex;
                spaceButton.dataset.column = columnIndex;
                spaceButton.textContent = space.getValue();
                boardDiv.appendChild(spaceButton);
            });
        });
    };

    // Add event listener
    function clickHandlerBoard(e) {
        if (!game) {

            return;
        };

        const selectedRow = e.target.dataset.row;
        const selectedColumn = e.target.dataset.column;

        // Make sure the space is selected and not the space in between
        if (!selectedRow || !selectedColumn) return;

        game.playRound(selectedRow, selectedColumn);
        updateScreen();
    }
    boardDiv.addEventListener("click", clickHandlerBoard);

    // initial render
    updateScreen();
}

ScreenController();
