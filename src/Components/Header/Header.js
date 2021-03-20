import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h2>GO Rider</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav nav-text">
                        <p className="nav-link">{loggedInUser.name}</p>
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/destination">Destination</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <Link className="nav-link" to="/signin">Sign In</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;