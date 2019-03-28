'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // enable: true,
  // package: 'egg-sequelize',
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  passportLocal: {
    enable: true,
    package: 'egg-passport-local',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  // assets: {
  //   enable: true,
  //   package: 'egg-view-assets',
  // },
  // vuessr: {
  //   enable: true,
  //   package: 'egg-view-vue-ssr',
  // },
};
