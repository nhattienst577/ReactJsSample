import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle } from "reactstrap";
import Loading from "./LoadingComponent";

function RenderStaffItem({ staff }) {
  return (
    <Link to={`nhan-vien/${staff.id}`}>
      <Card>
        <CardImg width="100%">
          src={staff.image} alt={staff.name}
        </CardImg>
        <CardTitle>{staff.name}</CardTitle>
      </Card>
    </Link>
  );
}

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameF: "",
    };
  }

  render() {
    const staffList = this.props.staffs.staffs
      .filter((val) => {
        if (this.state.nameF === "") return val;
        else if (
          val.name.toLowerCase().includes(this.state.nameF.toLowerCase())
        )
          return val;
        return 0;
      })
      .map((val) => {
        return (
          <div>
            <RenderStaffItem staff={val} />
          </div>
        );
      });
    if (this.props.staffs.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.staffs.errmess) {
      return (
        <div className="container">
          <div className="row">
            <p>{this.props.staffs.errmess}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">{staffList}</div>
        </div>
      );
    }
  }
}

export default StaffList;
