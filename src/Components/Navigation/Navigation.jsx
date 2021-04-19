import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useHistory } from 'react-router-dom';
import './Navigation.css';
import t_icon from '../../images/Icon/travel-solution-logo.png';
import { UserContext } from '../../App';

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleLogout = ()=>{
        setLoggedInUser({});
        history.push('/');
    }
    return (
        <div className="border border-bottom bg-brand shadow-sm">
            <Navbar collapseOnSelect className="container"  expand="lg" bg="transparent" variant="light">
                <Navbar.Brand><NavLink to="/"><img style={{height: '50px'}} src={t_icon} alt=""/></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="nav-link px-1" to="/home">Home</NavLink>
                        <NavLink className="nav-link px-1" to="/about">About Us</NavLink>
                        <NavLink className="nav-link px-1" to="/projects">Projects</NavLink>
                        <NavLink className="nav-link px-1" to="/contact">Contact</NavLink>
                        {
                            (loggedInUser.userType !== "client" || !loggedInUser) 
                            ? <NavLink className={`nav-link ${loggedInUser.email && "text-warning"}  px-1`} to="/admin">Admin</NavLink>
                            : <NavLink to={`/client/booking`} className={`nav-link px-1 text-decoration-none mr-auto `}>
                            <img style={{height: "30px"}} className="rounded-circle ml-2" src={loggedInUser.photoURL} alt=""/> <small className="ml-1 mr-2 font-weight-bold">{loggedInUser.displayName.match(/\b\w/g).join('')}</small>
                        </NavLink>
                        }
                        
                        {
                            !loggedInUser.email
                            ? <NavLink className="nav-link px-1" to="/login">Login</NavLink>
                            : <p className="nav-link px-1 text-danger" style={{cursor: 'pointer'}} onClick={() => handleLogout()}>Logout</p>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;