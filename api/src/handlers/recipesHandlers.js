const { json } = require('body-parser');
const {createRecipe, getRecipeById, searchRecipeByName,getAllRecipes} = require ('../controllers/controllersRecipes');
const { search } = require('../routes/dietsRouter');

const getRecipesHandler = async (req, res) => {
    const {name} = req.query;
    const info = name ? await searchRecipeByName(name) : await getAllRecipes()
    try {
        res.status(200).json(info);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }   
};

const getRecipeHandler = async (req, res) => {
    const {id} = req.params
    const search = isNaN(id) ? "bd" : "api";
    try {
        const recipe = await getRecipeById(id, search);
        res.status(200).json(recipe);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    };    

const postRecipeHandler = async (req, res) =>{
    const{name,image,summary,healthScore,steps,diets} =req.body;
try {
    const newRecipe = await createRecipe(name,image,summary,healthScore,steps,diets)

    
     res.status(200).json(newRecipe);

} catch (error) {
    res.status(400).json({ error: error.message})
}    
};


      module.exports ={
        getRecipesHandler,
        getRecipeHandler,
        postRecipeHandler
    }