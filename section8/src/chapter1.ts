/**
 * keyof 연산자
 */

// 1.
interface Person {
  name: string;
  age: number;
}

//function getPropertyKey(person: Person, key: "name" | "age") {
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "정다연",
  age: 35,
};

getPropertyKey(person, "name");

// typeof person === "object";

// 2. 추론

type Person2 = typeof person2;

// function getPropertyKey2(person: Person2, key: keyof Person2) {
function getPropertyKey2(person: Person2, key: keyof typeof person) {
  return person[key];
}

const person2 = {
  name: "정다연",
  age: 35,
};
