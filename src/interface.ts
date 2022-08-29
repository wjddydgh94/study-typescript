interface TV {
  turnOn: () => boolean;
  turnOff: () => boolean;
}

const myTv: TV = {
  turnOn() {
    return true;
  },
  turnOff() {
    return false;
  },
};

const tryTurnOn = (tv: TV) => {
  tv.turnOn;
};

tryTurnOn(myTv);

interface Cell {
  row: number;
  col: number;
  piece?: Piece;
}

interface Piece {
  move(from: Cell, to: Cell): boolean;
}

const createBoard = () => {
  const cells: Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({ row, col });
    }
  }
  return cells;
};

const board = createBoard();

board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  },
};
