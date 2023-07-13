const { Router } = require("express");
const recipesRouter = require('./recipesRouter');
const dietsRouter = require('./dietsRouter');
const res200 = require('./res200')


const router = Router();


router.use("/recipes", recipesRouter);
router.use("/diets", dietsRouter);
router.use("/resp200", res200)




module.exports = router;
