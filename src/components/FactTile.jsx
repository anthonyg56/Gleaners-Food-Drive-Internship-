import React, { Component } from 'react';
import Facts from "../facts.json";
import '../App.css';

const headingStyle = {
    fontSize: '3.75em',
    fontWeight: '700',
    fontColor: 'white',
    float: 'left',
    fontFamily: 'Raleway, sans-serif',
    color: 'white',
    display: 'block',
    width: '100%'
  }

  const textStyle = {
    fontWeight: '100',
    color: 'white',
    fontFamily: 'Raleway, sans-serif',
    display: 'block'
  }

  const factsStyle = {
    /*position: 'absolute',
    margin: 'auto',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '50%',
    height: '50%'*/
    fontSize: "4.5em",
  fontWeight: "700",
  fontColor: "white",
  fontFamily: "Raleway, sans-serif",
  color: "white",
  display: "block",
  width: "100%",
  marginBottom: '50px'
  }

  const header = {
      paddingTop: '175px',
      height: '100vh'
  }

  let randomNumber;
  let Data = [];

  const font2 = {
    fontSize: '2.5em',
    fontWeight: '400',
    fontColor: 'white',
    fontFamily: 'Varela Round, sans-serif',
    color: 'white',
    display: 'inline',
    letterSpacing: '8px',
    margin: '35px auto',
    border: '4px solid white',
    borderRadius: '25px',
    padding: '10px 30px',
    cursor: 'pointer',
    backgroundColor: "transparent"
}

  class FactTile extends Component {
    constructor(){
        super();
        this.state = {
            data: null
        };
    }

    handleClick = () => {
        let x = randomNumber;
        randomNumber = Math.floor((Math.random() * Data.length));
        let data;
        if(x !== randomNumber){
            data = <div><h1 style={headingStyle}>{Data[randomNumber].name}</h1><br/><h1 style={textStyle}>{Data[randomNumber].text}</h1></div>
            this.setState({
                data: data
            })
        }else{
            randomNumber = Math.floor((Math.random() * Data.length));
            data = <div><h1 style={headingStyle}>{Data[randomNumber].name}</h1><br/><h1 style={textStyle}>{Data[randomNumber].text}</h1></div>
            this.setState({
                data: data
            })
        }
    }

    componentDidMount(){
        this.handleClick();
    }
    render() {
        Facts.forEach(fact => {
            Data.push({
              name: fact.name,
              text: fact.fact,
              more: fact.more
            });
          });
        return(
            <div className="container text-center" id="facts"  style={header}>
                {this.state.data}
                <button style={font2} onClick={this.handleClick} type="button" className="btn">Next</button>
            </div>
        );
    }
  }

  export default FactTile;