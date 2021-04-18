import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import google from '../../images/Icon/google.png';
import './Login.css';
import "firebase/auth";
import firebase from "firebase/app";
// // import * as firebase from "firebase/app";
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from '../../firebase.config.jsx/firebase.config';
firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [myUser, setMyUser] = useState("");
    const [wrongMessage, setWrongMessage] = useState(false);
    
    // // const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const history = useHistory();
    const location = useLocation();
    // console.log(location);
    let {pathname} = location;
    // console.log(location.state.from.pathname);
    useEffect(() => {
        if(location.state && location.state.from.pathname === '/admin'){
            setMyUser('admin');
        }
        else{
            // console.log(location.state)
            setMyUser('client');
        }
    },[location.state])
    console.log(myUser);
    const {from} = location.state || { from: { pathname: "/"}};

    const handleClick = () =>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            // console.log(user);
            const {displayName, email, photoURL} = user;
            const curUser = {
                email,
                displayName,
                photoURL,
                userType: myUser
            }
            if( ( location.state && location.state.from.pathname === '/admin' && myUser === 'client' )  || (!location.state && myUser === 'client') || ( !location.state && myUser === 'admin' && ( curUser.email === 'mehedihasan30313@gmail.com' || curUser.email ==='programminghero001@gmail.com' ) )){
                setWrongMessage(false);
                setLoggedInUser(curUser);
                history.replace('/');
            }
            else if( location.state && myUser === 'client'){
                setLoggedInUser(curUser);
                setWrongMessage(false);
                history.replace(from);
            }
            else if( location.state && myUser === 'admin' && ( curUser.email === 'mehedihasan30313@gmail.com' || curUser.email ==='programminghero001@gmail.com' ) ){
                setLoggedInUser(curUser);
                setWrongMessage(false);
                history.replace(from);
            }
            else{
                setLoggedInUser({});
                setWrongMessage("Sorry!!! you are not an admin of travel solution")
            }
            
        })
        .catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage, loggedInUser);
        });
    }
    console.log(loggedInUser);
    const handleUserClick = (userType) =>{
        setMyUser(userType);
    }
    // const handleClick = () =>{
    //     console.log("google click")
    // }
    return (
        <div data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="jumbotron shadow bg-light mx-auto rounded text-center p-5 login-field" >
            <h4 data-aos="fade-down" data-aos-duration="4000" className='mb-4'>
                {myUser === "client" 
                ? <>Login</>
                : <>Login As An Admin</>}
            </h4>
            <button onClick={handleClick} className={`align-items-center btn btn-outline-${myUser === "client" ? "warning" : "info"} mx-auto`} style={{borderRadius: '30px', height: 'fit-content'}} ><img src={google} alt="" style={{height: '25px'}} /> <span className="my-auto ml-2"> Continue With Google</span></button>

            <p className="text-center mt-3">Continue As {myUser === 'client' ? "An Admin" : "A Client" }? <span className="text-danger text-decoration-underline" style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() =>handleUserClick( myUser === "client" ? "admin" : "client" )}>Click Here</span></p>

            {
                wrongMessage && <p className="text-center text-info">{wrongMessage}</p>
            }
        </div>
    );
};

export default Login;