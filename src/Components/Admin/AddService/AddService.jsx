import React, { useContext, useRef, useState } from 'react';
import uploadIcon from '../../../images/Icon/upload.png';
import Modal from 'react-bootstrap/Modal';
import { UserContext } from '../../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser, allServices, setAllServices] = useContext(UserContext);
    const [modalShow, setModalShow] = useState(false);
    
    const [addedService, setAddedService] = useState({});
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        const serviceName = evt.target.title.value;
        const description = evt.target.description.value;
        const price = evt.target.servicePrice.value;
        // console.log(evt.target.file.files[0]);
        const imgData = new FormData();
        imgData.set("key", "4ddc64c369e800157d688eb222ce91af");
        imgData.append('image', evt.target.file.files[0]);

        fetch("https://api.imgbb.com/1/upload", {
            method: 'POST',
            body: imgData,
            // If you add this, upload won't work
            // headers: {
            //   'Content-Type': 'multipart/form-data',
            // }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data.data.display_url);
            const serviceDetails = {
                name: loggedInUser.displayName,
                serviceName,
                description,
                price,
                imgUrl: data.data.display_url
            }
            console.log(serviceDetails);
            setAddedService(serviceDetails);
            fetch('http://localhost:5000/addService', {
                method: "POST",
                body: JSON.stringify(serviceDetails),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                titleRef.current.value = null;
                descriptionRef.current.value = null;
                priceRef.current.value = null;

        // .....MODAL Bootstrap......
                setModalShow(true);

                fetch('http://localhost:5000/services')
                .then(res => res.json())
                .then(data => {
                        console.log(data);
                        setAllServices(data)
                    }
                )
            })
            .catch(err => console.log(err, loggedInUser, setLoggedInUser, allServices));
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <div className=" p-1">
                <form onSubmit={handleSubmit} className="card shadow py-3 px-3" id="useForm">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>Service Title</label>
                            <input ref={titleRef} type="text" className="form-control" placeholder="Enter title" name="title" required />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Add Price</label>
                            <input ref={priceRef} type="text" className="form-control" placeholder="Enter Price" name="servicePrice" required />
                        </div>
                        <div className="col-md-6 form-group">
                            <label >Description</label>
                            <textarea ref={descriptionRef} name="description" id="description" className="form-control" cols="15" rows="5" placeholder="Enter Description"></textarea>
                        </div> 
                        <div className="col-md-6 form-group">
                            <label>Image</label>
                            <input type="file" name="file" className="d-none" id="upload-file" required/><br/>
                            <label className='btn btn-outline-success  form-control overflow-hidden' id="upload-label" htmlFor="upload-file" style={{width: 'fit-content'}} title='Upload image'><img style={{height: '30px'}} src={uploadIcon} alt=""/> <span className='image-upload'>Upload image</span></label>
                        </div>
                        
                    </div>
                </form>
                <div className='d-flex'>
                    <button className="btn btn-brand my-3 ml-auto px-4" type="submit" form="useForm" >Submit</button>
                    <MyVerticallyCenteredModal
                        addedService={addedService}
                        user={loggedInUser}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </>
    );
};

function MyVerticallyCenteredModal(props) {
    const addedService = props.addedService;
    const {user} = props;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title  id="contained-modal-title-vcenter">
            <div className="d-flex justify-content-between">
                <p className="mt-3">WELCOME!!!</p>
                <img className="rounded rounded-circle" src={user.photoURL} alt=""/>
            </div>
            <p className="text-warning">YOUR SERVICE IS UPLOADED</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row justify-content-around align-items-center mx-auto">
              <div className="details col-md-8 align-items-center">
                  <h5>Service Title: {addedService.serviceName}</h5>
                  <h6>Price: <span className="text-warning">${addedService.price}</span></h6>
                  <p className="text-success font-weight-bold">Description: {addedService.description}</p>
              </div>
              <div className="image col-md-4 text-right">
                  <img className="img-fluid w-" src={addedService.imgUrl} alt=""/>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={props.onHide}>Back</button>
        </Modal.Footer>
      </Modal>
    );
  }
export default AddService;