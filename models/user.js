// 'use strict';
// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//       // Giving the Author model a name of type STRING
//       username: DataTypes.STRING,
//       email: DataTypes.STRING,
//       password: DataTypes.STRING
//     });
//     User.associate = function(models) {
//       models.User.hasMany(models.Characters);
//     };
  
//   return User;
//   };

  'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = function(models) {
    models.User.hasMany(models.Characters);
  };

  return User;
};
// User.associate = function(models) {
//   // Associating Author with Posts
//   // When an Author is deleted, also delete any associated Posts
//   // User.hasMany(models.Characters, {
//   //   onDelete: "cascade"
//   User.hasMany(Characters,{as: 'characters', foreignKey: 'id'
// })

// };
// return User;
// };


// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1, 10]
//       }
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       len: [1, 20]
//     }
//   });
//   return User;
// };