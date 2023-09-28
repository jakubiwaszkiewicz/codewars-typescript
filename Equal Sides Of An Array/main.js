function findEvenIndex(arr) {
    var _loop_1 = function (i) {
        var left = arr.slice(0, i);
        var right = arr.slice(i + 1, arr.length);
        var leftSum = 0; // Initialize to 0
        var rightSum = 0; // Initialize to 0
        left.map(function (a) { return leftSum = leftSum + a; });
        right.map(function (a) { return rightSum = rightSum + a; });
        console.log("left: ".concat(leftSum, ", right: ").concat(rightSum));
        console.log("leftSum: ".concat(leftSum, ", rightSum: ").concat(rightSum));
        if (leftSum === rightSum) {
            return { value: i };
        }
    };
    for (var i = 0; i < arr.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return -1;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
