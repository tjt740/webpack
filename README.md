# webpack

4.x + 5

> webpack 4.x

```
npm init … 可以一直点 / npm init-y
```

```
name:项目名字
version：项目版本号
description：对这个项目的描述，或者描述使用 webpack 的那些功能
entry point：入口文件名
test command：测试时候的命令
git repository：git 上面的仓库名
keywords：关键词
author：作者名字
license：许可证
```

```
全局安装: npm i webpack webpack-cli -g
本地安装: npm i webpack webpack-cli -s
```

`-S就是--save的简写 测试阶段
    -D就是--save-dev的简写 开发阶段`

全局安装: https://www.webpackjs.com/guides/getting-started/
<br>
本地安装+卸载: https://segmentfault.com/q/1010000015200625;

---

> webpack 5

---

# TypeScript

1. 安装编译 TS 的工具包 `npm i -g typescript`

2. 验证 TS 是否安装成功 `tsc -v`

> 简化运行 TS 的步骤
> 每次修改代码后，都要重复执行两个命令，才能运行 TS 代码，我们可以直接使用 ts-node 工具包，直接在 node.js 中执行 TS 代码。

安装命令：npm i -g ts-node

使用方式：ts-node hello.ts
