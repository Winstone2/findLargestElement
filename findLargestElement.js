function findLargestElement(nestedArray) {
    let largest = nestedArray[0][0];
    for (let arr of nestedArray) {
        for (let num of arr) {
            if (num > largest) {
                largest = num;
            }
        }
    }
    return largest;
}

const nestedArray = [
    [3, 8, 12],
    [5, 21, 9],
    [10, 7, 15]
];

console.log(findLargestElement(nestedArray));
