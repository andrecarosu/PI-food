const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');
const API_KEY = process.env.API_KEY;
const {Diets} = require ('../db');


const searchInfo = async () => {     
  const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
  const apiInfo = await apiUrl.data.results.map(e => {
    return {
      vegetarian: e.vegetarian,
      vegan: e.vegan,
      glutenFree: e.glutenFree,
      dairyFree: e.dairyFree,
      dietTypes: e.diets,
    };
  });
  return apiInfo;
};

const cleanInfoDiets = async () => {
  const data = await searchInfo();

  // Obtener una lista de valores únicos de la propiedad dietTypes
  let dietTypes = Array.from(new Set(data.flatMap(obj => obj.dietTypes)));

  // Combinar la lista de propiedades y dietTypes
  let properties = ['vegetarian'].concat(dietTypes);

  // Crear un array de objetos con los nombres de las propiedades
  let diets = properties.map((prop) => ({ name: prop }));

  // Insertar los registros en la tabla Diets
  Diets.bulkCreate(diets)
    .then(() => console.log('Los datos se han guardado correctamente'))
    .catch((error) => console.error('Error al guardar los datos:', error));
};

module.exports = { cleanInfoDiets };