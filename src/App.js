import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Destination from './Components/Destination/Destination';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
import Signin from './Components/Login/Signin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const CategoryContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [category, setCategory] = useState('Bike', 'Car', 'Bus', 'Train')
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <PrivateRoute path="/destination">
              <Destination />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
