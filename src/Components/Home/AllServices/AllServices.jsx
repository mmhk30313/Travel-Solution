import React from 'react';
import service1 from '../../../images/Icon/service1-rosort-book.png';
import service2 from '../../../images/Icon/service2-banking-management.png';
import service3 from '../../../images/Icon/service3-hotel-management.png';
import service4 from '../../../images/Icon/service4-car-sevicing.png';
import service5 from '../../../images/Icon/service5-car-management.png';
import service6 from '../../../images/Icon/service6-bike-management.png';
import service7 from '../../../images/Icon/service7-mountain-bike-management.png';

const ourServices = [
    {
        id: 1,
        name: "Booking Resort",
        imgUrl: service1,
        price: 220,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed fugit exercitationem consectetur laboriosam. Officia distinctio doloremque laudantium obcaecati ipsum?"
    },
    {
        id: 2,
        name: "Banking Management",
        imgUrl: service2,
        price: 120,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed fugit exercitationem consectetur laboriosam. Officia distinctio doloremque laudantium obcaecati ipsum?"
    },
    {
        id: 3,
        name: "Hotel Management",
        imgUrl: service3,
        price: 250,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed fugit exercitationem consectetur laboriosam. Officia distinctio doloremque laudantium obcaecati ipsum?"
    },
    {
        id: 4,
        name: "Car Servicing",
        imgUrl: service4,
        price: 210,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed fugit exercitationem consectetur laboriosam. Officia distinctio doloremque laudantium obcaecati ipsum?"
    },
    {
        id: 5,
        name: "Car Management",
        imgUrl: service5,
        price: 227,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed fugit exercitationem consectetur laboriosam. Officia distinctio doloremque laudantium obcaecati ipsum?"
    },
    {
        id: 6,
        name: "Bike Management",
        imgUrl: service6,
        price: 250,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed fugit exercitationem consectetur laboriosam. Officia distinctio doloremque laudantium obcaecati ipsum?"
    },
    {
        id: 7,
        name: "Mountain Bike Management",
        imgUrl: service7,
        price: 120,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed fugit exercitationem consectetur laboriosam. Officia distinctio doloremque laudantium obcaecati ipsum?"
    },
]

const AllServices = () => {
    const services = ourServices.slice(0,3);
    return (
        <div className="container py-4">
            <h3 className="text-center font-weight-bold pb-2 color-brand">Services</h3>
            
            <h5 className="text-center font-weight-bold">We're an agency tailored to all clients' needs that always delivers</h5>
            <div className='row'>
                {
                    services.map( service => <div key={service.id} className="col-md-4 mx-auto mt-3">
                            <div className="card justify-content-center p-2 text-center">
                                <img className="rounded mx-auto w-25" src={service.imgUrl} alt=""/>
                                <h6 style={{fontSize: "18px"}} className="mt-2">{service.name}</h6>
                                <h6>${service.price}</h6>
                                <p style={{fontSize: '14px'}}>{service.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className=" d-flex justify-content-center my-3">
                <button className="btn btn-brand">Explore</button>
            </div>
        </div>
    );
};

export default AllServices;