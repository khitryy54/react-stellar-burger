import { combineReducers } from 'redux';

import { burgerConstructorReducer } from '../components/burger-constructor/services/burger-constructor.reducer';
import { burgerIngredientsReducer } from '../components/burger-ingredients/services/burger-ingredients.reducer';
import { ingredientDetailsReducer } from '../components/ingredient-details/services/ingredient-details.reducer';
import { orderDetailsReducer } from '../components/order-details/services/order-details.reducer';

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  burgerIngredients: burgerIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer
});
