// commands/create.js

const create = require('../lib/create');

module.exports = (program) => {
  program
    .command('create <app-name>')
    .description('Create a new project')
    .option('-f, --force', 'overwrite target directory if it exit.')
    .action((name, options) => {
      create(name, options);
    });
};
