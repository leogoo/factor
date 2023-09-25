const copydir = require('copy-dir');
const path = require('path');
const mustache = require('mustache');
const fs = require('fs');

function createProject(projectName) {
  const from = path.resolve(__dirname, './template/template-react');
  const to = path.resolve(process.cwd(), projectName);
  copydir.sync(from, to, (stat, filepath, filename) => {
    if (stat === 'file' && filepath.endsWith('.tpl')) {
      // 使用Mustache渲染模板并将其写入输出文件
      const template = fs.readFileSync(filepath, 'utf8');
      const renderedContent = mustache.render(template, {
        projectName
      });
      fs.writeFileSync(path.resolve(process.cwd(), `${projectName}/package.json`), renderedContent);
      return false;
    }
    return true;
  })
}

module.exports = createProject;