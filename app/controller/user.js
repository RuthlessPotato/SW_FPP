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
}

module.exports = UserController;
