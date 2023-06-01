import RecipeFront from "../RecipeFront/RecipeFront"
import style from "./RecipesFront.module.css";



const RecipesFront = ({recipesPage}) => {
  

  return (
    <div className={style.divContenedorDos}>
    
        {recipesPage.map((recipe, index) => {
        return (
          <RecipeFront
            key={index}
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            typeDiets={recipe.diets}
          />
        );
      })}
    </div>
  );
};

export default RecipesFront;
