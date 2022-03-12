import React, { Component } from "react";
import AxiosAPi from "./Axios";
// import FetchApi from "./FetchApi";

export default class MainComponent extends Component {
  render() {
    return (
      <div>
        {/* <FetchApi /> */}
        <AxiosAPi />
      </div>
    );
  }
}
