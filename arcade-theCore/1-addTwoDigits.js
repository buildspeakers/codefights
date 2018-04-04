/*
    You are given a two-digit integer n. Return the sum of its digits.
*/

function addTwoDigits(n) {
    let string = n.toString();
    let array = Array.from(string);
    let digit1 = array.pop();
    let digit2 = array.pop();
    return +digit1 + +digit2;
}
