import React, { Component } from "react";
import { connect } from "react-redux";

class RestaurantListing extends Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true };
    addEventListener("restaurant added", this.fetchRestaurants.bind(this));
    addEventListener("restaurant updated", this.fetchRestaurants.bind(this));
  }
  fetchRestaurants() {
    fetch(`${location.origin}/restaurants`)
      .then(res => {
        window.etag["restaurants"] = res.headers.get("ETag");
        return res.json();
      })
      .then(restaurants => {
        this.setState({ restaurants, fetching: false });
      });
  }
  componentDidMount() {
    this.fetchRestaurants();
  }
  render() {
    console.log(this.props.etag);
    // console.log(this.state);
    if (this.props.fetching) {
      return <p>Data is fetching</p>;
    }
    if (!this.props.restaurants || this.props.restaurants.lenght > 0) {
      return <p>No restaurant found</p>;
    }
    return this.props.restaurants.map(restaurant => (
      <li key={restaurant._id}>
        <strong>{restaurant.name || "PROVIDE RESTAURANT NAME"}</strong>
        <button
          onClick={() => this.props.edit(restaurant._id, this.props.etag)}
        >
          Edit
        </button>
      </li>
    ));
  }
}

export default RestaurantListing;
