import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Destination from './Components/Destination/Destination';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
import Signin from './Components/Login/Signin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blog from './Components/Blog/Blog';

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
            <Route path="/blog">
              <Blog />
            </Route>
            <PrivateRoute path="/destination/:category">
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
