import React from 'react';
import { Simple, Snows } from '../ParticleComponent/ParticleComponent';
import AllServices from './AllServices/AllServices';
import Booking from './Booking/Booking';
import Contact from './Contact/Contact';
import FamousCompany from './FamousCompany/FamousCompany';
import Footer from './Footer/Footer';
import './Home.css';
import Hotels from './Hotels/Hotels';
import Testimonials from './Testimonials/Testimonials';
const Home = () => {
    return (
        <>
            <div className="bg-brand1">
                <div className="bg-brand clip-down">
                <div> <Booking/></div>
                    <div style={{ 
                            position: "absolute",
                            top: 81,
                            left: 0,
                            height: '67.6vh',
                            overflow: 'hidden',
                            width: "100%",
                            zIndex: '1'
                        }
                    }
                    >
                        <div className="snow"><Snows/></div>
                        <div className="particle"><Simple/></div>
                        <div className="particle"><Simple/></div>
                        <div className="particle"><Simple/></div>
                        <div className="particle"><Simple/></div>
                    </div>
                    
                </div>
                <div className="brand-2">
                    <div className="bg-brand1">
                        <Hotels/>  
                    </div>
                    <div className="bg-brand2 clip-up pt-4">
                        <AllServices/>  
                    </div>
                </div>
            </div>
            <div className="bg-brand1">
                <FamousCompany/>    
            </div> 
            <div className="bg-brand">
                <Testimonials/>
            </div>
            <div className="bg-brand2">
                <div className="bg-brand2">
                    <Contact/>  
                </div>
                <div className="bg-special clip-up pb-2 pt-4">
                    <Footer/>    
                </div>  
            </div>
        </>
    );
};

export default Home;