import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStaffs } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/nhan-vien"
            component={() => (
              <StaffList
                staffs={this.props.staffs}
                staffLoading={this.props.staffs.isLoading}
                staffsErrMess={this.props.staffs.errmess}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
