'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  app.passport.mount('local');
  router.post('/user', controller.user.create);
  router.get('/authCallback', controller.user.authCallback);

  // 渲染登录页面，用户输入账号密码
  router.get('/login', controller.user.login);
  // 登录校验
  // const localStrategy = app.passport.authenticate('local');
  // app.router.post('/passport/local', localStrategy);
  router.post('/login', app.passport.authenticate('local', {
    successRedirect: '/authCallback',
    failureRedirect: '/login',
    // failureFlash: true,
  }));
  router.get('/', controller.home.index);
  // router.get('/', controller.home.server);
  // router.get('/client', controller.home.client);
  // router.get('/', controller.app.index);
  io.of('/').route('exchange', io.controller.nsp.exchange);
};
