var usage = `
USAGE:
  staticland {command} [options]

COMMANDS:
  register    create an account on a staticland server
  login       log in to a staticland server
  logout      log out of a staticland server
  deploy      deploy a static site to a staticland server
  password    change your password on a staticland server
  server      switch between staticland servers you've logged in to
  whoami      show which user you're using on which staticland server
  domain      check if domain dns is correctly set up with a staticland server
  help        show this help message

DEPLOY
  staticland deploy site/ example.com

  Options:
  -e, --exclude   exclude specific files and directories
  -s, --server    Specify a server to use instead of the hosted version at static.land

  You can drop the "deploy" subcommand for a shortened version:

    staticland site/ example.com

  To exclude file and directories:

    staticland site/ example.com -e bigfile.pdf -e secret.txt -e dir/of/super/big/files/

HELP
  staticland help

REGISTER
  staticland register

LOGIN
  staticland login

SERVER
  staticland server api.static.land

WHOAMI
  staticland whoami

`

module.exports = {
  name: 'help',
  command: function help (args, a, b, c) {
    console.log(usage)
  }
}
