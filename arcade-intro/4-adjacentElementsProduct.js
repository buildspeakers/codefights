/*
    Given an array of integers, find the pair of adjacent elements
    that has the largest product and return that product.
*/

function adjacentElementsProduct(inputArray) {
    let factorIndex1 = 0;
    let factorIndex2 = 1;
    let highestProd = inputArray[factorIndex1] * inputArray[factorIndex2];
    factorIndex1++;
    factorIndex2++;
    while (factorIndex2 < inputArray.length){
        let newProd = inputArray[factorIndex1] * inputArray[factorIndex2];
        if (newProd > highestProd) highestProd = newProd;
        factorIndex1++;
        factorIndex2++;
    }
    return highestProd;
}
