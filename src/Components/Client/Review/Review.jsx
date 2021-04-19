import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../../../App';
import Modal from 'react-bootstrap/Modal';
const Review = () => {
    const [loggedInUser,] = useContext(UserContext);
    const [userReview, setUserReview] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const nameRef = useRef();
    const companyRef = useRef();
    const descriptionRef = useRef();
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        const review = {
            name: evt.target.name.value,
            img: loggedInUser.photoURL,
            company: evt.target.companyName.value,
            description: evt.target.description.value
        }
        console.log(review);
        fetch("http://localhost:5000/review", {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUserReview(data);
            setModalShow(true);
        })
        nameRef.current.value = null;
        companyRef.current.value = null;
        descriptionRef.current.value = null;
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
                    <input type="submit" className="btn btn-brand" value="Submit" />
                    <MyVerticallyCenteredModal
                        userReview={userReview}
                        user={loggedInUser}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </form>
    );
};

function MyVerticallyCenteredModal(props) {
    const {userReview} = props;
    console.log(userReview)
    // const {user} = props;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title  id="contained-modal-title-vcenter">
            <div className="">
                <p className="mt-3">Thank You!!!</p>
                <p className='text-success'><small>{userReview.name}</small></p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center w-100 mx-auto">
              <img className="rounded rounded-circle" src={userReview.img} alt=""/>
              <h5 className='text-danger my-2'>{userReview.company}</h5>
              <p className="text-info">YOUR IMPORTANT REVIEW IS PLEASURE FOR TRAVEL SOLUTION</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={props.onHide}>Back</button>
        </Modal.Footer>
      </Modal>
    );
  }
export default Review;