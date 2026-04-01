const Sequalize = require("sequelize");
const  bcrypt = require("bcryptjs");

const {SALT_ROUND} = require("../config/server_config")
// console.log(typeof(SALT_ROUND));

const db = require("../config/db_config");

const User = db.define("user", {
  email: {
    type: Sequalize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequalize.STRING,
    allowNull: false,
    validate: {
      len: [3, 30],
      isAlphanumeric: true,
    },
  },
},{
  hooks : {
    beforeCreate : async function (user) {
      console.log("that jai maata di", user)
      const salt = await bcrypt.genSalt(+SALT_ROUND);
      console.log("the value of salt generated", salt)
       user.password = await bcrypt.hash(user.password , salt);


      console.log("password after getting chnaged", user);

    }
  }
});

module.exports = User;
