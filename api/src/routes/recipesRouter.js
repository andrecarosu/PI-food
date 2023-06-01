const { Router } = require('express');
const {getRecipesHandler,
       getRecipeHandler,
       postRecipeHandler} = require('../handlers/recipesHandlers')

const recipesRouter = Router();

recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:id", getRecipeHandler);
recipesRouter.post("/", postRecipeHandler);

module.exports = recipesRouter;                 