const seeds = [
  {
    exercise: "walking",
    description: "walking",
    photoURL:
      "https://media.istockphoto.com/photos/mid-aged-woman-running-in-city-park-picture-id1094475872",
    category: "Cardio"
  },
  {
    exercise: "running",
    description: "running",
    photoURL:
      "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/1036780592-1280x720.jpg?itok=wNUKvmCd",
    category: "Cardio"
  },
  {
    exercise: "pull ups",
    description: "pull yourself up",
    photoURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh0418-fit-pul-01-1558554157.jpg?crop=0.750xw:1.00xh;0.250xw,0&resize=980:*",
    category: "Resistance"
  }
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

    category: {
      type: DataTypes.STRING,
      allowNull: false
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
