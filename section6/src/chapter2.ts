/**
 * 접근 제어자
 * access modifier
 * -> public, private, protected
 */

class Employee {
  // 필드 -> 식별자 중복 (생략)

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // 자동으로 필드 제어, 필드의 값 초기화도 자동
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name;
    this.age;
  }
}

const employee = new Employee("정다연", 35, "개발자");
// employee.name = "홍길동";
// employee.age = 20;
employee.position = "디자이너";

console.log(employee);
