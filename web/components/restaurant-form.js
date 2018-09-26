import React, { Component } from "react";

class RestaurantForm extends Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true };

    this.addRestaurant = this.addRestaurant.bind(this);
  }
  addRestaurant() {
    this.props.createRestaurant();
    // if (true) {
    //   fetch("http://localhost:4000/restaurants/", { method: "POST" })
    //     .then(res => {
    //       window.etag["restaurants"] = res.headers.get("ETag");
    //       return res.json();
    //     })
    //     .then(res => {
    //       const etag = window.etag["restaurants"];
    //       const newRestaurant = prompt(
    //         `Provide restaurant name [ETag: ${etag}]`
    //       );
    //       return fetch(`http://localhost:4000/restaurants/${res._id}`, {
    // method: "PUT",
    // body: JSON.stringify({ _id: res._id, name: newRestaurant }),
    // headers: {
    //   "If-Match": etag,
    //   "Content-Type": "application/json"
    // }
    //       })
    //         .then(res => res.json())
    //         .then(_ => {
    //           const event = new Event("restaurant updated");
    //           dispatchEvent(event);
    //         });
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       alert("something went wrong");
    //     });
    // }
  }
  render() {
    return (
      <button onClick={this.props.createRestaurant}>Add restaurant</button>
    );
  }
}

export default RestaurantForm;
