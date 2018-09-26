// import { VisibilityFilters } from './actions'​
const initialState = {
  // visibilityFilter: VisibilityFilters.SHOW_ALL,
  // todos: []
};

export default function todoApp(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  return state;
}

export function restaurantReducer(
  state = {
    fetching: false
  },
  action
) {
  if (action.type === "FETCH_RESTAURANTS_PENDING") {
    return { ...state, fetching: true };
  }

  if (action.type === "FETCH_RESTAURANTS_FULFILLED") {
    const list = action.payload;
    // const etag = action.payload.headers.etag;
    return { ...state, fetching: false, list, updateRequired: false };
  }

  if (action.type === "CREATE_RESTAURANT_PENDING") {
    return { ...state, fetching: true };
  }

  if (action.type === "CREATE_RESTAURANT_FULFILLED") {
    // const etag = action.payload.headers.etag;
    return { ...state, fetching: false, updateRequired: true, etag };
  }

  return state;
}
