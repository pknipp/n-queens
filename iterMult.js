/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = n => {
  // n equals the size of the board AND the number of queens
  // This is O(N!)
  const QUEEN = "Q";
  const BLANK = " ";
  const ATTACKED = ".";
  const boardSolutions = [];

  const copyBoard = board => {
    const boardCopy = [];
    for (const row of board) {
      boardCopy.push(row.slice());
    }
    return boardCopy;
  }

  const placeQueen = (board, row, col) => {

    board[row][col] = QUEEN;

    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c ++) {
        if (board[r][c] === BLANK) {
          if (Math.abs(c - col) === Math.abs(r - row) || c === col || r === row) {
            board[r][c] = ATTACKED;
          }
        }
      }
    }
  }

  const processRow = (board, row = 0) => {

    if (row === n) {
      boardSolutions.push(board.map(row => row.join('')));
      return;
    }

    let col = 0;
    let nextSpace;
    while ((nextSpace = board[row].indexOf(BLANK, col)) > -1) {
      const thisBoard = copyBoard(board);
      placeQueen(thisBoard, row, nextSpace);
      processRow(thisBoard, row + 1);
      col = nextSpace + 1;
    }

  }

  const blankRow = Array(n).fill(BLANK);
  const blankBoard = [...Array(n)].map(row => blankRow.slice());
  processRow(blankBoard);
  return boardSolutions;

};

console.log(solveNQueens(8));
