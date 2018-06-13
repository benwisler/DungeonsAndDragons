'use strict';
module.exports = (sequelize, DataTypes) => {
  var Characters = sequelize.define('Characters', {
    title: DataTypes.STRING
  });

  Characters.associate = function (models) {
    models.Characters.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Characters;
};