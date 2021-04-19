import React from 'react';

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
                <p className="text-justify text-success"><small>{description}</small></p>
            </div>

        </div>
    );
};

export default WithStyles;