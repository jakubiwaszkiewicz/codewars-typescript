function getSum(a : number, b : number): number {
    if (a === b) return a
    if (a > b) { // swap if a is bigger than b
        let temp : number = b;
        b = a;
        a = temp;
    }
    let sum : number = 0;
    for (let i : number = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}



console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));