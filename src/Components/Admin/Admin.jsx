import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/Icon/travel-solution-logo.png';
// import link1 from '../../images/Icon/list.png';
// import link2 from '../../images/Icon/plus.png';
// import link3 from '../../images/Icon/man_plus.png';
// import link4 from '../../images/Icon/grid.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faPlus, faUserAlt, faSignOutAlt, faDove } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
import './Admin.css';
// import AddService from './AddService/AddService';
import OrderList from './OrderList/OrderList';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageService from './ManageService/ManageService';
import AddService from './AddService/AddService';
const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const [adminWork, setAdminWork] = useState("Order List");
    const [orderList, setOrderList] = useState('activate');
    const [addService, setAddService] = useState('');
    const [manageServices, setManageServices] = useState("");
    const [makeAdmin, setMakeAdmin] = useState("");
    const [logout, setLogout] = useState("");
    const handleAdminWork = (work) =>{
        console.log(work);
        if(work==="Order List"){
            setOrderList('activate');
            setAddService("");
            setManageServices("");
            setMakeAdmin("");
            setLogout("")
            
        }
        else if(work === 'Add Service'){
            setOrderList("");
            setAddService("activate");
            setManageServices("");
            setMakeAdmin("");
            setLogout("")
        }
        else if(work=== 'Manage Services'){
            setOrderList("");
            setAddService("");
            setManageServices("activate");
            setMakeAdmin("");
            setLogout("")
        }
        else if(work === 'Make Admin'){
            setOrderList("");
            setAddService("");
            setManageServices("");
            setMakeAdmin("activate");
            setLogout("")
        }
        else if(adminWork === "logout"){
            setOrderList("");
            setAddService("");
            setManageServices("");
            setMakeAdmin("");
            setLogout("activate")
        }
        setAdminWork(work);
    }
    const history = useHistory();
    const handleLogout = () =>{
        setLoggedInUser({});
        history.push('/');
    }
    return (
        <div className="m-0">
            <div className='row w-100 mx-auto'>
                <div className="col-md-3 p-5">
                    <Link to='/' ><img style={{height: '50px'}} src={logo} alt=""/></Link>
                    <div className="mt-4">
                        <p className={`w-100 py-2  hover ${orderList}`} onClick={() =>handleAdminWork("Order List")}><FontAwesomeIcon icon={faDove}/><span> Order List</span></p>
                        <p className={`w-100 py-2  hover ${addService}`} onClick={() =>handleAdminWork("Add Service")}><FontAwesomeIcon icon={faPlus} /><span> Add Service</span></p>
                        <p className={`w-100 py-2  hover ${makeAdmin}`} onClick={() =>handleAdminWork("Make Admin")}><FontAwesomeIcon icon={faUserAlt}/><span> Make Admin</span></p>
                        <p className={`w-100 py-2  hover ${manageServices}`} onClick={() =>handleAdminWork("Manage Services")}><FontAwesomeIcon icon={faBorderAll}/><span> Manage Services</span></p>
                        <p className={`w-100 py-2  hover ${logout}`} onClick={() =>handleLogout()}><FontAwesomeIcon icon={faSignOutAlt}/><span> Logout</span></p>
                    </div>
                </div>
                <div style={{height: `${adminWork === 'Add Service' || adminWork === "Make Admin" ? "99.8vh" : "fit-content"}`}} className="col-md-9 px-0 pt-5 border-left border-dark">
                    <div className="admin-header d-flex justify-content-between mt-5 mb-2 px-3">
                        <h5 className="admin-work-title">{adminWork}</h5>
                        <h5 className="admin-name">{loggedInUser.displayName}</h5>
                    </div>
                    <div style={{height: `${adminWork === 'Add Service' || adminWork === "Make Admin" ? "77.8vh" : "fit-content"}`}} className="admin-work bg-light w-100 mx-auto p-3">
                        {/* <AddService/> */}
                        {
                            adminWork === 'Order List' ? <OrderList/>
                            : adminWork === 'Add Service' ? <AddService/>
                            : adminWork === 'Make Admin' ? <MakeAdmin/>
                            : adminWork === "Manage Services" ? <ManageService/>
                            : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;