type A = {
  a: string;
};

type B = {
  b: number;
};

const input = { a: "hello", b: 1234 };

function fn(arg: A): void {}

fn(input);
