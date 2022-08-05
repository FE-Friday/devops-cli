# DevOps-CLI
基于蓝鲸 `Magicbox` 和 `Vue` 的前端脚手架。

## 配置
```bash
# 全局配置
$ npm config set registry http://registry.devops.canway.com/
$ npm install -g @devops/cli

# 临时配置
npm install -g @devops/cli --registry=http://registry.devops.canway.com/
```
## 安装
```bash
$ npm install -g @devops/cli --registry=http://registry.devops.canway.com/

# or

$ yarn global add @devops/cli --registry=http://registry.devops.canway.com/
```

## 使用
```bash
# 创建项目
$ devops create projectName

# 更新脚手架
$ devops upgrade

# 查看项目模板列表
$ devops list

# 查看当前版本
$ devops -V
```

## 提供模版

- devops-iframe：基于 `@devops/bk-magic-vue` 和 `Vue2.x` 的项目框架，适用于 `DevOPs` 微前端架构下的 `iframe` 模式。
- devops-amd：基于 `@devops/bk-magic-vue` 和 `Vue2.x` 的项目框架，适用于 `DevOPs` 微前端架构下的 `AMD` 模式。
- devops-plugin-card：支持 `devops` 卡片插件的项目模板

## 查看帮助
```bash
$ devops -h
```
