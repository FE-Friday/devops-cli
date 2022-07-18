/**
 * commands/list.js
 * eg: devops upgrade
 * 升级脚手架 @devops/cli
 * 2022/07/18
 * by king
 * pengkaiwang@canway.net
 */
const upgrade = require('../lib/upgrade');
module.exports = (program) => {
  program
    .command('upgrade')
    .description('Update @devops/cli')
    .action(() => {
      upgrade();
    });
};
