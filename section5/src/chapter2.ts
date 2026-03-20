/**
 * 인터페이스의 선언 합침
 */

interface Person {
  name: string;
}
interface Person {
  // name: number; 중복 정의 - 충돌
  name: string;
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 35,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
