'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async create() {
    const ctx = this.ctx;
    const {
      wxname,
      phone,
      password,
    } = ctx.request.body;
    const user = await ctx.model.User.create({
      wxname,
      phone,
      password,
    });
    ctx.status = 201;
    ctx.body = user;
  }
  async update() {
    const ctx = this.ctx;
    const user = await ctx.model.User.findById();
    if (!user) {
      ctx.status = 404;
      return;
    }

    const {
      name,
      age,
    } = ctx.request.body;
    await user.update({
      name,
      age,
    });
    ctx.body = user;
  }
  async authCallback() {
    const {
      ctx,
    } = this;
    ctx.body = 'hi, egg';
  }
  async login() {
    const ctx = this.ctx;
    ctx.body = {
      status: 0,
      message: 255,
    };
  }
  async useTicket() {
    const { ctx, app } = this;
    const { wxname, location } = ctx.request.body;

    try {
      await ctx.model.Record.create({
        wxname: `${wxname}`,
        location: `${location}`,
      });
      ctx.body = {
        status: 0,
        message: '成功支付',
      };
    } catch (error) {
      app.logger.error(error);
      ctx.body = {
        status: 1,
        message: '成功失败',
      };
    }
  }
}

module.exports = UserController;
