import React, { Component } from "react";
import Intern from "./internsData";

//Pics
import Kat from "../img/kat.jpg";
import Sid from "../img/sid.jpg";
import Mitch from "../img/ugly.png";
import Yu from "../img/yu.jpg";
import Me from "../img/me.jpg";

import "../App.css";

const headingStyle = {
  fontSize: "4.5em",
  fontWeight: "700",
  fontColor: "white",
  fontFamily: "Raleway, sans-serif",
  color: "white",
  display: "block",
  width: "100%",
  marginTop: "50px",
  marginBottom: '50px'
};

const profilePics = [
  Kat,
  Yu,
  Mitch,
  Sid,
  Me
];

const divStyle = {
    padding: "0",
    marginLeft: "auto",
    marginRight: "auto"
};

const picStyle = {
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
};

const internS = {};

const internH = {
    fontFamily: "Raleway, sans-serif",
    color: "black",
    fontSize: "3.2em",
};

const wrapper = {
  backgroundColor: "white",
  borderRadius: "25px",
  padding: "15px 0px"
};

const black = {
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  padding: '105px 0 0 0',
  margin: '0',
}

const pads = {
  paddingLeft: '15px',
  paddingRight: '15px'
}
let list = [];

const bold = {
  fontWeight: "700"
}
class Interns extends Component {
  set = () => {
    list = Intern.map((i, x) => (
      <div className="col-lg-3 col-md-3 col-sm-6 text-center" key={x}>
        <div style={wrapper}>
          <h1 style={internH}>{i.name}</h1>
          <img style={picStyle} className="img-responsive " src={profilePics[x]} />
          <h3><span style={bold}>Department:</span> {i.position}</h3>
          <h3><span style={bold}>School:</span> {i.school}</h3>
          <h3><span style={bold}>Hometown:</span> {i.homeTown}</h3>
          <h3>{i.random}</h3>
        </div>
      </div>
    ));
    this.setState({ data: list });
  };
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    this.set();
  }

  render() {
    return (
      <div style={black} className="container-fluid text-center">
        <div className="row">
          <h1 className="text-center" style={headingStyle}>
            Meet The Interns
          </h1>
        </div>
        <div style={pads} className="row text-center" id="interns">{this.state.data}</div>
      </div>
    );
  }
}

export default Interns;
