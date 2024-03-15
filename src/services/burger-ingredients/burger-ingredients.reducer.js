import BURGER_INGREDIENTS_ACTION_TYPES from './burger-ingredients.types';

export const BURGER_INGREDIENTS_INITIAL_STATE = {
  ingredients: [],
  isLoading: false,
  error: null
};

export const burgerIngredientsReducer = (state = BURGER_INGREDIENTS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch(type) {
    case BURGER_INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_START:
      return {...state, isLoading: true};
    case BURGER_INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_SUCCESS:
      return {...state, ingredients: payload, isLoading: false};
    case BURGER_INGREDIENTS_ACTION_TYPES.FETCH_INGREDIENTS_FAILURE:
      return {...state, error: payload, isLoading: false};
    case BURGER_INGREDIENTS_ACTION_TYPES.ADD_INGREDIENT:
      {
        let updatedIngredients = [];
        if (payload.type === 'bun') {
          updatedIngredients = state.ingredients.map((ingredient) => {
            if (ingredient._id === payload._id) {
              return {...ingredient, count: 2};
            } else if (ingredient.type === 'bun') {
              return {...ingredient, count: 0};
            } else {
              return {...ingredient};
            }
          });
        } else {
          updatedIngredients = state.ingredients.map((ingredient) => {
            if (ingredient._id === payload._id) {
              return {...ingredient, count: ingredient.count ? (ingredient.count + 1) : 1};
            } else {
              return {...ingredient};
            }
          });
        } 
        return {...state, ingredients: updatedIngredients};
      }
    case BURGER_INGREDIENTS_ACTION_TYPES.DELETE_INGREDIENT:
      { 
        const updatedIngredients = state.ingredients.map((ingredient) => {
          if (ingredient._id === payload._id) {
            return {...ingredient, count: (ingredient.count >= 1) ? (ingredient.count - 1) : 0};
          } else {
            return {...ingredient};
          }
        });
        return {...state, ingredients: updatedIngredients};
      }
    default: 
      return state;
  }
}
  
  
