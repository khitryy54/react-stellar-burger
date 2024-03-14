import INGREDIENT_DETAILS_ACTION_TYPES from './ingredient-details.types';
import { createAction } from '../../../utils/reducer.utils';

export const setIngredientModal = (ingredient) =>
  createAction(INGREDIENT_DETAILS_ACTION_TYPES.SET_INGREDIENT, ingredient);