import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './AllServices.css';
// import service1 from '../../../images/Icon/service1-rosort-book.png';
// import service2 from '../../../images/Icon/service2-banking-management.png';
// import service3 from '../../../images/Icon/service3-hotel-management.png';
// import service4 from '../../../images/Icon/service4-car-sevicing.png';
// import service5 from '../../../images/Icon/service5-car-management.png';
// import service6 from '../../../images/Icon/service6-bike-management.png';
// import service7 from '../../../images/Icon/service7-mountain-bike-management.png';

const AllServices = () => {
    const [loggedInUser, setLoggedInUser, allServices, setAllServices] = useContext(UserContext);
    const [services, setServices] = useState(allServices);
    const [see, setSee] = useState("Explore")
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then( data => {
            setServices(data)
            setAllServices(data);
        })
        .catch(err => console.log(err, loggedInUser, setLoggedInUser))
    },[])
    // console.log(allServices, services);
    return (
        <div className="container py-4">
            <h3 className="text-center font-weight-bold pb-2 color-brand">Services</h3>
            
            <h5 className="text-center font-weight-bold">We're an agency tailored to all clients' needs that always delivers</h5>
            <p className="text-center text-danger font-weight-bold"><>To see all services, please click the "Explore" button</></p>
            {
                allServices.length
                ? <>
                    <div className='row'>
                        {
                            see === "Explore" 
                            ? services.slice(0,3).map( service => <div key={service._id} className="col-md-4 mx-auto mt-3">
                                    <Link to={`/client/${service._id}`} className="card shadow service-link text-decoration-none text-dark justify-content-center p-2 text-center">
                                        <img className="rounded mx-auto w-25" src={service.imgUrl} alt=""/>
                                        <h6 style={{fontSize: "18px"}} className="mt-2">{service.serviceName}</h6>
                                        <h6>${service.price}</h6>
                                        <p style={{fontSize: '14px'}}>{service.description}</p>
                                    </Link>
                                </div>
                            )
                            : services.map( service => <div key={service._id} className="col-md-4 mx-auto mt-3">
                                    <Link to={`/client/${service._id}`} className="card service-link text-decoration-none text-dark justify-content-center p-2 text-center">
                                        <img className="rounded mx-auto w-25" src={service.imgUrl} alt=""/>
                                        <h6 style={{fontSize: "18px"}} className="mt-2">{service.serviceName}</h6>
                                        <h6>${service.price}</h6>
                                        <p style={{fontSize: '14px'}}>{service.description}</p>
                                    </Link>
                                </div>
                            )
                        
                        }
                    </div>
                    <div className=" d-flex justify-content-center my-3">
                        <button onClick={() => setSee(see==="Explore" ? "Overlook" : "Explore" )} className="btn btn-brand">{see}</button>
                    </div>
                </>
                : <div className="d-flex justify-content-center">
                    <CircularProgress color="secondary" />
                </div>
            }
        </div>
    );
};

export default AllServices;