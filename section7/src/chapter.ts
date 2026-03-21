/**
 * 제네릭
 * <T> 타입 변수
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUppereCase();
if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);
