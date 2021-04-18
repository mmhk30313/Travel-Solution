import React, { useRef } from 'react';

const MakeAdmin = () => {
    const emailRef = useRef();
    const handleSubmit = (evt) =>{
        evt.preventDefault();
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit} className="card p-1 make-admin-form py-3 rounded mx-auto">
                <div className="d-flex justify-content-center">
                    <input type="email" ref={emailRef} name="email" placeholder="Enter email" className="form-control" />
                    <input className="btn px-2 btn-brand rounded ml-1" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;