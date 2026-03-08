// Any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
/**
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();
런타임 시 오류
 */

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

/**
num = unknownVar; // Type 'unknown' is not assignable to type 'number'.ts
unknownVar.toUpperCase(); // 'unknownVar' is of type 'unknown'.ts
 */

if (typeof unknownVar === "number") {
  // 타입 정제
  num = unknownVar;
}
