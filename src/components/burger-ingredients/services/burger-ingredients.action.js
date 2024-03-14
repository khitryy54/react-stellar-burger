import BURGER_INGREDIENTS_ACTION_TYPES from './burger-ingredients.types';

import { createAction } from '../../../utils/reducer.utils';
import { getIngredients } from '../../../utils/api';

export const fetchIngredientsStart = () => 
  createAction(BURGER_INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_START);

export const fetchIngredientsSuccess = (ingredients) => 
  createAction(BURGER_INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_SUCCESS, ingredients);

export const fetchIngredientsFailure = (error) => 
  createAction(BURGER_INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_FAILURE, error);

export const fetchIngredientsAsync = () => async (dispatch) => {
  dispatch(fetchIngredientsStart());
  try {
    const data = await getIngredients(); 
    dispatch(fetchIngredientsSuccess(data.data));
  } catch(error) {
    dispatch(fetchIngredientsFailure(error));
  }
}

export const ingredientsAdd = (ingredient) => 
  createAction(BURGER_INGREDIENTS_ACTION_TYPES.ADD_INGREDIENT, ingredient);

export const ingredientsDelete = (ingredient) => 
  createAction(BURGER_INGREDIENTS_ACTION_TYPES.DELETE_INGREDIENT, ingredient);
   