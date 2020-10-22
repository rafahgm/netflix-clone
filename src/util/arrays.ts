export function shiftLeft(arr: any[], shift: number): any[] {
  let shiftedArr = Array.from(arr);
  for (let i = 0; i < shift; i++) {
    shiftedArr.push(shiftedArr.shift());
  }
  return shiftedArr;
}

export function shiftRight(arr: any[], shift: number): any[] {
  let shiftedArr = Array.from(arr);
  for (let i = 0; i < shift; i++) {
    shiftedArr.unshift(shiftedArr.pop());
  }
  return shiftedArr;
}
