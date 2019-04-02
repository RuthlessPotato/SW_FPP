'use strict';
module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE,
  } = app.Sequelize;

  const User = app.model.define('record', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wxname: STRING(30),
    location: STRING(30),
    createdAt: DATE,
    updatedAt: DATE,
  },
  {
    freezeTableName: true,
  });

  return User;
};
