function getSum(a, b) {
    if (a === b)
        return a;
    if (a > b) { // swap if a is bigger than b
        var temp = b;
        b = a;
        a = temp;
    }
    var sum = 0;
    for (var i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
