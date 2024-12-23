var addDigits = function(num) {
    // We are given a number
    // If the number has more than two digits, then add its digits
    // else return it


    if (num < 10) return num
    
    else {
        num = String(num).split("")
        num = num.reduce((a,c) => a + Number(c), 0) // We need to specify the initial value otherwise infinte loop
        return addDigits(num)
    }
};