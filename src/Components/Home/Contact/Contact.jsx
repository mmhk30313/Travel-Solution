import React, { useContext, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import Modal from 'react-bootstrap/Modal';
import { UserContext } from '../../../App';

const Contact = () => {
    const [modalShow, setModalShow] = useState(false);
    const [loggedInUser] = useContext(UserContext);
    const [wrongMessage, setWrongMessage] = useState(false);
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        // console.log(evt.target)
        // const user = {
        //     from_name: evt.target.first_name.value + " " + evt.target.last_name.value,
        //     reply_to: evt.target.email.value,
        //     phone: evt.target.phone.value,
        //     message: evt.target.message.value
        // }
        // console.log(user);
        emailjs.sendForm('itsforyou', 'template_esocsya', evt.target, 'user_z1NIIg9IrX3DIJgTQOSDK')
        .then((result) => {
            // console.log(result.text);
            if(result.text === "OK"){
                // .....MODAL Bootstrap......
                if(loggedInUser.email){
                    setWrongMessage(false)
                    setModalShow(true);
                }else{
                    setWrongMessage("Sorry!!! you didn't logged in travel solution");
                    setModalShow(true);
                }
            }
        }, (error) => {
            console.log(error.text);
        });
        // emailjs.sendForm('mehedi30313', 'template_t70m5mp', evt.target, 'user_FBbxAs5F2iR78ILK22cF3')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        evt.target.reset()
    }
    return (
        <div className="container py-4">
            <h3 data-aos="fade-down" data-aos-duration="1000"     className="text-center font-weight-bold mt-3 pb-2 color-brand">Contact</h3>
            
            <h5 className="text-center font-weight-bold">Let us handle your project, professionally</h5>
            <form onSubmit={handleSubmit} className="home-form">
                <div className="row justify-content-center">
                    <div className="col-md-6 form-group">
                        <input type="text" name="from_name" placeholder="First Name" className="form-control" required/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="text" name="last_name" placeholder="Last Name" className="form-control" required/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="email" name="reply_to" placeholder="Email Address" className="form-control" required/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="tel" name="phone" placeholder="Phone Number" className="form-control" required/>
                    </div>
                    <div className="col-md-12 form-group">
                        <textarea type="text" cols='15' rows="5" name="message" placeholder="Your Message" className="form-control" required/>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <input type="submit" className="btn btn-brand" value="Send Message"/>
                    </div>
                </div>
            </form>
            <MyVerticallyCenteredModal
                wrongMessage={wrongMessage}
                user={loggedInUser}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default Contact;

function MyVerticallyCenteredModal(props) {
    const {user, wrongMessage} = props;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header className="bg-dark btn-close-white" closeButton>
            <Modal.Body className="bg-dark text-center py-3">
        {
                !wrongMessage
                ? <><div className="d-flex justify-content-between">
                    <p className="mt-3">WELCOME!!!</p>
                    <img data-aos="zoom-in-up" data-aos-duration="3000" data-aos-anchor-placement="center-center" className="rounded rounded-circle" src={user.photoURL} alt=""/>
                </div>
                <p className="text-success font-weight-bold"><> YOUR EMAIL HAS BEEN SENT TO <span className="text-warning">TRAVEL SOLUTION AGENCY!!!</span></></p></>
                : <>
                <p className="text-success font-weight-bold"><> YOUR EMAIL HAS BEEN SENT TO <span className="text-warning">TRAVEL SOLUTION AGENCY!!!</span></></p></>
            }
          <div className="w-100 mx-auto pt-4">
              <div className="">
                  <p className="text-center text-success">Thanks for your  mail. Our team will response as soon as possible.</p>
                  <h4 className="text-center text-warning">Stay with us.</h4>
              </div>
          </div>
          <button className="btn btn-danger mt-5" onClick={props.onHide}>Back</button>
        </Modal.Body>
        </Modal.Header>
      </Modal>
    );
  }