interface Props {
  name: string;
  [key: string]: string;
}

const p: Props = {
  name: "hello",
  a: "d",
  b: "e",
};

let keys: keyof Props;

interface User3 {
  name: string;
  age: number;
  hello(msg: string): void;
}

let keysOfUser: keyof User3;
keysOfUser = "age";

let helloMethod: User3["hello"];
helloMethod = function (msg: string) {};
