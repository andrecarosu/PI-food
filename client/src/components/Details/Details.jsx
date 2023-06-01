import { useSelector, useDispatch } from "react-redux";
import { getRecipe, cleanArrayState } from "../../redux/actions";
import style from "./Details.module.css";
import { useEffect } from "react";

const Details = (props) => {
  const recipeDetails = useSelector(state => state.recipeDetail);
  console.log(recipeDetails);
  const dispatch = useDispatch();
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getRecipe(id));
    return () => {
      dispatch(cleanArrayState())
    }
  }, [dispatch,id]);



  return (
    <div>
            
      {recipeDetails.map((recipe, index) => {
        return (
          <div key={index} className={style.divContenedor3}>

            <div className={style.divContenedor2}>
              <img
                className={style.divContenedorCardImg}
                src={recipe.image}
                alt={recipe.name}
              />
              <h1 className={style.nameh2}>{`Name: ${recipe.name}`}</h1>
              <h1 className={style.nameh2}>{`Id: ${recipe.id}`}</h1>
              <span className={style.nameh2B}>
                <h3 className={style.nameh4}>Type Diets:</h3>
               <h4 className={style.h4}> 
               {recipe.diets.join(", ")}
                </h4>
              </span>
              <span className={style.nameh2}>{`Health Score:  ${
                recipe.healthScore && recipe.healthScore
              }`}</span>
            </div>

              <div className={style.divContenedor2}>
              <span
                className={style.nameh2B}
                dangerouslySetInnerHTML={{
                  __html: ` <h3>Summary: <br></h3>  ${recipe.summary}`,
                }}
              ></span>
              </div>
             

              <div >
                <h3 className={style.nameh4}>Steps:</h3>
                {Array.isArray(recipe.steps) 
                &&
                recipe.steps.every(step => step.number && step.step) ? (
                    
                  recipe.steps.map((step, i) => (
                    <div key={i} className={style.divContenedor4}>
                      
                      
                        <h3 className={style.nameh2C}>
                          Step {step.number}:
                        </h3>{" "}
                        {step.step}                          
                    </div>
                  ))
                ) : (
                  <div >
                    {recipe.steps.map(
                      stepsArr =>
                        Array.isArray(stepsArr) &&
                        stepsArr.map((step, index) => (
                          <div key={index} className={style.divContenedor4}>
                            <h3 className={style.nameh2C} key={step.number}>
                              Step {step.number}:
                            </h3>{" "}
                            {step.step}
                          </div>
                        ))
                    )}
                  </div>
                )}
              </div>
           
            
          </div>
        );
      })}
    </div>
  );
};

export default Details;
