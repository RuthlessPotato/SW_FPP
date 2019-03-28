'use strict';

// const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
    
// 挂载 strategy
//   app.passport.use(new LocalStrategy({
//     passReqToCallBack: true,
//   }, (req, wxname, password, done) => {
//     // format user
//     const user = {
//       provider: 'local',
//       wxname,
//       password,
//     };
//     app.passport.doVerify(req, user, done);
//   }));
  app.beforeStart(async () => {
    const room = await app.redis.get('room:demo');
    if (!room) {
      await app.redis.set('room:demo', 'demo');
    }
  });
  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    const existsUser = await ctx.model.User.findOne({
      where: {
        wxname: user.username,
        password: user.password,
      },
      raw: true,
    });
    if (existsUser) {
      return existsUser;
    }
  });
  app.passport.serializeUser(async (ctx, user) => {
    return user;
  });
  app.passport.deserializeUser(async (ctx, user) => {
    return user;
  });
};
