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
        <div className="">
            <div className="bg-brand-booking">
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
            <div className="bg-brand1">
                <Hotels/>  
            </div>  
            <div className="bg-brand2">
                <AllServices/>  
            </div>
            <div className="bg-brand1">
                <FamousCompany/>    
            </div> 
            <div className="bg-brand">
                <Testimonials/>
            </div>
            <div className="bg-brand2">
                <Contact/>  
            </div>
            <div className="bg-special">
                <Footer/>    
            </div>  
        </div>
    );
};

export default Home;