module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 10]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1, 20]
      }
    });
    return User;
  };
  