import React from 'react';
import star from '../../../images/Icon/star.png';
const WithStyles = ({review}) => {
    
    const {name, img, description, company} = review;
    return (
        <div className="my-5 mx-2">
            <div className="card shadow p-3">
                <div className="d-flex">
                    <img style={{height: '80px'}} className="rounded-circle" src={img} alt=""/>
                    <div className="my-auto mx-auto mt-2">
                        <h6 className="text-info">{name}</h6>
                        <p>{company}</p>
                    </div>
                </div>
                <p className="text-justify rounded mt-1 client-description text-success"><small>{description}</small></p>
                <div className="d-flex">
                    {
                        [0,1,2,1,3].map((i, idx) => <img style={{height: '18px'}} key={idx} src={star} alt=''/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WithStyles;