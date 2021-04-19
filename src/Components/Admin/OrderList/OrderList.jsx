import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const [allUserServices, setAllUserServices] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/all-user-services")
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            setAllUserServices(data);
        })
    },[])
    // console.log(allUserServices);
    const handleStatusChange = (id)=>{
        const statusId = document.getElementById(`status-${id}`);
        // console.log(id+" => "+ statusId.value);
        statusId.classList.remove(...statusId.classList);
        statusId.classList.add("bg-"+statusId.value, "border-none", "form-select", "form-select-lg", "p-2", "rounded");
        fetch(`http://localhost:5000/update-status/${id}`, {
            method: "POST",
            body: JSON.stringify({status: statusId.value}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(data => {
            if(!data){
                console.log(data);
            }
        })
    }
    return (
        <div>
            <div className="input-form p-2">
                <div className="scrolling py-3 px-4 w-100 mx-auto my-3 card shadow bg-white table-responsive">
                    <div className="table">
                        <table className="table table-hover">
                            <thead className="bg-light rounded">
                                <tr>
                                    <th scope="col" colSpan="2" className="text-muted">Name</th>
                                    <th scope="col" colSpan="4" className="text-center text-muted">Email ID</th>
                                    <th scope="col" className="text-center text-muted">Service</th>
                                    <th scope="col" className="text-center text-muted">Pay With</th>
                                    <th scope="col" className="text-center text-muted">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUserServices.length > 0 && allUserServices.map(service => <tr key={service._id}>
                                        <td colSpan="2">{service.setName}</td>
                                        <td className='text-center' colSpan="4">{service.email}</td>
                                        <td className='text-center'>${service.office}</td>
                                        <td className='text-center'>{service.cardType}</td>
                                        <td className='text-center'>
                                            <select onChange={() =>handleStatusChange(service._id)} id={`status-${service._id}`} style={{cursor: 'pointer'}} className={`border-none form-select form-select-lg p-2 rounded bg-${service.status}`} aria-label=".form-select-sm example">
                                                <option defaultValue>{service.status}</option>
                                                <option className="bg-Pending text-Pending" value="Pending">Pending</option>
                                                <option className="bg-Ongoing text-Ongoing" value="Ongoing">Ongoing</option>
                                                <option className="bg-Done text-Done" value="Done">Done</option>
                                            </select>
                                        </td>
                                    </tr>)
                                }
                                    {/* Delete Button E handleDelete function diye data delete korte hobe... */}
                            </tbody>
                        </table>
                    </div>
                    {
                        allUserServices.length === 0 && <div className="text-center d-flex justify-content-center">
                        <CircularProgress color="secondary" />
                    </div>
                    }
                </div>
            </div> 
        </div>
    );
};

export default OrderList;