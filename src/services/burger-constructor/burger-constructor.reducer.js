import BURGER_CONSTRUCTOR_ACTION_TYPES from './burger-constructor.types';

export const BURGER_CONSTRUCTOR_INITIAL_STATE = {
  bun: null,
  ingredients: [],
};

export const burgerConstructorReducer = (state = BURGER_CONSTRUCTOR_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case BURGER_CONSTRUCTOR_ACTION_TYPES.ADD_INGREDIENT:
      return {...state, ingredients: [...state.ingredients, payload]};
    case BURGER_CONSTRUCTOR_ACTION_TYPES.ADD_BUN:
      return {...state, bun: payload};
    case BURGER_CONSTRUCTOR_ACTION_TYPES.DELETE_INGREDIENT:
      {
        const updatedIngredients = state.ingredients.filter((ingredient) => {return (ingredient.id !== payload.id)});
        return {...state, ingredients: updatedIngredients};
      };
    case BURGER_CONSTRUCTOR_ACTION_TYPES.REORDER:
      {
        const updatedIngredients = [...state.ingredients];
        updatedIngredients.splice(payload.to, 0, updatedIngredients.splice(payload.from, 1)[0]);
        console.log(updatedIngredients);
        return {...state, ingredients: updatedIngredients};
      }
    case BURGER_CONSTRUCTOR_ACTION_TYPES.FREE:
      return {bun: null, ingredients: []};
    default:
      return state;
  }
};


