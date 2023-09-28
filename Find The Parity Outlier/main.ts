function findOutlier(integers: number[]): number {
    let numberOfOdd : number = 0;
    let lastOdd : number = 0;
    let numberOfEven : number = 0;
    let lastEven : number = 0;
    for (let i : number = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        numberOfEven++;
        lastEven = integers[i];
      } else if (integers[i] % 2 !== 0) {
        numberOfOdd++;
        lastOdd = integers[i];
      }
    }
    return numberOfEven > numberOfOdd ? lastOdd : lastEven;
}
console.log(findOutlier([-151426580,80530154,123483772,13212106,1030816,54088862,-45307768,-118872502,-110342246,-51026042,26841734,55279370,153504316,112100150,193325276,116420172,12565218,-152852090,-191477461,-68407808,-155915342,-168031390,4733254,-67557394,76449462]))
