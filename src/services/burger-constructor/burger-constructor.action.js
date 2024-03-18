import BURGER_CONSTRUCTOR_ACTION_TYPES from './burger-constructor.types';

import { createAction } from '../../utils/reducer.utils';

export const constructorAdd = (ingredient) => {
  if (ingredient.type !== 'bun') {
    const random = crypto.randomUUID();
    return createAction(BURGER_CONSTRUCTOR_ACTION_TYPES.ADD_INGREDIENT, {...ingredient, id: random});
  } else if (ingredient.type === 'bun')  {
    return createAction(BURGER_CONSTRUCTOR_ACTION_TYPES.ADD_BUN, ingredient);
  }
}

export const constructorDelete = (toDelete) => {
  return createAction(BURGER_CONSTRUCTOR_ACTION_TYPES.DELETE_INGREDIENT, toDelete)
}

export const constructorReorder = (toFrom) => {
  return createAction(BURGER_CONSTRUCTOR_ACTION_TYPES.REORDER, toFrom)
}

export const constructorFree = () => {
  return createAction(BURGER_CONSTRUCTOR_ACTION_TYPES.FREE)
}