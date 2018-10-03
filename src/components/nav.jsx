import React, { Component } from "react";

const navStyle = {
    fontSize: '50px',
    cursor: 'pointer',
    fontWeight: "700",
    fontColor: "white",
    fontFamily: "Raleway, sans-serif",
    color: "white",
    width: "100%",
}

const sideStyle = {
    height: '100%',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    backgroundColor: '#111',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px'
}

const close = {
    position: 'absolute',
    top: '0',
    right: '25px',
    fontSize: '36px',
    marginLeft: '50px',
    cursor: 'pointer'
}

const li = {
    padding: '8px 8px 8px 32px',
    textDecoration: 'none',
    fontSize: '25px',
    color: 'white',
    display: 'block',
    transition: '0.3s',
    cursor: 'pointer'
}

const button = {
    position: 'absolute',
    float: 'left',
    paddingLeft: '35px',
    paddingTop: '45px',
    display: 'block'
}

class Nav extends Component {
    newNav = () => {
        return (
            <div style={sideStyle} id="mySidenav" className="sidenav">
                <span className="closebtn" style={close} onClick={() => this.closeNav()} >&times;</span>
                <span className="li" onClick={() => this.update('Home')} style={li}>Home</span>
                <span className="li" onClick={() => this.update('Meet')} style={li}>Meet The Interns</span>
                <span className="li" onClick={() => this.update('Facts')} style={li}>Random Facts</span>
            </div>
        )
    }

    open = () => {
        return (
            <span style={navStyle} onClick={() => this.openNav()}>&#9776; Open</span>
        )
    }

    openNav = () => {
        this.setState({
            data: this.newNav()
        })
    }

    closeNav = () => {
        this.setState({
            data: this.open()
        })
    }

    update = (x) => {
        this.closeNav();
        this.props.load(x);
    }
    constructor() {
        super();
        this.state = {
            data: this.open()
        }
    }

    componentWillMount() {
        this.closeNav();
    }
    render() {
        return (
            <div style={button} id="open">
                {this.state.data}
            </div>
        );
    }
}

export default Nav;