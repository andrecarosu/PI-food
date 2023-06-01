// import { useSelector, useDispatch } from "react-redux";
// import { getRecipe } from "../../redux/actions";
// import style from "./Details.module.css";
// import { useEffect } from "react";



// const Details = (props)=>{
    
//     const recipeDetails = useSelector(state=>state.recipeDetails)
//     console.log(recipeDetails);
//     const dispatch = useDispatch();
//     const id = props.match.params.id;
    
    
//     useEffect(() => {
//         dispatch(getRecipe (id))
//     }, [dispatch, id]);
    
//     return(
//         <div className={style.divContenedor3}>
//         {/* {Array.isArray(recipeDetails) && recipeDetails.map((recipe, index) => { */}
//         {Array.isArray(recipeDetails) && recipeDetails.length > 0 && recipeDetails[0].id && recipeDetails.map((recipe, index) => {
//           return(
//             <div key={index} className={style.divContenedor}>
//               <div className={style.divContenedor2}>
//                 <img className={style.divContenedorCardImg} src={recipe.image} alt={recipe.name} />
//                 <h1 className={style.nameh2}>{`Name: ${recipe.name}`}</h1>
//                 <span className={style.nameh2B} dangerouslySetInnerHTML={{ __html:` <h3>Summary: <br></h3>  ${recipe.summary}` }}></span>
//                 {/* <span className={style.nameh2B}>{`Health Score:  ${recipe.healthScore}`}</span> */}
//                 <span className={style.nameh2B}>{`Health Score:  ${recipe.healthScore && recipe.healthScore}`}</span>


                {/* <span className={style.nameh2B}>
                  <h3 className={style.nameh3}>Steps:</h3>
                  {recipe.steps.map(stepsArr => stepsArr.map(step => <>
                    <h3 className={style.nameh2C}>number {step.number}:</h3>  {step.step}</>))}
                  {recipe.steps.map(stepsArr => Array.isArray(stepsArr) && stepsArr.map(step => <>
                  <h3 className={style.nameh2C}>number {step.number}:</h3>  {step.step}</>))}
                </span> */}


                {/* {recipe.analyzedInstructions[0].steps.map((step, i) => (
  <div key={i}>
    <h3 className={style.nameh3}>Steps {step.number}:</h3>
    <p>
      <span className={style.nameh2C}>Number {step.number}:</span> {step.step}
    </p>
  </div>
  ))} */}




  {/* <span className={style.nameh2B}>
                  <h3 className={style.nameh3}>Steps:</h3>

{recipe.steps.map((step, i) => (
  <div key={i}>
    <h3 className={style.nameh3}>Steps {i + 1}:</h3>
    <p>
      <span className={style.nameh2C}>Number {step.number}:</span> {step.step}
    </p>
  </div>
))}

</span>  */}


{/* <span className={style.nameh2B}>
  <h3 className={style.nameh3}>Steps:</h3>
  {Array.isArray(recipe.steps) && recipe.steps.every(step => step.number && step.step) ? (
    recipe.steps.map((step, i) => (
      <div key={i}>
        <h3 className={style.nameh3}>Steps {i + 1}:</h3>
        <p>
          <span className={style.nameh2C}>Number {step.number}:</span> {step.step}
        </p>
      </div>
    ))
  ) : (
    Object.values(recipe.steps).map((step, i) => (
      <div key={i}>
        <h3 className={style.nameh3}>Steps {i + 1}:</h3>
        <p>
          <span className={style.nameh2C}>Number {step.number}:</span> {step.step}
        </p>
      </div>
    ))
  )}
</span> */}

{/* 

<span className={style.nameh2B}>
  <h3 className={style.nameh3}>Steps:</h3>
  {Array.isArray(recipe.steps) && recipe.steps.length > 0 ? (
    recipe.steps.map((stepsArr, index) => (
      <div key={index}>
        {stepsArr.map((step, stepIndex) => (
          <div key={stepIndex}>
            <h3 className={style.nameh2C}>number {step.number}:</h3> {step.step}
          </div>
        ))}
      </div>
    ))
  ) : (
    <p>No steps found.</p>
  )}
</span> */}











                {/* <span className={style.nameh2B}>
                  <h3 className={style.nameh3}>Type Diets:</h3>
                  <p>{recipe.diets.join(", ")}</p>
                </span>
              </div>
            </div>
          )
        })}
      </div>
    )
}

export default Details; */}









