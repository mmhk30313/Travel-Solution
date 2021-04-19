import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import traveler from '../../../images/Image/traveller-img-removebg-preview.png';
const Booking = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div className="container py-4 d-flex justify-content-center">
            <div className="row">
                <div className="col-md-5 my-auto">
                    <h2 style={{color: '#EF8C06'}} className="font-weight-bold">Travelling???</h2>
                    <h5 style={{color: '#12027a'}} className="font-weight-bold">We are here, with everything you need!!!</h5>
                    <p><small>Online Travel Agency, the mordern way to travel from your home to  your destination, You can travel all over the world.</small></p>
                    <Link to={loggedInUser.userType === 'client' ? `/${loggedInUser.userType}/booking` : loggedInUser.userType === 'admin' ? `/${loggedInUser.userType}` : '/login'} className="btn btn-brand rounded p-2 text-decoration-none">Booking</Link>
                </div>
                <div className="col-md-7">
                    <div className="">
                        <img className="w-100 mx-auto" src={traveler} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;