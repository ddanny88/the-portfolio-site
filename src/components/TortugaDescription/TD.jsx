import React from 'react';
import './td.css';

const TD = () => {
    return (
        <div id="work">
            <h2 className="mywork" >My Work</h2>
            <hr className="port-rule"/>

            <div className="content-container">
                <div>
                    <h1>Tortuga</h1>
                    <img 
                    className="champ"
                    src="https://s3.us-east-2.amazonaws.com/portfolio-demo-site/champ2.png" alt="champ"/>
                </div>
                <div className="description">
                    <p className="t-description">Tortuga is an alcohol delivery application that gives the user a vast selection of beverages at their finger tips.</p>
                    <button className="t-button"><a className="t-link" href="http://www.tortuga.fun">Tortuga</a></button>
                </div>
            </div>
           
        </div>
    )
}

export default TD;