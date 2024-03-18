import ORDER_DETAILS_ACTION_TYPES from './order-details.types';

import { createAction } from '../../utils/reducer.utils';
import { createOrder } from '../../utils/api';

export const createOrderStart = () => 
  createAction(ORDER_DETAILS_ACTION_TYPES.CREATE_ORDER_START);

export const createOrderSuccess = (orderNumber) => 
  createAction(ORDER_DETAILS_ACTION_TYPES.CREATE_ORDER_SUCCESS, orderNumber);

export const createOrderFailure = (error) => 
  createAction(ORDER_DETAILS_ACTION_TYPES.CREATE_ORDER_FAILURE, error);

export const createOrderAsync = (ingredients) => async (dispatch) => {
  dispatch(createOrderStart());
  try {
    const data = await createOrder(ingredients); 
    dispatch(createOrderSuccess(data.order.number));
  } catch(error) {
    dispatch(createOrderFailure(error));
  }
}


  