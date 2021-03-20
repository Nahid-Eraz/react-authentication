import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import { Link } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Signin = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        phone: ''
    })

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result)
                const { displayName, email, phoneNumber } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    phone: phoneNumber
                }
                setUser(signedInUser);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    const handleFacebookSignIn = () => {
        firebase.auth().signInWithPopup(facebookProvider)
            .then((result) => {
                var { displayName, email } = result.user;
                const signedInUser = { displayName }
                setUser(signedInUser);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then((res) => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    phone: '',
                    error: '',
                    success: false
                }
                setUser(signedOutUser);
            })
            .catch((error) => {

            })
    }

    const handleBlur = (e) => {
        let isFieldValid;
        console.log(e.target.name, e.target.value);
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 5;
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
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <input type="text" onBlur={handleBlur} placeholder="Your Name" />
                <br />
                <input type="text" onBlur={handleBlur} name="email" placeholder="Your Email" required />
                <br />
                <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Your Password" required />
                <br />
                <input type="password" onBlur={handleBlur} name="ConfirmPassword" id="" placeholder="Confirm Password" required />
                <br />
                <button>Sign in</button>
                <br />
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
            </form>
            
            <div>
                {/* <button onClick={handleSignOut}>Sign Out</button>
                <br /> */}
                <button onClick={handleGoogleSignIn}>Sign in with Google</button>
                <br />
                <button onClick={handleFacebookSignIn}>Sign in with Facebook</button>
            </div>
            <p style={{ color: 'red' }}>{user.error}</p>
            {
                user.success && <p style={{ color: 'green' }}>User Created Successfully</p>
            }
        </div>
    );
};

export default Signin;