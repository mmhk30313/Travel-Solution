import React, { useContext, useRef } from 'react';
import { UserContext } from '../../../App';

const Review = () => {
    const [loggedInUser,] = useContext(UserContext);
    const nameRef = useRef();
    const companyRef = useRef();
    const descriptionRef = useRef();
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        // nameRef.current.value = null;
        // companyRef.current.value = null;
        // descriptionRef.current.value = null;
    }
    return (
        <form className="form py-3 review-form" onSubmit={handleSubmit}>
            <div className="row p-1">
                <div className="col-md-12 form-group">
                    <input className="form-control" ref={nameRef} type="text" name="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-12 form-group">
                    <input className="form-control" ref={companyRef} type="text" name="companyName" placeholder="Company's name & designation" required/>
                </div>
                <div className="col-md-12 form-group">
                    <textarea className="form-control" ref={descriptionRef} cols="15" rows="4" type="text" name="description" placeholder="Description" required/>
                </div>
                <div className="col-md-4">
                    <input type="submit" className="btn btn-brand" value="Submit" /></div>
            </div>
        </form>
    );
};

export default Review;