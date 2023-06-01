import {
  GET_ALL_RECIPES,
  GET_RECIPE,
  ADD_RECIPE,
  GET_DIET_TYPES,
  SEARCH_RECIPE,
  DIET_TYPE_FILTER,
  ALPHABETICAL_SORT,
  SCORE_SORT,
  FROM_DATA_API,
  CLEAN_STATE,
} from "./action-type";

const initialState = {
  recipes: [],
  allRecipes: [],
  dietTypes: [],
  recipeDetail: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: payload,
        allRecipes: payload,
      };

    case GET_RECIPE:
      return {
        ...state,
        // recipeDetails: payload
        recipeDetail: Array.isArray(payload) ? payload : [payload],
      };

    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, payload],
      };

    case GET_DIET_TYPES:
      return {
        ...state,
        dietTypes: payload,
      };
    case SEARCH_RECIPE:
      return {
        ...state,
        recipes: payload,
      };

    case DIET_TYPE_FILTER:
      const allRecipes = state.allRecipes;
      const filteredByDietType =  payload === "All" ? allRecipes :
      allRecipes.filter(r =>
        r.diets?.some(d => d.toLowerCase() === payload.toLowerCase())
      );
      return {
        ...state,
        recipes: filteredByDietType,
      };

      case FROM_DATA_API:
        let all = [...state.allRecipes];
        let filteredData = all.filter(r => r.create === true);
        let filteredApi = all.filter(r => r.create === false);
        
        let sortForRecipes = payload === "data" ? filteredData :
                           payload === "api" ? filteredApi :
                           all;
        
        return {
          ...state,
          recipes: sortForRecipes,
        };

      case ALPHABETICAL_SORT:
        let sortedRecipes = [...state.recipes];
        sortedRecipes =
          payload === "atoz"
            ? state.recipes.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                return 0;
              })
            : state.recipes.sort(function (a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                return 0;
              });
        return {
          ...state,
          recipes: sortedRecipes,
        };

      case SCORE_SORT:
        let sortedRecipesByScore = [...state.recipes];
        sortedRecipesByScore = payload === "asc"
          ? state.recipes.slice().sort((a, b) => a.healthScore - b.healthScore)
          : state.recipes.slice().sort((a, b) => b.healthScore - a.healthScore);
        return {
          ...state,
          recipes: sortedRecipesByScore,
        }; 
        
        
       case CLEAN_STATE:
        
       return {
        ...state,
        recipeDetail: [],
       };



    default:
      return { ...state };
  }
};

export default reducer;
