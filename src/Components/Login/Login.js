import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { handleGoogleSignIn, initializeLogFramework, handleSignOut, handleFbSignIn, signInWithEmailAndPassword } from './AccountManagement';
import { Link } from 'react-router-dom';
import './Login.css';
import { Container } from 'react-bootstrap';

function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    initializeLogFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponses(res, true);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponses(res, true);
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponses(res, false);
            })
    }

    const handleResponses = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        // debugger;
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponses(res, true);
                })
        }
        e.preventDefault();
    }
    return (
        <Container>
            <div style={{ textAlign: 'center' }} >
                <form onSubmit={handleSubmit} >
                    <h1>Login</h1>
                    <input className="input-item" type="text" onBlur={handleBlur} placeholder="Your Name" />
                    <br />
                    <br />
                    <input className="input-item" type="text" onBlur={handleBlur} name="email" placeholder="Your Email" required />
                    <br />
                    <br />
                    <input className="input-item" type="password" onBlur={handleBlur} name="password" id="" placeholder="Your Password" required />
                    <br />
                    <br />
                    <input type="checkbox" name="newUser" id="" />
                    <label htmlFor="newUser">Remember me</label>
                    <br />
                    <br />
                    <button style={{ backgroundColor: 'rgb(255, 86, 56)', width: '39%'}}>Login</button>
                    <br />
                    <br />
                    <p>Don't have an account? <Link to='/signin'><span>create an account</span></Link></p>
                </form>
                <div>
                    <button style={{ backgroundColor: 'gray', width: '39%'}} onClick={googleSignIn}>Log in with Google</button>
                    <br />
                    <br />
                    <button style={{ backgroundColor: 'blue', width: '39%'}} onClick={fbSignIn}>Log in with Facebook</button>
                </div>
                <p style={{ color: 'red' }}>{user.error}</p>
                {
                    user.success && <p style={{ color: 'green' }}>User Created Successfully</p>
                }
            </div>
        </Container>
    );
};


export default Login;