// router.post('/', async (req, res, next) => {
//   try {
//       const { name, summary, score, healthScore, steps, dietTypes } = req.body
//       const newRecipe = await Recipe.create({
//           name,
//           summary,
//           score,
//           healthScore,
//           steps,
//       })

//       let dietTypesRecipeDb = await Diet.findAll({
//           where: {name: dietTypes}
//       })
//       newRecipe.addDiet(dietTypesRecipeDb)
//       res.status(200).send(newRecipe)  
//   } catch (error) {
//       next(error)
//   };
// });


// <div className={style.nameh2B}>
//   <h3 className={style.nameh3}>Steps:</h3>
// {Array.isArray(recipe.steps) && recipe.steps.every(step => step.number && step.step) ? (
// <>
// {recipe.steps.map(stepsArr => stepsArr.map(step => <>
// <h3 className={style.nameh2C}>number {step.number}:</h3> {step.step}</>))}
// {recipe.steps.map(stepsArr => Array.isArray(stepsArr) && stepsArr.map(step => <>
// <h3 className={style.nameh2C}>number {step.number}:</h3> {step.step}</>))}
// </>

// ) :

// (


// Object.values(recipe.steps).map((step, i) => (
//   <div key={i}>
//     <h3 className={style.nameh3}>Steps {i + 1}:</h3>
//     <p>
//       <span className={style.nameh2C}>Number {step.number}:</span> {step.step}
//     </p>
//   </div>
// ))
// )}

// </div>



{/* <span className={style.nameh2B}>
  <h3 className={style.nameh3}>Steps:</h3>

  {Array.isArray(recipe.steps) && recipe.steps.every(step => step.number && step.step) ? (
    <>
     {recipe.steps.map(stepsArr => stepsArr.map(step => <>
      <h3 className={style.nameh2C}>number {step.number}:</h3>  {step.step}</>))}
    {recipe.steps.map(stepsArr => Array.isArray(stepsArr) && stepsArr.map(step => <>
    <h3 className={style.nameh2C}>number {step.number}:</h3>  {step.step}</>))}
  </>

  ) : 
  
  (

  
    Object.values(recipe.steps).map((step, i) => (
      <div key={i}>
        <h3 className={style.nameh3}>Steps {i + 1}:</h3>
        <p>
          <span className={style.nameh2C}>Number {step.number}:</span> {step.step}
        </p>
      </div>
    ))
  )}
</span> */}



// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useHistory } from "react-router-dom";
// import { getDietTypes, addRecipe } from '../../redux/actions';
// import style from "./Form.module.css";

// function validate(input) {
//     const errors = {};
//     if (!input.name) errors.name = 'Please complete with a recipe name';
//     if (!input.summary) errors.summary = 'Please add some comments about your recipe';
//     if (input.score < 1 || input.score > 100) errors.score = 'The score must be a number between 1 and 100';
//     if (input.healthScore < 1 || input.healthScore > 100) errors.healthScore = 'The score must be a number between 1 and 100';
//     if (!input.steps.length) errors.steps = 'Please detail the steps for your recipe';
//     if (!input.dietTypes.length) errors.dietTypes = 'You must select at least one diet type';
//     return errors;
// }

// export default function AddRecipe() {
//     const dispatch = useDispatch();
//     const dietTypes = useSelector(state => state.dietTypes);
//     const history = useHistory();
//     const [errors, setErrors] = useState({});

//     const [stepNumber, setStepNumber] = useState(1);
//     const [stepText, setStepText] = useState('');
//     const [steps, setSteps] = useState([]);
  
