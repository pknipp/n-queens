/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
  // n equals the size of the board AND the number of queens
  // This is O(N!)
  // If n was fixed we could use n nested loops, but alas that is not the case.
  const QUEEN = "Q";
  const BLANK = " ";
  const ATTACKED = ".";

  const boardSolutions = [];

  let board = Array(n).fill(Array(n).fill(BLANK));

  // initialize n-element array positions = [-1, -1, -1, ..., -1]
  // solution = [2,4,6,8,3,1,7,5].map(e => String(e--)).join('')
  // change positions[0] to equal 0
  // change positions[1] to equal the smallest value so that it does not attack other piece(s)
  // change positions[2] to equal the  "             "
  // ...
  // change positions[n-1] to equal the "

  let placeNextQueen = function(board, row, col) {

    board[row][col] = QUEEN;

    for (let r = 0; r < n; r++) {
      if (board[r][col] === BLANK) {
        board[r][col] = ATTACKED;
      }
    }
    for (let c = 0; c < n; c++) {
      if (board[row][c] === BLANK) {
        board[row][c] = ATTACKED;
      }
    }
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c ++) {
        if (board[r][c] === BLANK) {
          if (c + r === row + col || c - r === row - col) {
            board[r][c] = ATTACKED;
          }
        }
      }
    }
    console.log(board);

    // first call of this should invoke an empty board, but not subsequent calls
    // Perhaps do with something like  board = board || empty board
    // loop over columns, place a queen in that column and (which?) row, then assign attacking x's
    // subsequently make n recursive calls
  }

  row = 0;
  col = 0;
  let nextSpace;
  while ((nextSpace = board[row].indexOf(BLANK, col++)) > -1) {
    placeNextQueen(board, row, col)
  }
};

solveNQueens(4);


// place first Q @ a1
// mark attacked squares
// find 'next' open (non-Q, non-. square)
//
//
