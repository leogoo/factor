const inquirer = require('inquirer');

function inquirerPrompt(argv) {
  const { name } = argv;
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: '模板名称',
      default: name,
      validate: function (val) {
        if (!/^[a-zA-Z]+$/.test(val)) {
          return "模板名称只能含有英文";
        }
        if (!/^[A-Z]/.test(val)) {
          return "模板名称首字母必须大写"
        }
        return true;
      },
    },
    {
      type: 'list',
      message: '前端框架',
      choices: ['react', 'vue'],
      name: 'frame'
    }
  ])
}
module.exports = inquirerPrompt;