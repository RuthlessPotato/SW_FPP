'use strict';

const Controller = require('egg').Controller;

class appController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
      // render 实现是服务端渲染 vue 组件
    await ctx.render('app/app.js');
  }
}
module.exports = appController;
