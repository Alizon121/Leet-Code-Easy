var generate = function(numRows) {
    // We need to create a pascal triangle that contains numRows of rows.
    // Pascal triangle creates a sum of adjacent elements
    
    if (numRows === 0) return []
    
    if (numRows === 1) return [1]
    
    let array = [[1]]
    
    for (let i = 1; i < numRows; i++) {
        //  prevRow stores the previous row in the triangle.
    let prevRow = array[i-1]
        // Start a new row with 1 since this num always inititiates a new row
    let newRow = [1]
    // Use another for loop to complete a row
    for (let j =1; j < prevRow.length; j++) {
        // Sum adjacent values
        newRow.push(prevRow[j-1] + prevRow[j])
    }
    // Complete a Pascal triangle by adding one to the end of a newRow
    newRow.push(1)
    // Push the new row to the main array
    array.push(newRow)
    }
    return array
    };

    console.log(generate(6))