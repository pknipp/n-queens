/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
  // n equals the size of the board AND the number of queens
  // This is O(N!)
  const QUEEN = "Q";
  const BLANK = " ";
  const ATTACKED = ".";

  const boardSolutions = [];

  let board = Array(n).fill(Array(n).fill(BLANK));

  // alternate form: solution = [2,4,6,8,3,1,7,5].map(e => String(e--)).join('')

  let placeNextQueen = function(board, row, col) {

    board[row][col] = QUEEN;

    //PK thinks that a base case needs to be placed here, as follows:
//    if (row === n) {return board; }

/* PK consolidated these cases by expanding the if-condition below.
    for (let r = 0; r < n; r++) {if (board[r][col] === BLANK) {board[r][col] = ATTACKED;}}
    for (let c = 0; c < n; c++) {if (board[row][c] === BLANK) {board[row][c] = ATTACKED; }}
*/
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c ++) {
        if (board[r][c] === BLANK) {
          // if (c + r === col + row || c - r === col - row) {
            // c - col === row - r || c - col === r - row
          if (Math.abs(c - col) === Math.abs(r - row) || c === col || r === row) {
            board[r][c] = ATTACKED;
          }
        }
      }
    }
    console.log(board);

  }

  row = 0;
  col = 0;
  let nextSpace;
  // I think that we've set the 2nd argument of .indexOf incorrectly.
  // Rather than increasing col by one, we should increase it to equal
  // the value of nextSpace (perhaps plus one)
  while ((nextSpace = board[row].indexOf(BLANK, col++)) > -1) {
    placeNextQueen(board, row, col)
  }
  /* PK: Do we need to return something (null?) if there are no spaces available to allow
  this while-loop to execute?  Also, don't we need to do something w/the return value of
  these function calls?
  */
};

/*PK: We have a chicken-and-egg problem w/regards to the first call of placeNextQueen:
In which column do we put the first queen?  Do we do a loop and make n such calls, one
for each column in which the queen is placed?
*/

solveNQueens(4);
