const figlet = require('figlet');
const chalk = require('chalk');

module.exports = (program) => {
  const figletText = figlet.textSync('DevOps', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  });

  program
    .on('--help', () => {
      // 使用 figlet 绘制 LOGO
      console.log('\r\n' + figletText);

      // 新增说明信息
      console.log(`\r\nRun ${chalk.cyan(`roc <command> --help`)} show details.\r\n`);
    });
};
