/*
    Given an integer n, return the largest number that contains exactly n digits.
*/

function largestNumber(n) {
    let string = '';
    while (n > 0){
        string = string + '9';
        n--;
    }
    return parseInt(string);
}
