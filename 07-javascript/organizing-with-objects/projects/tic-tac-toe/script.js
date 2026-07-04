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

    const markSpace = (column, row, playerToken) => {
        const space = board[row][column];

        if (space.getValue !== 0) {
            return;
        }

        space.addToken(playerToken);
    };

    const printBoard = () => {
        const boardWithValues = board.map((map) =>
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

    const playRound = (column, row) => {
        console.log(`${getActivePlayer()} has marked space ${column}, ${row}`);

        board.markSpace(column, row, getActivePlayer().token);

        // This is where to check if there is a winner or if the game has resulted in a tie.

        // Switch player turn and reprint updated board
        switchPlayerTurn();
        printNewRound();
    };

    return { playRound, getActivePlayer };
}

const game = GameController();
