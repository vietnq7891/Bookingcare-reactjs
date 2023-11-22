import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return <div>hello </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
