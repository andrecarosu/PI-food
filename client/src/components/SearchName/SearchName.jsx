import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../../redux/actions";
import style from './SearchName.module.css'; 

export default function SearchName() {
    const dispatch = useDispatch();
    const [inputNameRecipe,setInputNameRecipe] = useState('');
    
    function handleChange(event){
        event.preventDefault();
        setInputNameRecipe(event.target.value)
    }

    function handleSubmit(event) {
        try {
            dispatch(searchRecipe(inputNameRecipe));
            
        } catch (error) {            
            return error;
        }

        setInputNameRecipe('')
        
    };

   

    return (
        <div className={style.search}>
            <input type="text" className={style.searchInput} placeholder="Search recipe by name" value={inputNameRecipe} onChange={event => handleChange(event)}/>
            <button className={style.searchButton} type="submit" onClick={event => handleSubmit(event)}>Search</button>
        </div>
    )
    
}