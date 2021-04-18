import React from 'react';
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
            <div className="bg-brand">
                <Booking/>
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