import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import ScrollToTop from 'react-scroll-up';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Admin from "./Components/Admin/Admin";
import Client from "./Components/Client/Client";
import NotFound from "./Components/NotFound/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Components/Home/Contact/Contact";
import AllServices from "./Components/Home/AllServices/AllServices";
import Footer from "./Components/Home/Footer/Footer";
AOS.init();

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allServices, setAllServices] = useState([]);
  const [allClients, setAllClients] = useState([]);
  const [allHotels, setAllHotels] = useState([]);
  useEffect(() => {
    fetch('https://travel-solution-server.herokuapp.com/services')
    .then(res => res.json())
    .then( data => {
        setAllServices(data);
    })
    .catch(err => console.log(err, loggedInUser, setLoggedInUser))
    
  },[])
  return (
    <div className="app m-0 p-0">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser, allServices, setAllServices, allClients, setAllClients,allHotels, setAllHotels]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navigation/>
              <Home/>
            </Route>
            <Route path="/home">
              <Navigation/>
              <Home/>
            </Route>
            <Route path='/login'>
              <Navigation/>
              <Login/>
            </Route>
            <Route path="/contact">
              <Navigation/>
              <div className="bg-brand2">
                <Contact/>  
              </div>
              <div className="bg-special">
                <Footer/>
              </div>
            </Route>
            <Route path="/projects">
              <Navigation/>
              <div className="bg-brand2">
                <AllServices/>  
              </div>
              <div className="bg-special">
                <Footer/>
              </div>
            </Route>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <PrivateRoute path="/client/:id">
              <Client/>
            </PrivateRoute>
            {/* <PrivateRoute path="/client/:key">
              <Client/>
            </PrivateRoute> */}
            <Route path='*/:page'>
              <NotFound/>
            </Route>
          </Switch>
        </Router>
        <ScrollToTop showUnder={160}>
          <p style={{zIndex: '1000'}} className='btn btn-info text-danger font-weight-bold rounded-circle'>UP</p>
        </ScrollToTop>
      </UserContext.Provider>
    </div>
  );
}

export default App;
