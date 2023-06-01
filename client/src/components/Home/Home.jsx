import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import RecipesFront from "../RecipesFront/RecipesFront";
import Paginated from "../Paginated/Paginated";
import SearchName from "../SearchName/SearchName";

import {
  getRecipes,
  dietTypeFilter,
  aplhabeticalSort,
  scoreSort,
  sortFromApiOrData,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const recipes = useSelector(state => state.recipes);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // variable booleana para verificar si los datos están listos

  const [page, setPage] = useState(1);
  const [recipesPage, setRecipesPage] = useState(9);
  const [order, setOrder] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     setLoading(true); // establecer la variable loading en true antes de hacer la petición
  //     await dispatch(getRecipes());
  //     setLoading(false); // establecer la variable loading en false cuando los datos hayan sido cargados
  //   }
  //   fetchData();
  // }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // establecer la variable loading en true antes de hacer la petición
      setTimeout(async () => {
        await dispatch(getRecipes());
        setLoading(false); // establecer la variable loading en false cuando los datos hayan sido cargados
      }, 2000); // esperar 2 segundos antes de obtener los datos
    }
    fetchData();
  }, [dispatch]);
  const lastRecipeIndex = page * recipesPage;
  const firstRecipeIndex = lastRecipeIndex - recipesPage;
  const showRecipesPage = recipes.slice(firstRecipeIndex, lastRecipeIndex);
  //   const paged = function(pageNumber) {
  //     setPage(pageNumber)
  // };
  const handleClick = page => {
    setPage(page);
  };

  if (loading) {
    return (
      <div >
        <div className={style.loading}>Loading...</div>
        <img className={style.loadingImg} src="/cocinando-en-wok.gif" alt="" />
              
      </div> 
    );
  }

  function handleDietTypeFilter(e) {
    e.preventDefault();
    const value = e.target.value;

    dispatch(dietTypeFilter(value));

    setPage(1);
    setOrder(`Order ${value}`);
  }

  function handleForDataOrApiSort(e) {
    e.preventDefault();
    const select = e.target.value;

    dispatch(sortFromApiOrData(select));

    setPage(1);
    setOrder(`Order ${select}`);
  }

  function handleAlphabeticalSort(e) {
    e.preventDefault();
    dispatch(aplhabeticalSort(e.target.value));
    setPage(1);
    setOrder(`Order ${e.target.value}`);
  }

  function handleScoreSort(e) {
    e.preventDefault();
    dispatch(scoreSort(e.target.value));
    setPage(1);
    setOrder(`Order ${e.target.value}`);
  }

  return (
    <div>
      <div className={style.bottomUno}>
      <nav className={style.bottom}>
        <SearchName />
          
        <select
  className={style.select}
  name="origin"
  defaultValue="origin"
  onChange={e => handleForDataOrApiSort(e)}
>
  <option disabled value="origin">
    Origin
  </option>
  <option value="All">All</option>
  <option value="data">Data</option>
  <option value="api">Api</option>
</select>

          <label className="filters">Sort:</label>
          <select
            className={style.select}
            name="alphabetical"
            onChange={e => handleAlphabeticalSort(e)}
            defaultValue="default"
          >
            {/* onChange={e => handleAlphabeticalSort(e)} */}
            <option disabled value="default">
              Alphabetical
            </option>
            <option value="atoz">A to Z</option>
            <option value="ztoa">Z to A</option>
          </select>
          <select
            className={style.select}
            name="numerical"
            onChange={e => handleScoreSort(e)}
            defaultValue="default"
          >
           <option disabled value="default">Score</option>
            <option value="asc">From Min to Max</option>
            <option value="desc">From Max to Min</option>
            </select> 
          <label className="filters">Diet Types:</label>
          <select
            className={style.select}
            name="diets"
            defaultValue="default"
            onChange={e => handleDietTypeFilter(e)}
          >
            {/* onChange={e => handleDietTypeFilter(e)} */}
            <option disabled value="default">
              Select...
            </option>
            <option value="All">All</option>
            <option value="gluten free">Gluten Free</option>
            <option value="ketogenic">Keto</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="lacto ovo vegetarian">Lacto-Ovo-Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="paleolithic">Paleo</option>
            <option value="primal">Primal</option>
            <option value="fodmap friendly">Fodmap Friendly</option>
            <option value="whole 30">Whole30</option>
            <option value="dairy free">Dairy Free</option>
          </select>        
      </nav>
      </div>
      {recipes && (
        <>
          <div></div>
          <div>
            <RecipesFront recipesPage={showRecipesPage} />
          </div>
        </>
      )}
      <div className={style.bottom3}>
      <Paginated
          totalRecipes={recipes.length}
          allRecipes={recipesPage}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
