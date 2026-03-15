/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};
// value -> number : toFixed
// value -> string : toUpperCase
// value -> Date : getTime
// value -> Person : name은 age살 입니다.

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // Date | null
  // else if (typeof value === "object") {
  //   console.log(value.getTime());
  // }
  else if (value instanceof Date) {
    // instanceof 연산자를 사용하면 객체가 특정 클래스에 속하는지 아닌지를 확인
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // value instanceof Person : 오류, 클래스가 아니고 객체 타입
    // "age" in value : 오류, in 연산자 뒤에 null, undefined 값이 들어오면 안된다. value 가 있다 && 연산자 활용
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
