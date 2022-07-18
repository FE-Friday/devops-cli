/**
 * commands/list.js
 * eg devops list
 * 列出可用的模版列表
 */

const list = require('../lib/list');

module.exports = (program) => {
  program
    .command('list')
    .description('Show prpject template list')
    .action((name, options) => {
      list(name, options);
    });
};
