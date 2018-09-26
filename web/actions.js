import axios from "axios";

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export function fetchRestaurants(params = "") {
  return {
    type: FETCH_RESTAURANTS,
    payload: { url: `${window.origin}/restaurants/${params}` }
  };
}

export const CREATE_RESTAURANT = "CREATE_RESTAURANT";
export function createRestaurant() {
  return {
    type: CREATE_RESTAURANT,
    payload: { url: `${window.origin}/restaurants/` } //axios.post(`${window.origin}/restaurants/`)
  };
}

export const UPDATE_RESTAURANT = "UPDATE_RESTAURANT";
export function updateRestaurant(id, etag) {
  const name = prompt(`Provide new name:\netag=${etag}`);
  if (name) {
    return {
      type: UPDATE_RESTAURANT,
      payload: {
        url: `${window.origin}/restaurants/${id}`,
        data: JSON.stringify({ id, name }),
        headers: {
          "Content-Type": "application/json"
        }
      }
      // payload: axios({
      //
      //   method: "PUT",
      //

      // })
    };
  }
}
