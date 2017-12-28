const shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

const checkConfigFile = (keyword, field) => {
  if (!field) {
    shell.echo(`missing ${keyword} in config file`);
    shell.exit(0);
  }
}

const ghPages = ({dir, userName, repoName, branch}) => {
  checkConfigFile('dir', dir)
  checkConfigFile('userName', userName)
  checkConfigFile('repoName', repoName)
  checkConfigFile('branch', branch)
  console.log(dir, userName, repoName, branch)
}

module.exports = ghPages