//     const handleAddStep = () => {
//       setSteps([...steps, { number: stepNumber, step: stepText }]);
//       setStepNumber(stepNumber + 1);
//       setStepText('');
//     };

//     const [input, setInput] = useState({
//         name: '',
//         image: '',
//         summary: '',
//         healthScore: '',
//         steps: [],
//         dietTypes: []
//     });

//     useEffect(() => {
//         dispatch(getDietTypes());
//     }, [dispatch]);

//     function handleChange(e) {
//         e.preventDefault();
//         setInput((prevInput) => {
//             const newInput = {
//                 ...prevInput,
//                 [e.target.name]: e.target.value
//             };
//             const validations = validate(newInput);
//             setErrors(validations);
//             return newInput;
//         });
//     };

//     function handleCheckBox(e) {
//         let newArray = input.dietTypes;
//         let find = newArray.indexOf(e.target.value);
        
//         if (find >= 0) {
//             newArray.splice(find, 1)
//         } else {
//             newArray.push(e.target.value)
//         }
        
//         setInput({
//             ...input,
//             dietTypes: newArray
//         });
//         const validations = validate(input);
//         setErrors(validations)
//     }

//     function handleSubmit(e) {
//         e.preventDefault();

//         if (Object.values(errors).length > 0) {
//             alert("Please complete the information required");
//         } else if (
//             input.name === '' && 
//             input.image === '' &&
//             input.summary === '' &&             
//             input.healthScore === '' &&
//             input.steps === '' &&
//             !input.dietTypes.length) {
//             alert("Please complete the form");
//         } else {
//             dispatch(addRecipe(input));
//             alert('New recipe added successfully!')
//             setInput({
//                 name: "",
//                 image: '',
//                 summary: '',                
//                 healthScore: '',
//                 steps: [],
//                 dietTypes: []
//             });
//             history.push('/home');
//         }
//     };
  
    
//     return (
//         <div className={style.addRecipe}>
//             <h1 className={style.msg}>Creat your own recipe!</h1>
//             <form onSubmit={e => handleSubmit(e)}>
//                 <div className={style.form}>
//                     <div className={style.prettierForm}>
//                         <div className={style.nameInput}>
//                             <label className={style.msg}>Name:</label>
//                             <input className={style.input} name="name" type="text" value={input.name} onChange={e => handleChange(e)}/>
//                             {errors.name && (
//                                 <span className={style.errors}>{errors.name}</span>
//                             )}
//                         </div>
//                         <div className={style.nameInput}>
//                             <label className={style.msgs}>Image:</label>
//                             <input name="image" type="text" value={input.image} onChange={e => handleChange(e)}/>
//                             {errors.image && (
//                                 <span className={style.errors}>{errors.image}</span>
//                             )}
//                         </div>
//                         <div className={style.nameInput}>
//                             <label className={style.msgs}>Summary:</label>
//                             <textarea name="summary" type="text" rows="4" cols="30" value={input.summary} onChange={e => handleChange(e)}/>
//                             {errors.summary && (
//                                 <span className={style.errors}>{errors.summary}</span>
//                             )}
//                         </div>
                       
//                         <div className={style.nameInput}>
//                             <label className={style.msgs}>Health Score:</label>
//                             <input name="healthScore" type="number" value={input.healthScore} onChange={e => handleChange(e)}/>
//                             {errors.healthScore && (
//                                 <span className={style.errors}>{errors.healthScore}</span>
//                             )}
//                         </div>





//                         <div className={style.nameInput}>
//                             <label className={style.msgs}>Steps:</label>
//                             <textarea name="steps" type="text" rows="4" cols="40" value={input.steps} onChange={e => handleChange(e)}/>
//                             {errors.steps && (
//                                 <span className={style.errors}>{errors.steps}</span>
//                             )}
//                           <label htmlFor="stepText">Step Text:</label>
//         <input
//           type="text"
//           id="stepText"
//           value={stepText}
//           onChange={(e) => setStepText(e.target.value)}
//         />
//         <br />
  
//         <button type="button" onClick={handleAddStep}>
//           Add Step
//         </button>
  
