var myTv = {
    turnOn: function () {
        return true;
    },
    turnOff: function () {
        return false;
    },
};
var tryTurnOn = function (tv) {
    tv.turnOn;
};
tryTurnOn(myTv);
var createBoard = function () {
    var cells = [];
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 3; col++) {
            cells.push({ row: row, col: col });
        }
    }
    return cells;
};
var board = createBoard();
board[0].piece = {
    move: function (from, to) {
        return true;
    },
};
//# sourceMappingURL=interface.js.map