/**
 * 제네릭 인터페이스
 * 타입 변수에 할당된 타입을 꺽쇠와 함께 사용해야 한다. <string, number>
 *
 * <K, V> 타입변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1234,
  key2: 1234234,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "valus",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}
/**
interface User {
  name: string;
  profile: Student | Developer;
}

function goToSchool(user: User) {
  if (user.profile.type !== "student") {
    console.log("잘못 오셨습니다.");
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User = {
  name: "정다연",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User = {
  name: "정다연2",
  profile: {
    type: "student",
    school: "대학교",
  },
};
 */

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser);

const developerUser: User<Developer> = {
  name: "정다연",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "정다연2",
  profile: {
    type: "student",
    school: "대학교",
  },
};
