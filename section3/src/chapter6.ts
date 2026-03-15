/**
 * 타입 단언 assertion
 */

type Person = {
  name: string;
  age: number;
};
// let person: Person = {};
let person = {} as Person;

person.name = "정다연";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 : 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;
let num3 = 10 as unknown as string; // 다중단언 - 절대로 좋은 방법은 아님

/**
 *  const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "애옹이",
  color: "yellow",
} as const;

// cat.name = "";

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; // 선택적 프로퍼티
};

let post: Post = {
  title: "게시글1",
  author: "정다연",
};

// const len: number = post.author?.length; // ? 옵셔널 체이닝(undefined나 null이면 평가를 멈추고 undefined를 반환)
const len: number = post.author!.length;
