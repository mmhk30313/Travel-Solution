import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import deleteIcon from '../../../images/Icon/deleteIcon.png';
const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('https://travel-solution-server.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    const handleDeleteService =(id) =>{
        // console.log(id);
        fetch(`https://travel-solution-server.herokuapp.com/delete-service/${id}`)
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.deletedCount){
                fetch('https://travel-solution-server.herokuapp.com/services')
                .then(res => res.json())
                .then(data => setServices(data));
            }
        })
    }
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
                                {
                                    services && services.map(service => <tr key={service._id}>
                                        <td colSpan="2">{service.serviceName}</td>
                                        <td className='text-center' colSpan="4">{service.description.substr(0, 25)+"..."}</td>
                                        <td className='text-center'>${service.price}</td>
                                        <td className='text-center'>
                                            <span className='btn btn-danger round m-0 p-0' onClick={() => handleDeleteService(service._id)} style={{cursor: 'pointer'}}><img style={{height: '30px'}} src={deleteIcon} alt=""/></span>
                                        </td>
                                    </tr>)
                                }
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