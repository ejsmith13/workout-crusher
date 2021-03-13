const seeds = [
  { exercise: "walking", description: "walking", photoURL: "test" },
  { exercise: "running", description: "running", photoURL: "test" },
  { exercise: "pull ups", description: "pull yourself up", photoURL: "test" }
];
module.exports = function(sequelize, DataTypes) {
  const Daily = sequelize.define("Daily", {
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
  Daily.sync();
  Daily.findAll().then(results => {
    if (results.length === 0) {
      seeds.map(seed => Daily.create(seed));
    }
  });

  return Daily;
};
