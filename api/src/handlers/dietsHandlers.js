const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');
const API_KEY = process.env.API_KEY;
const { checkAndCleanDiets } = require('../controllers/controllersDiets');


const getDietsHandler = async (req, res) =>{

    try {
        const diet = await checkAndCleanDiets();
        res.status(200).json(diet);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports ={
    getDietsHandler
};