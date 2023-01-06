# kivibot-plugin-template-ts

`KiviBot` 插件 TS 开发模板，开箱即用，近乎零配置。

## 特征

- ✅ 预安装必要的开发依赖
- 🔧 完备的 TS 编译配置
- 🎨 简洁明了的模板代码
- 💻 开发友好的调试方式（`tsc` + `tsc-alias` + `concurrently`）
- 🧪 可选配置的测试套件（`ava`）

## 开发

使用 `degit` 克隆到本地进行开发

```shell
npx degit KiviBotLab/kivibot-plugin-template-ts ts-demo
```

> 如果你需要发布到 npm，请注意修改 `package.json`, `license` 的相关信息, `test.mjs` 用于编写测试，如果你不需要测试，可以自行删除。

然后删除 `README` 的上述内容，保留并修改以下内容即可。

# xxx for KiviBot

[![npm-version](https://img.shields.io/npm/v/kivibot-plugin-xxx?color=527dec&label=kivibot-plugin-xxx&style=flat-square)](https://npm.im/kivibot-plugin-xxx)
[![dm](https://shields.io/npm/dm/kivibot-plugin-xxx?style=flat-square)](https://npm.im/kivibot-plugin-xxx)

[`KiviBot`](https://beta.kivibot.com) 的 [xxx]() 插件。

**安装**

```shell
/plugin add xxx
```

**启用**

```shell
/plugin on xxx
```

**使用**

```shell
xxx
```

**配置**

编辑 `框架目录/data/plugins/xxx/config.json` 文件。

```jsonc
{
  // 触发命令
  "cmd": ""
}
```

然后使用以下命令重载插件生效。

```shell
/plugin reload xxx
```
