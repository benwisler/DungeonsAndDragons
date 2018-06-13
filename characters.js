// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//       username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [1, 10]
//         }
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         len: [1, 20]
//       }
//     });
//     return User;
//   };
  
module.exports = function(sequelize, DataTypes) {
  var Characters = sequelize.define("Charaters", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  //   body: {
  //     type: DataTypes.TEXT,
  //     allowNull: false,
  //     len: [1]
  //   }
  // });
  });
  Characters.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Characters.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Characters;
};
