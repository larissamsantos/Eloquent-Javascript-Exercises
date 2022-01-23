let chessboardString = "";
let size = 8;

    for (let line = 1; line <= size; line++) {
        for (let column = 1; column <=size; column++) {
            if ((line + column)%2 == 0) {
                chessboardString = chessboardString.concat(" ");
            } else {
                chessboardString = chessboardString.concat("#");
            }
        }
        chessboardString = chessboardString.concat("\n");
    }
    console.log(chessboardString);