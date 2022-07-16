const ora = require('ora');
const validateProjectName = require('validate-npm-package-name');

module.exports = {
  /**
   * 网络请求加载动画
   */
  loading: async function (fn, message, ...args) {
    const spinner = ora(message);
    spinner.start();
    
    try {
      const result = await fn(...args);
      spinner.succeed();
      return result;
    } catch (error) {
      spinner.fail('Request failed, refetch...');
      console.log(`Error when spinner start: ${error.message || error}`);
      process.exit(1);
    }
  },

  /**
   * 验证用户输入的项目名称是否合法
   */
  validateProjectName: async function (projectName) {
    const result = validateProjectName(projectName);

    if (!result.validForNewPackages) {
      console.error(`Invalid project name: "${projectName}"`);

      result.errors && result.errors.forEach((err) => {
        console.error(`Error: ${err}`);
      });

      result.warnings && result.warnings.forEach((warn) => {
        console.error(`Warning: ${warn}`);
      });
      
      process.exit(1)
    }
  }
}
