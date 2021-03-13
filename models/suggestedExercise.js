const seeds = [
  { exercise: "walking", description: "walking", photoURL: "test" },
  { exercise: "running", description: "running", photoURL: "test" },
  { exercise: "pull ups", description: "pull yourself up", photoURL: "test" }
];
module.exports = function(sequelize, DataTypes) {
  const sugExercise = sequelize.define("suggested", {
    exercise: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    photoURL: {
      type: DataTypes.STRING
    },

    completed: {
      type: DataTypes.BOOLEAN,
      defaulfValue: false
    }
  });
  seeds.map(seed => sugExercise.create(seed));
  return sugExercise;
};
