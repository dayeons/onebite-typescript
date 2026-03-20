/**
 * 클래스
 */

let studentA = {
  name: "정다연",
  grade: "A+",
  age: 35,
  study() {
    console.log("공부 잘함");
  },
  introduce() {
    console.log("hi");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("공부 열심히 잘함");
  }

  introduce() {
    console.log(`안녕하세요. ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("홍길동", "A+", 35);
console.log(studentB);
studentB.study();
studentB.introduce();

const studentDeveloper = new StudentDeveloper("정다연", "A", 35, "Typescript");
console.log(studentDeveloper);
studentDeveloper.programming();
