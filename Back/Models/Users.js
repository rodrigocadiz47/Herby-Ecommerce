const S = require("sequelize");
const db = require("./_db");
const bcrypt = require("bcrypt");

class User extends S.Model {}
User.init(
  {
    firstName: {
      type: S.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: S.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    phone: {
      type: S.INTEGER,
      allowNull: false,
    },
    address: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    isAdmin: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);
User.addHook("beforeCreate", (usuario) => {
  return bcrypt
    .genSalt(12)
    .then((salt) => {
      usuario.salt = salt;
      return bcrypt.hash(usuario.password, usuario.salt);
    })
    .then((hashed) => {
      usuario.password = hashed;
    });
});

User.prototype.isValidPassword = function (password) {
  return bcrypt
    .hash(password, this.salt)
    .then((result) => {
      return result === this.password;
    })
    .catch((err) => console.log(err));
};

module.exports = User;
