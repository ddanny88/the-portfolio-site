import React from 'react';
import "./about.css"

const About = () => {
    return (
        <div>
            <div className="bio" id="about">
                <div className=".bio-txt">
                    <h3 className="about-txt2">
                    <h2 className="about-tag" >ABOUT</h2>
                    I have always had a fascination for technology, design, and business. I graduated from The University of Texas at El Paso in Business Management with a focus in Entrepreneurship. I was drawn to product development, mainly based on lean startup principles. I found myself gravitating toward web development and love for learning and implementing new technologies. I am looking forward to working with brilliant/creative individuals and workplaces whom I can continue to learn and grow with. 
                    </h3>
                </div>
                <img 
                src="https://s3.us-east-2.amazonaws.com/portfolio-demo-site/head-shot.png" 
                className="head-shot" 
                />
             </div>
        </div>
    )
}

export default About;