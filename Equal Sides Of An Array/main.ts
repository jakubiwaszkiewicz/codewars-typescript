function findEvenIndex(arr: number[]): number {
    for (let i = 0; i < arr.length; i++) {
        let left: number[] = arr.slice(0, i);
        let right: number[] = arr.slice(i + 1, arr.length);
        let leftSum: number = 0; // Initialize to 0
        let rightSum: number = 0; // Initialize to 0

        left.map((a) => leftSum = leftSum + a);
        right.map((a) => rightSum = rightSum + a);

        console.log(`left: ${leftSum}, right: ${rightSum}`);
        console.log(`leftSum: ${leftSum}, rightSum: ${rightSum}`);

        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));
