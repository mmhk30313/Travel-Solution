import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/Icon/travel-solution-logo.png';
// import link1 from '../../images/Icon/list.png';
// import link2 from '../../images/Icon/plus.png';
// import link3 from '../../images/Icon/man_plus.png';
// import link4 from '../../images/Icon/grid.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faDove, faCommentDots, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
import './Client.css';
import BookService from './BookService/BookService';
import BookingList from './BookingList/BookingList';
import Review from './Review/Review';
const Client = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const [clientWork, setClientWork] = useState("Book Service");
    const [bookService, setBookService] = useState('activate-client');
    const [bookingList, setBookingList] = useState('');
    const [review, setReview] = useState('');
    const [logout, setLogout] = useState('');
    const handleClientWork = (work) =>{
        if(work === "Book Service"){
            setBookService('activate-client');
            setBookingList('');
            setReview('');
            setLogout('');
        }
        else if(work === "Booking List"){
            setBookService('');
            setBookingList('activate-client');
            setReview('');
            setLogout('');
        }
        else if(work === "Review"){
            setBookService('');
            setBookingList('');
            setReview('activate-client');
            setLogout('');
        }
        else{
            setBookService('');
            setBookingList('');
            setReview('');
            setLogout('activate-client');
        }
        setClientWork(work);
    }
    const history = useHistory();
    const handleLogout = () =>{
        setLoggedInUser({});
        history.push('/');
    }
    return (
        <div className="m-0">
            <div className='row w-100 mx-auto'>
                <div className="col-md-3 p-5">
                    <Link to='/' ><img style={{height: '50px'}} src={logo} alt=""/></Link>
                    <div className="mt-4">
                        <p className={`w-100 py-2  hover-client ${bookService}`} onClick={() =>handleClientWork("Book Service")}><FontAwesomeIcon icon={faBookmark} /><span> Book Service</span></p>

                        <p className={`w-100 py-2  hover-client ${bookingList}`} onClick={() =>handleClientWork("Booking List")}><FontAwesomeIcon icon={faDove}/><span> Booking List</span></p>

                        <p className={`w-100 py-2  hover-client ${review}`} onClick={() =>handleClientWork("Review")}><FontAwesomeIcon icon={faCommentDots}/><span> Review</span></p>
                        
                        <p className={`w-100 py-2  hover-client ${logout}`} onClick={() =>handleLogout()}><FontAwesomeIcon icon={faSignOutAlt}/><span> Logout</span></p>
                    </div>
                </div>
                <div style={{height: '99.8vh'}} className="col-md-9 px-0 pt-5 border-left border-dark">
                    <div className="client-header d-flex justify-content-between mt-4 mb-2 px-3">
                        <h5 className="client-work-title">{clientWork}</h5>
                        <h5 className="client-name">{loggedInUser.displayName}</h5>
                    </div>
                    <div style={{height: 'fit-content'}} className="client-work bg-light w-100 mx-auto py-2 px-3">
                        {/* <AddService/> */}
                        {
                           clientWork === "Book Service" ? <BookService/>
                           : clientWork === 'Booking List' ? <BookingList/>
                           : clientWork === "Review" ? <Review/>
                           : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;