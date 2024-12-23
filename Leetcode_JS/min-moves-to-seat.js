var minMovesToSeat = function(seats, students) {
    // move position of the student to a seat where no two students are
    // change the position of the student to the seat position by adding or subtracting

    // If the student position is the same then do not move.
    // We need to only count the total number of moves

    // sort arrays in ascending order
    students.sort((a,b) => a-b);
    seats.sort((a,b) => a-b);
    // declalre a variable fro counting moves.
    let moves = 0;
    // find the number of moves required
    for (let i = 0; i < seats.length; i++) {
        moves+= Math.abs(seats[i] - students[i])
    }
    return moves
};

console.log(minMovesToSeat([3,1,5], [2,7,4]))