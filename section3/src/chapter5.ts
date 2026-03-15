/**
 * 타입 추론 - 점진적인 타입 시스템
 * 타입 넓히기
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "정다연",
  profile: {
    nickname: "jeong",
  },
  urls: ["https://github.com/dayeons/onebite-typescript"],
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "string") {
  return "hello";
}

/** any 타입의 진화, 암묵적으로 추론*/
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

// 상수
const num = 10;
const str = "hello";

let arr = [1, "string"];
