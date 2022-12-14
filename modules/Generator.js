const path = require('path');
const util = require('util');
const downloadGitRepo = require('download-git-repo');
const inquirer = require('inquirer');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const { loading } = require('../utils');
const { templates } = require('../config');

class Generator {
  constructor (name, targetDir) {
    this.name = name; // 项目名称
    this.targetDir = targetDir; // 项目创建路径
    this.downloadGitRepo = util.promisify(downloadGitRepo); // 对模块进行 Promise 改造
  }

  /**
   * 创建项目核心逻辑
   * 1、获取用户选择的模版名称
   * 2、下载模板项目到当前目录
   */
  async create () {
    // 获取用户选择模版名称
    const branchName = await this.getBranchName();
    // 下载项目
    await this.download(branchName);
    // 安装项目依赖
    this.installed();
  }

  /**
   * 获取用户选择的项目模板
   * 1、加载模版配置文件
   * 2、让用户选择自己需要的模板名称
   * 3、return 用户选择的模板名称
   */
  async getBranchName () {
    const aliasTemplate = templates.map(item => item.name);
    const { branch } = await inquirer.prompt({
      name: 'branch',
      type: 'list',
      choices: aliasTemplate,
      message: 'Please choose a template to create project'
    });
    const currentTemplate = templates.find(item => item.name === branch);
    return currentTemplate['branch'];
  }

  /**
   * 下载远程项目模板
   * 1、拼接模板仓库地址
   * 2、调用下载工具进行下载
  */
  async download (branchName) {
    const requestUrl = `FE-Friday/devops-templates#${branchName}`;
    
    await loading (
      this.downloadGitRepo,
      'waiting download template',
      requestUrl,
      path.resolve(process.cwd(), this.targetDir)
    );
  }

  /**
   * 模版下载完成后，自动安装依赖
   * 
   */
  installed () {
    try {
      const child = spawn('npm', [ 'install' ], { stdio: 'inherit', cwd: `${this.targetDir}` });
      
      child.on('close', code => {
        if (code !== 0) {
          console.log(chalk.red('Error occurred while installing dependencies!'));
          process.exit(1);
        } else {
          console.log(chalk.cyan('Install finished!'));
          console.log(`\r\nSuccessfully created project ${chalk.cyan(this.name)}`);
          console.log(`\r\n  cd ${chalk.cyan(this.name)}`);
          console.log('  npm run dev\r\n');
        }
      });
    } catch (error) {
      console.log(`Error when npm install: ${error.message || error}`);
      process.exit(1);
    }
  }
}

module.exports = Generator;
