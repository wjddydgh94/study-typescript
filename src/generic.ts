function createPromise<T>(x: T, timeoute: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeoute);
  });
}
createPromise(10, 100).then((v) => console.log(v));

function createTuple2<T, U>(v: T, v2: U): [T, U] {
  return [v, v2];
}

const t1 = createTuple2("user1", 1000);
