const add = (x: number, y: number): number => {
  return x + y;
};

const result = add(1, 2);

const buildUserInfo = (name = "-", email = "-") => {
  return { name, email };
};

const user = buildUserInfo();

const add2 = (a: number, b: number) => a + b;

interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}
function store(type: "통조림"): Storage;
function store(type: "아이스크림"): ColdStorage;

function store(type: "통조림" | "아이스크림") {
  if (type === "통조림") {
    return { a: "통조림" };
  } else if (type === "아이스크림") {
    return { b: "아이스크림" };
  } else {
    throw new Error("unsupported type");
  }
}

const s = store("아이스크림");
s.b;
