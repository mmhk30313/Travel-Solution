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


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allServices, setAllServices] = useState([]);
  const [allClients, setAllClients] = useState([]);
  const [allHotels, setAllHotels] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then( data => {
        setAllServices(data);
    })
    .catch(err => console.log(err, loggedInUser, setLoggedInUser))
  },[])
  return (
    <div className="m-0 p-0">
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
            {/* <Route path="/admin">
              <Admin/>
            </Route> */}
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <PrivateRoute path="/client/:id">
              <Client/>
            </PrivateRoute>
            {/* <PrivateRoute path="/client/:key">
              <Client/>
            </PrivateRoute> */}
          </Switch>
        </Router>
        <ScrollToTop showUnder={160}>
          <p className='btn btn-info text-danger font-weight-bold rounded-circle'>UP</p>
        </ScrollToTop>
      </UserContext.Provider>
    </div>
  );
}

export default App;
