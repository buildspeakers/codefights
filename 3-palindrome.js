/*
    Given the string, check if it is a palindrome.
    (a string that reads the same left-to-right and right-to-left)
*/

function checkPalindrome(inputString) {
    let stringArray = Array.from(inputString);
    let backwardsString = '';
    for (let i = 0; i < inputString.length; i++){
        backwardsString += stringArray.pop();
    }
    if (backwardsString === inputString) return true;
    else return false;
}
