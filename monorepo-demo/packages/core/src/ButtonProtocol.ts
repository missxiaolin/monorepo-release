/**
 * 为什么大厂要用 Typescript
 * 因为编码设计先于编码实现
 */
const buttonTypes = ["primary", "secondary", "default"] as const;
type ButtonTypes = (typeof buttonTypes)[number];


export type ButtonProtocol = {
  type: ButtonTypes;
  onClick: () => void;
};

// mantineUI
// 样式体系
// types 定义
// 自实现的 css module 结合 type 推导
