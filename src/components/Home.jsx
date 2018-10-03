import React, { Component } from "react";

const mainS = {
    /*position: 'absolute',
    margin: 'auto',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '50%',
    height: '50%'*/
    paddingTop: '135px'


}

const hS = {
    fontSize: '4.5em',
    fontWeight: '900',
    fontColor: 'white',
    float: 'left',
    fontFamily: 'Varela Round, sans-serif',
    color: 'white',
    display: 'block',
    width: '100%',
    letterSpacing: '7px',
    marginBottom: '20px'
}

const font = {
    fontSize: '2.75em',
    fontWeight: '500',
    fontColor: 'white',
    fontFamily: 'Varela Round, sans-serif',
    color: 'white',
    display: 'block',
    width: '100%',
    letterSpacing: '10px',
    marginBottom: '25px'
}

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
    cursor: 'pointer'
}

const font3 = {
    fontWeight: '600',
    fontColor: 'white',
    fontFamily: 'Varela Round, sans-serif',
    color: 'white',
    display: 'block',
    width: '100%',
    letterSpacing: '5px',
    margin: "10px auto"
}

const margin = {
    marginBottom: '50px'
}

const pS = {
    color: 'white',
    width: '100%',
    fontFamily: 'Varela Round, sans-serif',
    fontSize: '2em'

}

let paragraph = <p style={pS}>
            The interns at Covance Indianapolis will be hosting a food drive beginning Monday July 9th 2018 through Tuesday July 31st 2018. All proceeds gathered throughout the weeks will be donated to Gleaners. <a href="https://www.gleaners.org/">Gleaners</a> is a Food Bank of Indiana that provides meal assistance to those in need. They have managed to provide meals to more than 260,000 people in the past year to 21 different Indiana counties in central and southeast Indiana. We need your help to fight hunger within our own communities and provide meal assistance to those that need it!
                            <br />
                            <br />
            For the duration of these weeks there will be barrels and boxes posted in the building that will be accepting nonperishable foods and items. These will be located at the main exits, entrances, and high traffic areas throughout the building.
                            <br />
                            <br />
            Monetary donations will also be accepted every Monday, Wednesday, and Friday 11am – 1pm at a table we will be hosting in the cafeteria.
                            <br />
                            <br />
            Our goal is to be able to donate 5000 meals to gleaners and help provide to those who are in need! $1 is equivalent to 3 meals and $1666 is equivalent to 5000 meals. We believe our goal is obtainable through perseverance!
                            <br />
                            <br />
            Thank you for your time and support; it takes a team to fight hunger. We look forward towards working with everyone and are excited to see the turn out!
                            <br />
                            <br />
            Thank you
                            <br />
            The Interns
                        </p>;

    const space = {
        paddingBottom: '35px'
    }

    const back = {
        width: '100%',
        backgroundColor: '#ddd',
        borderRadius: '25px',
        marginBottom: '40px'
    }

    const progressBar = {
        width: '2%',
        borderRadius: '25px',
        height: '30px',
        backgroundColor: '#337ab7',
        color: 'white'
    }
class Home extends Component {
    constructor() {
        super();
        let button = <h2 className="button" style={font2} onClick={() => this.switch()}>Learn More</h2>;
        let progress = <div style={back}><div style={progressBar}>1%</div></div>
        this.state = {
            prog: progress,
            data: paragraph
        }
    }

    switch = () => {
        
        this.setState({ data: paragraph });
    }
    render() {
        return (
            <div style={mainS} className="container text-center">
                <h1 style={hS}>COVANCE FOOD DRIVE</h1>
                
                <div style={space}>
                
                    <h2 style={font}>July 9th - July 31st</h2>
                </div>
                <h3 style={font}>Race to 5000 Meals</h3>
                {this.state.prog}

                {this.state.data}
            </div>
        )
    }
}

export default Home;