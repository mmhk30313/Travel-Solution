import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './BookingList.css';
const BookingList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [clientServices, setClientServices] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:5000/client-all-services?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setClientServices(data);
        })

    },[])
    
    return (
        <div className="container">     
            <div className="row">
                {
                    clientServices.length > 0 
                    ? clientServices.map(clientService => <div key={clientService._id} className="col-md-6">
                        <div className="card rounded p-4 mt-4">
                            <div className="row justify-content-center mb-3">
                                <img className="col-md-3 mb-2 my-auto" style={{height: '70px',width:'120px'}}  src={clientService.photoURL} alt=""/>
                                <div className="col-md-9 d-flex justify-content-end mt-2 ">
                                    <h4 style={{width: 'fit-content'}} className={`card status text-center bg-${clientService.status} font-weight-bold p-3`}><small>{clientService.status}</small></h4>
                                </div>
                            </div>
                            <h5>{clientService.serviceName}</h5>
                            <p className="text-justify">{clientService.description.substr(0, clientService.description.length - 7)}</p>
                        </div>
                    </div> )
                    : <div className="d-flex justify-content-center w-100 my-5 mx-auto">
                        <CircularProgress color="primary"/>
                    </div>
                }
            </div>
        </div>
    );
};

export default BookingList;