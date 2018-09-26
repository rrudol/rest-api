import { ofType } from "redux-observable";
import { of } from "rxjs";
import { tap, map, catchError, merge, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import {
  FETCH_RESTAURANTS,
  CREATE_RESTAURANT,
  UPDATE_RESTAURANT
} from "../actions";

const handleRequest = action => {
  return [
    map(payload => ({ type: action.type + "_FULFILLED", payload })),
    catchError(error =>
      of({
        type: action.type + "_REJECTED",
        payload: error.xhr.response,
        error: true
      })
    )
  ];
};

const fetch = action => {
  return of({ type: action.type + "_PENDING" }).pipe(
    merge(ajax.getJSON(action.payload.url).pipe(...handleRequest(action)))
  );
};

const post = action => {
  return of({ type: action.type + "_PENDING" }).pipe(
    merge(
      ajax
        .post(action.payload.url, action.payload.body, action.payload.headers)
        .pipe(...handleRequest(action))
    )
  );
};

const put = action => {
  return of({ type: action.type + "_PENDING" }).pipe(
    merge(
      ajax
        .put(action.payload.url, action.payload.body, action.payload.headers)
        .pipe(...handleRequest(action))
    )
  );
};

export const fetchRestaurantEpic = (action$, store) =>
  action$.pipe(
    ofType(FETCH_RESTAURANTS),
    mergeMap(action => fetch(action))
  );

export const createRestaurantEpic = (action$, store) =>
  action$.pipe(
    ofType(CREATE_RESTAURANT),
    mergeMap(action => post(action))
  );

export const updateRestaurantEpic = (action$, store) =>
  action$.pipe(
    ofType(UPDATE_RESTAURANT),
    map(action => {
      const request = fetch(action.url);
      return {
        ...action,
        headers: { ...action.headers, "If-Match": request.headers.etag }
      };
    }),
    mergeMap(action => put(action))
  );
