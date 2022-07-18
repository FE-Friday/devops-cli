/**
 * lib/upgrade/index.js
 * 升级脚手架
 */

const spawn = require("cross-spawn");
const chalk = require("chalk");

module.exports = function () {
  try {
    const child = spawn("npm", ["install", "-g", "@devops/cli"], {
      stdio: "inherit",
    });

    child.on("close", (code) => {
      if (code !== 0) {
        console.log(chalk.red("Error occurred while update @devops/cli!"));
        process.exit(1);
      } else {
        console.log(chalk.cyan("upgrade finished!"));
        console.log(`\r\nSuccessfully upgrade ${chalk.cyan("@devops/cli")}`);
        console.log(`\r\n  devops -V`);
        console.log(" \r\n");
      }
    });
  } catch (error) {
    console.log(`Error when npm install: ${error.message || error}`);
    process.exit(1);
  }
};
