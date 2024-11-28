# monorepo-release

# 架构设计与工程化

## 基础架构

项目结构

了解过 monorepo ？

一个 git/svn 仓库管理一个项目，但是如果是巨石项目，这个方案非常难受。

一个大型项目是不是很多团队协同

- ui
- util
- cli
- core
- shared
- Zustand-hancer

这些库之间都有依赖 NX、Turborepo，这些包之间进行发布的时候，是不是要考虑版本同步问题（6 个 git，可以用 6 个 git submodule）

在一个 git 仓库中，放多个项目，那这个仓库我们就称之为 monorepo（multirepo）

- lerna
- pnpm workspace ✅

### 以 React 源码举例

- react-dom
  - react-three-fiber
  - react-miaoma-renderer
- react
- scheduler
- react-reconciler

### 以 Vue3 源码举例

- vue
- compiler-core
- reactivity
- runtime-core

### monorepo 设计实战

1. 统一的依赖管理
2. 版本同步
3. 模块共享
4. 统一工具链
5. 相同代码风格
6. 统一 CI/CD
7. 增量部署
8. 一键生成依赖图
9. 分支管理

## 技术方案

### React

- React
- React Hook
- redux
- mobx
- Zustand
- recoil
- context + provider
- react-router
- @tanstack/router type safe router
- formilk
- react-hook-form
- axios
- swr
- relay
- styled-components
- emotion
- css module
- tailwind css
- antd
- webpack
- vite
- babel
- jest
- react-testing-library
- playwright
- cypress
- next
- qiankun、single-spa、garfish
- eslint
- stylelint
- prettier
- commitlint
- cspell
- husky
- 流程引擎编辑器：react-flow
- 3d：threejs、react-three-fiber
- anltr，生成编译器
- dnd-kit
- react-dnd（体验很差）

### Vue

- vue
- vite
- Vue-Router
- pinia
- vee-validate
- axios
- vue-query
- scoped style
- element plus
- rollup
- jest
- Playwright
- cypress
- eslint
- stylelint
- prettier
- commitlint
- cspell
- husky
- Jenkins
- github actions
- 流程引擎编辑器：vue-flow
- 3d：threejs
- anltr，生成编译器
- 低代码编排引擎：smooth-dnd

2-1+，效率团队

webpack 打包构建 文档工具

Vue

## 工具链

- 打包构建：Webpack、Vite
