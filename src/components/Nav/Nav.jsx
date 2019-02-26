import React from 'react';
import './nav.css';


const Nav = () => {
    return (
        <div className="nav-container">
            <img 
                src="https://s3.us-east-2.amazonaws.com/portfolio-demo-site/Daniel_D.png" 
                alt="Daniel Dominguez"
                className="my_name"
            />

            <ul className="nav-list">
                <li className="list_item"><a href="#about">About</a></li>
                <li className="list_item"><a href="#work">Work</a></li>
                <li className="list_item"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav;