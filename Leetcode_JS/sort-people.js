var sortPeople = function(names, heights) {
    // The names at i correspond to heights at i;
        // We can use an object to link name to heights and return an array with name in descending order of heights
        let obj = {};

        for (let i = 0; i < names.length; i++) {
            obj[heights[i]] = names[i] 
        }
            // obj = { '165': 'John', '170': 'Emma', '180': 'Mary' }

         heights.sort((a,b) => b-a) // heights =[ 180, 170, 165 ]
        for (let i =0; i < names.length; i++) {
            names[i] = obj[heights[i]]
        }
            return names
        };