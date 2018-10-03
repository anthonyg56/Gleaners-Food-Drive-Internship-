import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FactTile from './components/FactTile';
import Nav from "./components/nav.jsx";
import Home from "./components/Home"
import Interns from './components/interns';
import WH from './img/worldHunger.jpg';
import './scss/style.css';

const wallpaper = {
  height: '100vh',
  backgroundImage: WH,
  padding: '0',
  margin: '0'
}

const black = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '0',
  margin: '0',
  height: '100',
}


class App extends Component {

  load = (x) => {
    switch (x) {
      case 'Facts':
        this.setState({
          data: <FactTile />
        });
        break;
      case 'Meet':
        this.setState({
          data: <Interns />
        });
        break;
      case 'Home':
        this.setState({
          data: <Home />
        });
        break;
      case 'Nav':
        this.setState({
          nav: <Nav load={this.load.bind(this)} />
        });
        break;
    }
  }

  constructor() {
    super();
    this.state = (
      {
        data: null,
        nav: <Nav load={this.load.bind(this)}/>
      }
    )
  }

  componentWillMount(){
    this.setState({
      data: <Home/>
    })
  }
  render() {
    return (
      <div className="App">
        <div style={wallpaper} id="wallpaper">
          <div style={black} id="wrapper">
            {this.state.nav}
            <ReactCSSTransitionGroup
              transitionName="main"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}>
              {this.state.data}
            </ReactCSSTransitionGroup>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
