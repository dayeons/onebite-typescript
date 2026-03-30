/**
 * 인덱스드 엑세스 타입
 */

// 1.
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// function printAuthorInfo(author: { id: number; name: string }) {
//   console.log(`${author.name}-${author.id}`);
// }

// function printAuthorInfo(author: Post["author"]['id']) {
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "post title",
  content: "post contents",
  author: {
    id: 1,
    name: "jeong dayeon",
    age: 35,
  },
};

printAuthorInfo(post.author);

// 2.

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post2: PostList[number] = {
  title: "post title",
  content: "post contents",
  author: {
    id: 1,
    name: "jeong dayeon",
    age: 35,
  },
};

// 3.

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];

type TupNum = Tup[number];
