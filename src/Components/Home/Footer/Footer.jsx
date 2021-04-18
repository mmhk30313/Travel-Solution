import React from 'react';
import map from '../../../images/Icon/map-pin-2-fill.png';
import facebook from '../../../images/Icon/VectorFB.png';
import instagram from '../../../images/Icon/VectorInstragram.png';
import linkedIn from '../../../images/Icon/VectorLinkedIN.png';
import youTube from '../../../images/Icon/VectorYouTube.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="container py-4 text-light">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-12 my-2 d-flex justify-content-between">
                    <img className="mt-1 mr-1" style={{height: '30px'}} src={map} alt=""/>
                    <p><small>Badda Lake View Society, Road #11, Gulshan, Dhaka - 1212</small></p>
                </div>
                <div className="col-lg-2 col-md-5 my-2">
                    <p className="font-weight-bold mb-2">Company</p>
                    <div className="footer-link">
                        <a href="#about"><small>About</small></a>
                    </div>
                    <div className="footer-link">
                        <a href="#project"><small>Project</small></a>
                    </div>
                    <div className="footer-link">
                        <a href="#team"><small>Our Team</small></a>
                    </div>
                    <div className="footer-link">
                        <a href="#conditions"><small>Terms & Conditions</small></a>
                    </div>
                    <div className="footer-link">
                        <a href="#submit-list"><small>Submit Listing</small></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-5 my-2">
                    <p className="font-weight-bold mb-2">Quick Links</p>
                    <div className="footer-link">
                        <a href="#quick-links"><small>Quick Links</small></a>
                    </div>
                    <div className="footer-link">
                        <a href="#rentals"><small>Rentals</small></a>
                    </div>
                    <div className="footer-link">
                        <a href="#sales"><small>Sales</small></a>
                    </div>
                    <div className="footer-link">
                        <a href="#contact"><small>Contact</small></a>
                    </div>
                    <div className="footer-link">
                        <a href="#blog"><small>Our blog</small></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 my-2">
                    <p className="font-weight-bold mb-2">About Us</p>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a tempore recusandae esse. Quasi, quaerat.</small></p>
                    <div className="d-flex footer-social-link">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img style={{height: '20px'}} src={facebook} alt=""/></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img className="mx-2" style={{height: '20px'}} src={instagram} alt=""/></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img className="mx-2" style={{height: '20px'}} src={linkedIn} alt=""/></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img style={{height: '20px'}} src={youTube} alt=""/></a>
                    </div>
                </div>
            </div>
            <p className="text-light text-center mt-4 mb-2"><small>@Copy Right Mahadi {new Date().getFullYear()}</small></p>
        </div>
    );
};

export default Footer;