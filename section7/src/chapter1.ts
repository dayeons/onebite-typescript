/**
 * 타입 변수 응용하기
 * 1번째 사레 (타입 변수 여러개 설정 가능)
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 2번째 사례
 * 배열 타입 T[]   [T, ...unknown[]]
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0
let str = returnFirstValue([1, "hello", "mynameis"]);
// 1

/**
 * 3번째 사례
 * extends  확장해서 제한한다
 * 조건을 달아서
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); //3

let var2 = getLength("12345"); //5

let var3 = getLength({ length: 10 }); //10

// let var4 = getLength(10);
