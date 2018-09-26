import React, { Component } from "react";
import ReactDOM from "react-dom";

import Application from "./containers/Application";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import todoApp, { restaurantReducer } from "./reducers";

import { compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import { combineEpics, createEpicMiddleware } from "redux-observable";
import {
  fetchRestaurantEpic,
  createRestaurantEpic
} from "./epics/restaurant-epic";
// import ping, { pingEpic } from './ping';
// import users, { fetchUserEpic } from './users';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

export const rootEpic = combineEpics(fetchRestaurantEpic, createRestaurantEpic);

// epicMiddleware.run(rootEpic);

// export const rootReducer = combineReducers({
//   ping,
//   users
// });

const middleware = applyMiddleware(
  epicMiddleware,
  // promise(),
  // thunk,
  createLogger()
);
const store = createStore(
  combineReducers({ todoApp, restaurantReducer }),
  composeEnhancers(middleware)
);
epicMiddleware.run(rootEpic);
window.etag = {};

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("application")
);

// const restaurantListingComponent = Object.create(component, {
//   getRestaurants() {
//     return fetch(`${location.origin}/restaurants`).then(data => data.json());
//   },
//   render() {
//     return this.getRestaurants()
//       .then(restaurants => {
//         if (restaurants.lenght > 0) {
//           return `
//           <ul>
//             ${restaurants.map(r => `<li>${r}</li>`)}
//           </ul>
//           `;
//         } else {
//           return "There are no restaurants";
//         }
//       })
//       .catch(err => `Data can't be fetch! 🚨`);
//   }
// });

// const restaurantFormComponent = Object.create(component, {
//   setListeners() {},
//   render() {
//     console.log("rendering restaurant form");
//     return new Promise((resolve, reject) => {
//       resolve(`
//         <button class="restaurant-form-add-button">Add restaurant</button>
//       `);
//     });
//   }
// });

// restaurantListingComponent.init("restaurants");
// restaurantFormComponent.init("restaurant-form");
