// object
// 구조적 타입 시스템 -> property based type system
let user = {
    id: 1,
    name: "정다연",
};
user.id;
let config = {
    apiKey: "my API KEY",
};
export {};
// config.apiKey = "hecked"; // Cannot assign to 'apiKey' because it is a read-only property.ts(2540)
