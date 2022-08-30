interface User {
  name: string;
}
interface Action {
  do(): void;
}

function createUserAction(u: User, a: Action): User & Action {
  return { ...u, ...a };
}
const u = createUserAction({ name: "jay" }, { do() {} });

function compare(x: string | number, y: string | number) {
  if (typeof x === "number" && typeof y === "number") {
    return x === y ? 0 : x > y ? 1 : -1;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
  throw Error("not supported type");
}
const v = compare("a", 1);

function isAction(v: User | Action): v is Action {
  return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
  if (isAction(v)) {
    v.do();
  } else {
    console.log(v.name);
  }
}
