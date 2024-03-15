import ORDER_DETAILS_ACTION_TYPES from './order-details.types';

export const ORDER_DETAILS_INITIAL_STATE = {
  orderNumber: null,
  isLoading: false,
  error: null
};

export const orderDetailsReducer = (state = ORDER_DETAILS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch(type) {
    case ORDER_DETAILS_ACTION_TYPES.CREATE_ORDER_START:
      return {...state, isLoading: true};
    case ORDER_DETAILS_ACTION_TYPES.CREATE_ORDER_SUCCESS:
      return {...state, orderNumber: payload, isLoading: false};
    case ORDER_DETAILS_ACTION_TYPES.CREATE_ORDER_FAILURE:
      return {...state, error: payload, isLoading: false};
    default: 
      return state;
  }
};