//         <ul>
//           {steps.map((step) => (
//             <li key={step.number}>
//               Step {step.number}: {step.step}
//             </li>
//           ))}
//         </ul>

//                         </div>






//                     </div>
//                     <div className={style.checkSelect}>
//                         <label className={style.msgs}>Diet Types:</label>
//                         {dietTypes.map(d =>{
//                             return (
//                                 <div key={d} className={style.checks}>
//                                     <label className={style.dietTypes}>{d}</label>
//                                     <input className={style.checks} type="checkbox" name={d} value={d} selected={input.dietTypes.includes(d)} onChange={e => handleCheckBox(e)}/>
//                                 </div>
//                             )
//                         })}
//                         {errors.dietTypes && (
//                             <span className={style.errors}>{errors.dietTypes}</span>
//                         )}
//                     </div>
//                 </div>
//                 <button className={style.submitButton} type="submit">Submit Recipe</button>
//                 <Link to="/home"><button className={style.goBackButton}>Go back</button></Link>
//             </form>
//         </div>



//     )

// };



// export function addRecipe(payload) {
//   return async function(dispatch) {
//       try {
//           var response = await axios.post(`http://localhost:3001/recipes`, payload);
//           return response;
//       } catch (error) {
//           console.log(error)
//       }
//   }
// }


// case ADD_RECIPE:
//   return {
//     ...state,
//   }




{/* <div className="ddsh">
                <h3 className="texts">Steps: </h3>
                <ul className="steps">{Array.isArray(recipeDetails.steps) ? recipeDetails.steps.map(e => {
                    return(
                        <li key={e.number}>{e.step}</li>
                        )
                }) :
                <li>{recipeDetails.steps}</li>
                }</ul>
            </div>
            
            <Link to="/home"><button className="backButton">Go back to recipes</button></Link>
            
        </div> */}



        {/* <div className={style.nameh2B}>
  <h3 className={style.nameh3}>Steps:</h3>
  <select>
    {recipe.steps.map(stepsArr => Array.isArray(stepsArr) && stepsArr.map(step => (
      <option key={step.number} value={step.number}>{`number ${step.number}: ${step.step}`}</option>
    )))}
  </select>
  <h3>este es el de la api</h3>
</div> */}




// const paged = (pageNumber) => {
//   setPage(pageNumber);
//   const quantityRecipesPage = pageNumber * recipesPage;
//   const firstRecipePage = quantityRecipesPage - recipesPage;
//   const recipesToShow = recipes.slice(firstRecipePage, quantityRecipesPage);
//   setRecipes(recipesToShow);
// };


//   const dispatch = useDispatch();
//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await dispatch(getRecipes());
//         setRecipes(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     fetchRecipes();
//   }, [dispatch]);

//   dispatch(getRecipes())
//   .then((response) => {
//     console.log(response.data);
//     if (response.data) {
//       setRecipe(response.data);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// }, [dispatch]);
  
//   return (
//     <div className={style.api}>
//         <Paginated allRecipes={recipes.length} recipesPage={recipesPage} 
//         paged={paged}
//         />
//         <RecipesFront recipes={showRecipesPage}/>
        
//      </div>
//  )

//  return (
//   <div className={style.api}>
//     {recipes && (
//       <>
//         <Paginated allRecipes={recipes.length} recipesPage={recipesPage} setPage={setPage} />
//         <RecipesFront recipes={showRecipesPage} />
//       </>
//     )}
//   </div>
// );



// export default function Home() {
//   const recipes = useSelector(state => state.recipes);
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true); // variable booleana para verificar si los datos están listos
  
//   const [page, setPage] = useState(1);
//   const [recipesPage, setRecipesPage] = useState(9);
  
//   useEffect(() => {          
//     async function fetchData() {
//       setLoading(true); // establecer la variable loading en true antes de hacer la petición
//       await dispatch(getRecipes());
//       setLoading(false); // establecer la variable loading en false cuando los datos hayan sido cargados
//     }
//     fetchData();
//   }, [dispatch]);
  
