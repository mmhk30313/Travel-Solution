import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);
    return (
        <div>
            <div className="input-form p-1">
                <div className="scrolling py-3 px-4 w-100 mx-auto my-3 card shadow bg-white table-responsive">
                    <div className="table">
                        <table className="table table-hover">
                            <thead className="bg-light rounded">
                                <tr>
                                    <th scope="col" colSpan="2" className="text-muted">Service Name</th>
                                    <th scope="col" colSpan="4" className="text-center text-muted">Description</th>
                                    <th scope="col" className="text-center text-muted">Price</th>
                                    <th scope="col" className="text-center text-muted">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    services && services.map(service => <tr key={service._id}>
                                        <td colSpan="3">{service.serviceName}</td>
                                        <td className='text-center' colSpan="2">{service.authorName}</td>
                                        <td className='text-center'>${service.servicePrice}</td>
                                        <td className='text-center'>
                                            <span style={{cursor: 'pointer'}}><img style={{height: '30px'}} className="mr-1" src={editIcon} alt=""/></span>
                                            <span onClick={() => handleDeleteservice(service._id)} style={{cursor: 'pointer'}}><img style={{height: '30px'}} src={deleteIcon} alt=""/></span>
                                        </td>
                                    </tr>)
                                } */}
                                    {/* Delete Button E handleDelete function diye data delete korte hobe... */}
                            </tbody>
                        </table>
                        {
                            services.length === 0 && <div className="text-center d-flex justify-content-center">
                            <CircularProgress color="primary" />
                        </div>
                        }
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ManageService;