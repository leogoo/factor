const copydir = require('copy-dir');
const path = require('path');

function createProject(projectName) {
  const from = path.resolve(__dirname, './template/template-react');
  const to = path.resolve(process.cwd(), projectName);
  copydir(from, to, {
    utimes: true,  // keep add time and modify time
    mode: true,    // keep file mode
    cover: true    // cover file when exists, default is true
  });
}

module.exports = createProject;