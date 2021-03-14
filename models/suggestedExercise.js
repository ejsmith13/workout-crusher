const chalk = require("chalk");
const seeds = [
  {
    exercise: "Walking",
    description: "Walk at a brisk pace for 45 min to 1 hr",
    photoURL:
      "https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/5dafe4081c03a70f3d7a60d7_fitwalk2.jpeg",
    category: "Cardio"
  },
  {
    exercise: "Running",
    description: "Jog for 20-30 minutes at a moderate pace",
    photoURL:
      "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/1036780592-1280x720.jpg?itok=wNUKvmCd",
    category: "Cardio"
  },
  {
    exercise: "Pull Ups",
    description: "Complete 3 sets of 5 pull ups to target your lats and biceps",
    photoURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh0418-fit-pul-01-1558554157.jpg?crop=0.750xw:1.00xh;0.250xw,0&resize=980:*",
    category: "Resistance"
  },
  {
    exercise: "Sit Ups",
    description: "Complete three sets of 8 sit up to gain abdominal strenght.",
    photoURL:
      "https://media.gq.com/photos/580a26d7aafbc05a239a57f7/master/w_1600%2Cc_limit/sit-up-butt.jpg",
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
  Daily.destroy({
    where: {},
    truncate: true
  });
  Daily.sync();
  Daily.findAll().then(results => {
    if (results.length === 0) {
      console.log(chalk.red.bgCyan.bold("Creating seeds"));
      // eslint-disable-next-line array-callback-return
      seeds.map(seed => {
        Daily.create(seed);
        console.log(chalk.cyan(`Load: ${seed.exercise}`));
      });
    } else {
      console.log(chalk.bgRed("Using existing seeds"));
    }
  });

  return Daily;
};
