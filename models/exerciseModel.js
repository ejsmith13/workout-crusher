// Sequelized Model used to add and retrieve fields from the database
module.exports = function(sequelize, DataTypes) {
  const Exercise = sequelize.define("Exercise", {
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Exercise;
};
