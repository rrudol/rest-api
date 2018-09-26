import React, { Component } from "react";

import RestaurantListing from "../components/restaurant-listing";
import RestaurantForm from "../components/restaurant-form";
import { connect } from "react-redux";

import {
  fetchRestaurants,
  createRestaurant,
  updateRestaurant
} from "../actions";

class Application extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }
  render() {
    if (this.props.updateRequired) this.props.fetchRestaurants();
    return (
      <div className="application-container">
        <RestaurantListing
          restaurants={this.props.restaurants}
          fetching={this.props.fetching}
          edit={this.props.updateRestaurant}
          etag={this.props.etag}
        />
        <RestaurantForm createRestaurant={this.props.createRestaurant} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  const restaurantState = store.restaurantReducer;
  return {
    restaurants: restaurantState.list,
    fetching: restaurantState.fetching,
    updateRequired: restaurantState.updateRequired,
    etag: restaurantState.etag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: _ => {
      dispatch(fetchRestaurants());
    },
    createRestaurant: _ => {
      dispatch(createRestaurant());
    },
    updateRestaurant: (id, etag) => {
      dispatch(updateRestaurant(id, etag));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
