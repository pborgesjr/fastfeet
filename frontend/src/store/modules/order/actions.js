export function showOrderRequest(id) {
  return {
    type: '@order/SHOW_REQUEST',
    payload: { id },
  };
}

export function showFormattedOrder(id) {
  return {
    type: '@order/SHOW_FORMATTED_REQUEST',
    payload: { id },
  };
}

export function showOrderSuccess(data) {
  return {
    type: '@order/SHOW_SUCCESS',
    payload: { data },
  };
}

export function updateOrderRequest(id, data) {
  return {
    type: '@order/UPDATE_REQUEST',
    payload: { id, data },
  };
}

export function updateOrderSuccess() {
  return {
    type: '@order/UPDATE_SUCCESS',
  };
}

export function orderFailure() {
  return {
    type: '@order/FAILURE',
  };
}
