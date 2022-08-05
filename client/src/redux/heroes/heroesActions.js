import {GET_HEROES_CLEAR, GET_HEROES_FAILURE, GET_HEROES_SUCCESS} from "./heroesType";
import axios from "axios";

export const getHeroesSuccess = heroes => {
    return {
        type: GET_HEROES_SUCCESS,
        payload: heroes
    }
}

export const getHeroesFailure = error => {
    return {
        type: GET_HEROES_FAILURE,
        payload: error
    }
}


export const getHeroesClear = () => {
    return {
        type: GET_HEROES_CLEAR
    }
}

export const getHeroes = () => {
    return (dispatch) => {
        axios.get("http://localhost:7777/heroes", {
            headers: {"Content-Type": "application/json"}
        }).then(res => {
            dispatch(getHeroesSuccess(res.data));
        }).catch(error => {
            dispatch(getHeroesFailure(error.message));
        });
    }
}
