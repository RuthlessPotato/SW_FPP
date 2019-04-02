/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};
  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'public'),
  };
  config.vuessr = {
    renderOptions: {
      basedir: path.join(appInfo.baseDir, 'app/view'),
    },
  };

  // use for cookie sign key, should change to your own and keep security
  // config.keys = appInfo.name + '_1552958840224_9047';
  config.keys = appInfo.name + 'swfpp';


  // add your middleware config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'sw_fpp',
    password: 'zyp12301231',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    sync: {
      force: true,
    },
    define: {
      underscored: false,
      freezeTableName: true,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
      },
      timestamps: true,
    },
    operatorsAliases: false,
  };
  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      enable: false,
    },
  };
  config.passportLocal = {
    usernameField: 'wxname',
    passwordField: 'password',
  };
  config.io = {
    init: {
      wsEngine: 'ws',
    }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [
          'auth',
        ],
        packetMiddleware: [],
      },
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  };
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
