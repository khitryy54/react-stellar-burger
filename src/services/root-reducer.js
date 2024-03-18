import { combineReducers } from 'redux';

import { burgerConstructorReducer } from './burger-constructor/burger-constructor.reducer';
import { burgerIngredientsReducer } from './burger-ingredients/burger-ingredients.reducer';
import { ingredientDetailsReducer } from './ingredient-details/ingredient-details.reducer';
import { orderDetailsReducer } from './order-details/order-details.reducer';

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  burgerIngredients: burgerIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer
});
