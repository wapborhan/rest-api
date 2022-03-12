import React, { Component } from "react";
import axios from "axios";

export default class AxiosAPi extends Component {
  componentDidMount() {
    //   axios
    //     .get("http://localhost:3001/dishes")
    //     .then((res) => res.data)
    //     .then((data) => console.log(data))
    //     .catch((error) => console.log(error.message));
    //

    // axios
    //   .post("http://localhost:3001/dishes", { name: "Pizza", price: "799" })
    //   .then((res) => console.log(res));

    // axios
    //   .put("http://localhost:3001/dishes/2", {
    //     name: "Chiken Fry",
    //     price: "250",
    //   })
    //   .then((res) => console.log(res));

    axios
      .delete("http://localhost:3001/dishes/4", {})
      .then((res) => console.log(res));
  }

  render() {
    return <div>Axios</div>;
  }
}
