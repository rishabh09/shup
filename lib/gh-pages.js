const shell = require('shelljs')

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}

const checkConfigFile = (keyword, field) => {
  if (!field) {
    shell.echo(`missing ${keyword} in config file`)
    shell.exit(0)
  }
}

const buildTempDir = () => {
  shell.cd(process.cwd());
  shell.mkdir('shup-build');
  shell.cd('shup-build');
}

const cloneRepo = (userName, repoName, branch, ssh) => {
  let remoteBranch;
  if (ssh === true) {
    remoteBranch = `git@github.com:${userName}/${repoName}.git`;
  } else {
    remoteBranch = `https://github.com/${userName}/${repoName}.git`;
  }
  shell.exec(`git clone ${remoteBranch} ${repoName}-${branch}`)
}

const removeTempDir = () => {
  shell.cd('../');
  shell.rm('-rf','shup-build')
}

const ghPages = ({dir, userName, repoName, branch, ssh}) => {
  checkConfigFile('dir', dir)
  checkConfigFile('userName', userName)
  checkConfigFile('repoName', repoName)
  checkConfigFile('branch', branch)
  buildTempDir()
  cloneRepo(userName, repoName, branch, ssh)
  removeTempDir()
}

module.exports = ghPages
