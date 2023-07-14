import axios from 'axios';
import {GET_ALL_RECIPES, GET_RECIPE, GET_DIET_TYPES, SEARCH_RECIPE, 
    DIET_TYPE_FILTER, ALPHABETICAL_SORT, SCORE_SORT,FROM_DATA_API,CLEAN_STATE} from './action-type';
    const URL = process.env.REACT_APP_DEPLOYBACK_URL;
export const getRecipes = () =>{

    return async (dispatch) => {
        const response = await axios.get(`${URL}/recipes`)
        const data = response.data;
        return dispatch({
            type: GET_ALL_RECIPES,
            payload:data
        })

    }
}

export const getRecipe = (id) =>{
 
    return async (dispatch) => {
        const response = await axios.get(`${URL}/recipes/${id}`)
        const data = response.data;
        return dispatch({
            type: GET_RECIPE,
            payload:data
        })

    }

}

export function getDietTypes() {
    return async function(dispatch) {
        try{
            const response = await axios.get(`${URL}/diets`);
            const data = response.data;
            return dispatch({
            type: GET_DIET_TYPES, 
            payload: data});
        } catch (error) {
            console.log(error)
        }
    }
}

export function addRecipe(payload) {
    return async function(dispatch) {
      
      try {
        const response = await axios.post(`${URL}/recipes`, payload);
  
        return  dispatch({ type: "ADD_RECIPE", payload: response.data }); // Despacha una acción con la respuesta de la solicitud
      } catch (error) {
        console.log(error)
        }
    };
  }

  export function searchRecipe(name) {
    return async (dispatch) => {
        const response = await axios.get(`${URL}/recipes?name=${name}`)
        const data = response.data;
        return dispatch({
            type: SEARCH_RECIPE,
            payload:data
        })

    }
  }

  export function dietTypeFilter(payload) {
    return {
        type: DIET_TYPE_FILTER,
        payload
    }
};

export function aplhabeticalSort(payload) {
    return {
        type: ALPHABETICAL_SORT,
        payload
    }
};

export function scoreSort(payload) {
    return {
        type: SCORE_SORT,
        payload
    }
}

export function sortFromApiOrData(payload){

    return {
        type: FROM_DATA_API,
        payload
    }
}

export function cleanArrayState(){

    return{
        type: CLEAN_STATE
    
    }
}