//   const lastRecipeIndex = page * recipesPage;
//   const firstRecipeIndex = lastRecipeIndex - recipesPage;
//   const showRecipesPage = recipes.slice(firstRecipeIndex,lastRecipeIndex);

//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };
  
//   if (loading) {
//     return <div>Loading...</div>; // renderizar un mensaje de carga mientras los datos se están cargando
//   }
  
//   return (
//     <div className={style.api}>
//       <Paginated totalRecipes={recipes.length} allRecipes={recipesPage} paged={handlePageChange} />
//       <RecipesFront recipesPage={showRecipesPage} />
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import style from "./Paginated.module.css";

// export default function Paginated({ totalRecipes, allRecipes, handleClick }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pages, setPages] = useState([]);

//   useEffect(() => {
//     const totalPages = Math.ceil(totalRecipes / allRecipes);
//     const newPages = Array.from({ length: totalPages }, (_, i) => i + 1);
//     setPages(newPages);
//   }, [totalRecipes, allRecipes]);

//   const handlePageClick = (page) => {
//     setCurrentPage(page);
//     handleClick(page);
//   };

//   return (
//     <div>
//       {pages.length <= 1 ? (
//         <></>
//       ) : (
//         <nav className={style.pagination}>
//           <ul className={style.pages}>
//             {pages.map((page, index) => (
//               <li className={style.page} key={index}>
//                 <button
//                   className={style.pageBtn}
//                   onClick={() => handlePageClick(page)}
//                   style={{ width: "30px" }}
//                 >
//                   {page}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import style from "./Home.module.css";
// import RecipesFront from "../RecipesFront/RecipesFront";
// import Paginated from "../Paginated/Paginated";
// import { getRecipes } from "../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";

// export default function Home() {
//   const recipes = useSelector((state) => state.recipes);
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true); // variable booleana para verificar si los datos están listos
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recipesPerPage, setRecipesPerPage] = useState(9);

//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true); // establecer la variable loading en true antes de hacer la petición
//       await dispatch(getRecipes());
//       setLoading(false); 
//      }
//     fetchData();
//   }, [dispatch]);

//   const indexOfLastRecipe = currentPage * recipesPerPage;
//   const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
//   const currentRecipes = recipes.slice(
//     indexOfFirstRecipe,
//     indexOfLastRecipe
//   );

//   const handleClick = (page) => {
//     setCurrentPage(page);
//   };

//   if (loading) {
//     return <div>Loading...</div>; 



// const cleanArray = async (arr) => {
//   const results = arr.data.results;
//   const totalPages = arr.data.totalPages;
//   const pageSize = arr.data.pageSize;
//   const apiResults = [...results];

//   for (let i = 2; i <= totalPages; i++) {
//     const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&number=${pageSize}&offset=${(i-1)*pageSize}`);
//     apiResults.push(...response.data.results);
//   }

//   return apiResults.map((elem) => ({
//     id: elem.id,
//     name: elem.title,
//     image: elem.image,
//     summary: elem.summary,
//     healthScore: elem.healthScore,
//     steps: elem.analyzedInstructions[0]?.steps.map((e) => ({
//       number: e.number,
//       step: e.step,
//     })),
//     create: false,
//     diets: elem.diets,
//   }));
// };


//  ) : (
//                   <div className={style.nameh2B}>
//                     {recipe.steps.map(stepsArr =>
//                       stepsArr.map(step => (
//                         <>
//                           <h3 className={style.nameh2C}>
//                             number {step.number}:
//                           </h3>{" "}
//                           {step.step}
//                         </>
//                       ))
//                     )}
//                     {recipe.steps.map(
//                       stepsArr =>
//                         Array.isArray(stepsArr) &&
//                         stepsArr.map((step, index) => (
//                           <div key={index}>
//                             <h3 className={style.nameh2C} key={step.number}>
//                               number {step.number}:
//                             </h3>{" "}
//                             {step.step}
//                           </div>
//                         )) 
//                     )}
//                   </div>
//                 )}