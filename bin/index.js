#!/usr/bin/env node

const { program } = require('commander')
const registerCommand = require('../lib/register-command')
const { version } = require('../package.json')

registerCommand(program).then(() => {
  // 解析用户执行命令传入参数
  program
    .version(`v${version}`, '-V, --version')
    .parse(process.argv);
})
