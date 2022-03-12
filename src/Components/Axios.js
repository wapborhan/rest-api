import React, { Component } from "react";
import axios from "axios";

export default class AxiosAPi extends Component {
  state = {
    dishes: null,
    errMess: null,
  };
  componentDidMount() {
    console.log("Did Mount: ", this.state);
    axios
      .get("http://localhost:3001/dishes")
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          dishes: data,
        });
      })
      .catch((error) => {
        this.setState({
          errMess: error.message,
        });
      });
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

    // axios
    //   .delete("http://localhost:3001/dishes/4", {})
    //   .then((res) => console.log(res)).catch((error) => {
    //   this.setState({
    //     errMess: error.message,
    //   });
    // });
  }

  componentDidUpdate() {
    console.log("Did Update: ", this.state);
  }

  render() {
    return <div>Axios</div>;
  }
}
