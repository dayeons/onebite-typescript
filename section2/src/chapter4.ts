// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "정다연",
  nickname: "Jeong",
  birth: "1993.01.12",
  bio: "안녕하세요",
  location: "서울",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "Hong",
  birth: "1993.01.12",
  bio: "안녕하세요",
  location: "서울",
};

// 인덱스 시그니처
type countryCodes = {
  [key: string]: string;
};
let countryCodes: countryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type countryNumberCodes = {
  [key: string]: number;
  Korea: number;
  // Korea: string; // Property 'Korea' of type 'string' is not assignable to 'string' index type 'number'.ts(2411)
};
let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
};
