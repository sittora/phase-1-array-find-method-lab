
function superbowlWin(recordArray) {
   const game = recordArray.find(record => record.result === "W");
   
    if (!game) {
        return undefined;
    } else {
        return game.year; 
    }
}