'use strict';
module.exports = (sequelize, DataTypes) => {
  var Character = sequelize.define('Characters', {
    characterHP: DataTypes.INTEGER,
    characterGender: DataTypes.STRING,
    characterRace:  DataTypes.STRING,
    characterSR:  DataTypes.STRING,
    characterJob:  DataTypes.STRING,
    characterAttr:  DataTypes.ARRAY,
    characterProf: DataTypes.ARRAY
  });

  Character.associate = function (models) {
    models.Character.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  Character.sync();
  return Character;
  // Makes the Character Model available for other files (will also create a table)

};