import React from 'react';
import logo from '../../images/Icon/travel-solution-logo.png';
const AboutUs = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center py-2">
                <div style={{width: '350px'}} className="card rounded p-3 shadow text-center">
                    <img className="mx-auto mb-3 floating" style={{height: '122px', width: '224px'}} src={logo} alt=""/>
                    <h5>We are not only a traveling agency but also a family of a client</h5>
                    <p className="text-info">So, please take our services</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;