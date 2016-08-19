module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/home/gary/www/my-api',
      repositoryUrl:'https://github.com/Walk4Muscle/Angular-Node-ejs.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false,
      key: 'myCert.pem',
      shallowClone: true
    },
    staging: {
      servers: 'gary@gartubuntu.cloudapp.net'
    }
  });
  shipit.releasesPath = '/home/gary/www/releases';
};