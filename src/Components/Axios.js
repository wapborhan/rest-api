import React, { Component } from "react";
import axios from "axios";

export default class AxiosAPi extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:3001/dishes")
      .then((res) => res.data)
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  }

  render() {
    return <div>Axios</div>;
  }
}
