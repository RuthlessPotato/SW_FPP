'use strict';
module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE,
  } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wxname: STRING(30),
    phone: INTEGER,
    password: STRING(30),
    createdAt: DATE,
    updatedAt: DATE,
  },
  {
    freezeTableName: true,
    timestamps: true,
  });

  return User;
};
