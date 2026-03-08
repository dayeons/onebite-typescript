// object
// 구조적 타입 시스템 -> property based type system

let user: {
  id?: number; // (property) id?: number | undefined 선택적 프로퍼티
  name: string;
} = {
  id: 1,
  name: "정다연",
};

user.id;

let config: {
  readonly apiKey: string;
} = {
  apiKey: "my API KEY",
};

// config.apiKey = "hecked"; // Cannot assign to 'apiKey' because it is a read-only property.ts(2540)
