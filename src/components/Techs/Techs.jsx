import React, { Component } from 'react';
import './techs.css';

class Techs extends Component {
    constructor(){
        super();
        this.state = {
            techs: [
                "https://s3.us-east-2.amazonaws.com/portfolio-demo-site/js_img.png",
                "https://s3.us-east-2.amazonaws.com/portfolio-demo-site/react_img.png",
                "https://s3.us-east-2.amazonaws.com/portfolio-demo-site/node_img.png",
                "https://s3.us-east-2.amazonaws.com/portfolio-demo-site/redux_img.png",
                "https://s3.us-east-2.amazonaws.com/portfolio-demo-site/postgre_img.png"
            ]
        }
    }
    render() {
        const technologies = this.state.techs.map( tech => <li><img className="techs" src={ tech } alt="icon"/></li>)
        return (
           <div className="tech-container">
               <h2>TECHNOLOGIES</h2>
                <div className="tech-list">
                    { technologies }
                </div>
                <br/>
                <div className="tech-stuff">

                    <h3>I am constantly learning technologies and improving my skillset.</h3>
                </div>
           </div>
        );
    }
}

export default Techs;