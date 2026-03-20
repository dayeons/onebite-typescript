/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  // 메서드의 오버로딩을 구현하고 싶으면 호출 시그니처를 사용
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person = {
  name: "정다연",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
