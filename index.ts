function howManyOpenLockers(numLockers: number): number {
  let lockers: boolean[] = [];
  for (let i = 0; i < numLockers; i++) {
    lockers.push(true);
  }
  for (let j = 0; j < numLockers; j++) {
    for (let k = 2; k <= numLockers; k++) {
      if ((j + 1) % k === 0) {
        lockers[j] = !lockers[j];
      }
    }
  }
  return lockers.filter(Boolean).length;
}
console.log(howManyOpenLockers(100));
