const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");
const API_KEY = process.env.API_KEY;
const { Op } = require("sequelize");

const { Recipe, Diets } = require("../db");

const cleanArray = arr => {
  return arr.data.results.map(elem => {
    return {
      id: elem.id,
      name: elem.title,
      image: elem.image,
      summary: elem.summary,
      healthScore: elem.healthScore,
      steps: elem.analyzedInstructions[0]?.steps.map(e => {
        return {
          number: e.number,
          step: e.step,
        };
      }),
      create: false,
      diets: elem.diets,
    };
  });
};

const searchRecipeByName = async name => {
  const databaseRecipes = await Recipe.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });

  const apiRecipes = [];
  let offset = 0;
  let totalResults = 1;

  while (offset < totalResults) {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&number=100&offset=${offset}&query=${name}`
    );

    apiRecipes.push(...cleanArray(response));

    offset += response.data.results.length;
    totalResults = response.data.totalResults;
  }

  const apiRecipesFilter = apiRecipes.filter(e =>
    e.name.toLowerCase().includes(name.toString().toLowerCase())
  ).slice(0, 100);

  return [...databaseRecipes, ...apiRecipesFilter];
};

const getAllRecipes = async () => {
  try {
    const databaseRecipes = await Recipe.findAll({
      include: [
        {
          model: Diets,
          as: "Diets",
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
  
    const apiRecipesRaw = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    const apiRecipes = cleanArray(apiRecipesRaw);

    const databaseRecipesMapped = databaseRecipes.map(recipe => {
      const recipeData = recipe.toJSON();
      const dietsArray = recipe.Diets.map(diet => diet.name);
      return {
        id: recipeData.id,
        name: recipeData.name,
        image: recipeData.image,
        summary: recipeData.summary,
        healthScore: recipeData.healthScore,
        steps: recipeData.steps,
        create: recipeData.create,
        diets: dietsArray,
      };
    });

    return [...databaseRecipesMapped, ...apiRecipes];
  } catch (error) {
    console.log(error);
  }
};

const createRecipe = async (
  name,
  image,
  summary,
  healthScore,
  steps,
  diets
) => {
  let dietIds = [];

  for (const dietName of diets) {
    const diet = await Diets.findOne({ where: { name: dietName } });
    if (diet) {
      dietIds.push(diet.id);
    }
  }

  if (!dietIds.length) {
    dietIds = [1];
  }

  const recipe = await Recipe.create({
    name,
    image,
    summary,
    healthScore,
    steps,
  });

  await recipe.setDiets(dietIds, { alias: "Diets" });

  const recipeWithDiets = await Recipe.findOne({
    where: { id: recipe.id },
    include: [
      {
        model: Diets,
        as: "Diets",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
    attributes: { exclude: ["Diets"] }, // Excluir la propiedad Diets del objeto de salida
  });

  const dietsArray = recipeWithDiets.Diets.map(diet => diet.name);
  // dietsArray = diets.map((diet) => diet.name);
  const recipeData = recipeWithDiets.toJSON();
  const recipeWithDietsArray = { ...recipeData, diets: dietsArray };

  return recipeWithDietsArray;
};

const getRecipeById = async (id, search) => {
  if (search === "api") {
    const apiById = (
      await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      )
    ).data;
    const apiInfo = [apiById].map(e => {
      return {
        id: e.id,
        image: e.image,
        name: e.title,
        summary: e.summary,
        healthScore: e.healthScore,
        steps: e.analyzedInstructions.map(e =>
          e.steps.map(i => {
            return {
              number: i.number,
              step: i.step,
            };
          })
        ),
        diets: e.diets,
      };
    });
    return apiInfo;
  } else {
    const apiInfoRecipe = await Recipe.findByPk(id, {
      include: {
        model: Diets,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    if (!apiInfoRecipe) {
      // manejar el caso en que no se encontró ninguna receta
      return null;
    }

    const arrayApiInfoDiet = apiInfoRecipe.Diets.map(diet => diet.name);

    const recipeData = await Recipe.findByPk(id);

    if (!recipeData) {
      // manejar el caso en que no se encontró ninguna receta
      return null;
    }

    const stepsArray = recipeData.steps
      ? recipeData.steps.map(instruction => {
          return {
            number: instruction.number,
            step: instruction.step,
          };
        })
      : [];

    const apiInfo = [
      {
        id: recipeData.id,
        image: recipeData.image,
        name: recipeData.name,
        summary: recipeData.summary,
        healthScore: recipeData.healthScore,
        steps: stepsArray,
        diets: arrayApiInfoDiet,
      },
    ];

    console.log(apiInfo);
    return apiInfo;
  }
};

module.exports = {
  createRecipe,
  getRecipeById,
  searchRecipeByName,
  getAllRecipes,
};
