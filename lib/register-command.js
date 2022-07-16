const path = require('path');
const fs = require('fs');

module.exports = async function (program) {
  try {
    const commandDirPath = path.join(__dirname, '..', 'commands');
    const commands = fs.readdirSync(commandDirPath);
    commands.forEach(commandName => {
      const commandPath = path.join(commandDirPath, commandName);
      require(commandPath)(program);
    });    
  } catch (error) {
    console.log(`Error when load commands: ${error.message || error}`);
    process.exit(1);
  }
}
