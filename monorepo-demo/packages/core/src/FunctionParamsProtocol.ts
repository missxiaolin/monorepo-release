type FunctionParams<T> = T extends (...args: infer P) => any ? P : never;

function test(params: number) {}

type Params = FunctionParams<typeof test>; // [number]


// 放很多工具类型
