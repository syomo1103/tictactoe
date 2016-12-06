// /*--- variables ---*/

var player, board;

/*---event listeners ---*/

document.getElementById('board').addEventListener('click', handleClick);
// document.getElementById('btn').addEventListener('click');

/*--- functions ---*/

function initialize() {
  board = ['','','','','','','','',''];
  setPlayer();
};

function setPlayer() {
  player = Math.round(Math.random()) ? 'X' : 'O';
  alert(player + ' goes first!');
};

function switchPlayer() {
  player = (player === 'X') ? 'O' : 'X';
};

function updateBoard(evt) {
  var cellind = evt.target.id.substr(4);
  board[cellind] = player;
  checkWinner();
  console.log(board);
};

function handleClick(evt) {
  var clickedEl = evt.target;
  if (clickedEl.textContent != '') return;
  evt.target.textContent = player;
  updateBoard(evt);
  switchPlayer();
};

function checkWinner() {
  //check winner by row
  if (board[0] === player && board[1] === player && board[2] === player) {
    setWinner();
  }
  if (board[3] === player && board[4] === player && board[5] === player) {
    setWinner();
  }
  if (board[6] === player && board[7] === player && board[8] === player) {
    setWinner();
  }
  //check winner by column
  if (board[0] === player && board[3] === player && board[6] === player) {
    setWinner();
  }
  if (board[1] === player && board[4] === player && board[7] === player) {
    setWinner();
  }
  if (board[2] === player && board[5] === player && board[8] === player) {
    setWinner();
  }
  //check winner by diagonal
  if (board[0] === player && board[4] === player && board[8] === player) {
    setWinner();
  }
  if (board[2] === player && board[4] === player && board[6] === player) {
    setWinner();
  }
};
//the game already knows who won, but it keeps going. you can switch and
//put gameover before alert once you know how to stop the clicking
function setWinner() {
  alert(player + ' wins!');
  // gameOver();
};

function gameOver() {
  // var clickedEl = evt.target;
  // if (clickedEl.id === 'board') return;
  // evt.target.id = player;
};
//if no empty string left, then cats game.
initialize();
