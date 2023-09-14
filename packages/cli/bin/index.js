#!/usr/bin/env node
const yargs = require('yargs');
const inquirerPrompt = require('./inquirer.js');
const createProject = require('./create.js');

yargs.command(
  ['create', 'c'],
  '新建一个模板',
  function (yargs) {
    return yargs.option('name', {
      alias: 'n',
      demand: true,
      describe: '模板名称',
      type: 'string'
    })
  },
  function (argv) {
    inquirerPrompt(argv).then(params => {
      const { name } = params || {};
      createProject(name);
    })
  }
).argv;