// lib/create/index.js

const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const ora = require('ora');
const { validateProjectName } = require('../../utils');
const Generator = require('../../modules/Generator');

module.exports = async function (name, options) {
  try {
    // 验证项目名称是否合法
    validateProjectName(name);

    // 获取当前命令行选择的目录
    const cwd = process.cwd();
    
    // 需要创建项目的路径
    const targetDir = path.join(cwd, name);

    // 检查用户输入的项目名称是否已经存在
    if (fs.existsSync(targetDir)) {
      // 如果项目目录已经存在，询问是否强制创建
      if (options.force) {
        await fs.remove(targetDir);
      } else {
        // 询问用户是否确定覆盖
        const { action } = await inquirer.prompt([
          {
            name: 'action',
            type: 'list',
            message: 'Target directory already exists Pick an action:',
            choices: [
              {
                name: 'Overwrite',
                value: 'overwrite'
              },
              {
                name: 'Cancel',
                value: false
              }
            ]
          }
        ]);

        if (action === 'overwrite') {
          // 移除已存在的目录
          const spinner = ora(`Removing target directory (${targetDir})`).start();
          await fs.remove(targetDir);
          spinner.stop();
        } else {
          process.exit(1);
        }
      }
    }

    // 开始创建项目
    const generator = new Generator(name, targetDir);
    generator.create();

  } catch (error) {
    console.log(`Error when create project: ${error.message || error}`);
    process.exit(1);
  }
};
