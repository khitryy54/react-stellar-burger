import INGREDIENT_DETAILS_ACTION_TYPES from './ingredient-details.types';

export const INGREDIENT_DETAILS_INITIAL_STATE = {
  ingredient: null,
};

export const ingredientDetailsReducer = (state = INGREDIENT_DETAILS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case INGREDIENT_DETAILS_ACTION_TYPES.SET_INGREDIENT:
      return { ...state, ingredient: payload };
    default:
      return state;
  }
};
