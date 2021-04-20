import React from 'react';
import hotel1 from '../../../images/Image/hotel1.png';
import hotel2 from '../../../images/Image/hotel2.png';
import hotel3 from '../../../images/Image/hotel3.png';
import map from '../../../images/Icon/map.png';
const hotels = [
    {
        id: 1,
        name: "Villa on Washington Avenue",
        imgUrl: hotel1,
        place: "Dhaka, Bangladesh"
    },
    {
        id: 2,
        name: "Luxury villa in Rego Park",
        imgUrl: hotel2,
        place: "Chittagong, Bangladesh"
    },
    {
        id: 3,
        name: "Gorgeous house",
        imgUrl: hotel3,
        place: "Khulna, Bangladesh"
    },
]
const Hotels = () => {
    return (
        <div className="container py-4">
            <h3 data-aos={`fade-down`} data-aos-duration="2000" className="text-center font-weight-bold pb-2 color-brand">Hotels & Resorts</h3>
            <p className="text-center font-weight-bold">Enjoy your journey to stay our hotel where is found all facilities for the traveler</p>
            <div className='row'>
                {
                    hotels.map( (hotel, idx) => <div key={hotel.id} className="col-md-4 mx-auto">
                    <div className=" justify-content-center text-center">
                        <img data-aos={`zoom-${(idx % 2) === 0 ? "in-up" : 'out-down'}`} data-aos-duration="2000" className="rounded shadow mx-auto w-100" style={{height: '300px'}} src={hotel.imgUrl} alt=""/>
                        <h6 style={{fontSize: "20px"}} className="mt-2 font-weight-bold">{hotel.name}</h6>
                        <p><img style={{height: '20px'}} src={map} alt=""/> <small>{hotel.place}</small></p>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Hotels;