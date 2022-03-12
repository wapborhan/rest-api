import React, { Component } from "react";
import fetch from "cross-fetch";

export default class FetchApi extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  }
  render() {
    return <div>FetchApi</div>;
  }
}
