import React from 'react';
import './Contact.css';
const Contact = () => {
    const handleSubmit = (evt)=>{
        evt.preventDefault();

    }
    return (
        <div className="container py-4">
            <h3 className="text-center font-weight-bold pb-2 color-brand">Contact</h3>
            
            <h5 className="text-center font-weight-bold">Let us handle your project, professionally</h5>
            <form onSubmit={handleSubmit} className="home-form">
                <div className="row justify-content-center">
                    <div className="col-md-6 form-group">
                        <input type="text" name="first_name" placeholder="First Name" className="form-control"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="text" name="last_name" placeholder="Last Name" className="form-control"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="email" name="email" placeholder="Email Address" className="form-control"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="tel" name="mobile" placeholder="Phone Number" className="form-control"/>
                    </div>
                    <div className="col-md-12 form-group">
                        <textarea type="text" cols='15' rows="5" name="message" placeholder="Your Message" className="form-control"/>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <input type="submit" className="btn btn-brand" value="Send Message"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;