import React from 'react';
import'./footer.css';


const Footer = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact-info">
               <p>CONTACT:</p>
               <p><i className="fas fa-envelope"></i> ddominguez20.dd@gmail.com</p>
               <p><i className="fas fa-phone"></i> (915) 238-9272</p>
            </div>
            <ul className="social-list">
                <li><a href="https://github.com/ddanny88"><i className="fab fa-github"></i></a></li>

                <li><a href="https://www.linkedin.com/in/ddominguez01/"><i className="fab fa-linkedin"></i></a></li>

                <li><i className="fab fa-instagram"></i></li>
            </ul> 
        </div>
    )
}

export default Footer;