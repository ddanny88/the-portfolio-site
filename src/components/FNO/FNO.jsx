import React, { Component } from 'react';
import'./fno.css';


class FNO extends Component {
    constructor(){
        super();
        this.state = {
            showMore: false

        }
    }

    handleClick = () => {
        this.setState({
            showMore: !this.state.showMore
        })
    }


    render(){
        return (
            <div className="first-night-container">
                <div className="fno-text">
                    <h1>First Night Out</h1>
                    <h2>First Night Out gives the user the ability to explore a new city with and all the festivities available </h2>
                    { this.state.showMore && (
                        <div>
                    <h3>React.js | Redux | bcrypt.js | Firebase | Express.js</h3>
    
                   
                    <p>Team based project that Integrated Google Places, Directions, and Geocoding API</p>

                    <p>Self- taught and implemented Firebase real-time database and storage</p>

                    <p>Entire project was created using React Hooks, a feature that was released less than a week before the project started</p>
                    </div>)

                    }
                    { !this.state.showMore? <button className="show-btn" onClick={ this.handleClick }>show more</button> : <button className="show-btn" onClick={ this.handleClick }>show less</button>}
                    
                    <br/>
                    <p>Mobile view only</p>
                    <button className="fno-btn"><a className="fno-link"  href="#">First Night Out</a></button>
                </div>
                <img 
                    src="https://s3.us-east-2.amazonaws.com/portfolio-demo-site/phone2.png" alt="phone view"
                    className="phone-view"
                />
            </div>
        )
    }
}

export default FNO;