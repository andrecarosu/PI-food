
const {Diets} = require ('../db');
const { cleanInfoDiets } = require('../controllers/TypeDiets');


const checkAndCleanDiets = async () => {
    let dietsArray =[]
    let count = await Diets.count();
    if (count === 0) {
      await cleanInfoDiets();
      let diets = await Diets.findAll();
      dietsArray = diets.map((diet) => diet.name);
      
    } else {
      let diets = await Diets.findAll();
      dietsArray = diets.map((diet) => diet.name);
    }

    return dietsArray
  };

module.exports = {checkAndCleanDiets};    