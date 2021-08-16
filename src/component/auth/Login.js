import React, { useState } from 'react';
import './Login.css';
import { auth, provider, providerFb } from '../../firebase';

function Login() {

    /*
    const array = useState("");
    var email = array[0];
    const setEmail = array[1];
    array[1]
    */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((e) => alert(e.message));

        console.log(auth);
    }

    const signInFb = () => {
        auth.signInWithPopup(providerFb)
        .catch((e) => alert(e.message));

        console.log(auth);
    }

    const handleLogin = (e) => {

        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
        })
        .catch((e) => alert(e.message));

        setEmail("")
        setPassword("")
    }
    const handleRegister = (e) => {

        e.preventDefault()
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth) {
                console.log(auth)
            }
        })
        .catch((e) => alert(e.message));

        setEmail("")
        setPassword("")
    }
    return (
        <div className="login">
            <div className="login__container">
                <div className='login__logo'>
                    <img
                        src="https://www.instituteofhospitality.org/wp-content/uploads/2019/07/Jain-Logo.png"
                        alt=""
                    />
                </div>
                <div className="login__desc">
                    <p>A place to share queries and answers for better understanding</p>
                    <h3 style={{ color: "royalblue", fontsize: "25px" }}>Handcrafted by Jain University Students</h3>
                </div>
                <div className="login__auth">
                    <div className="login__authOptions">
                        <div className="login__authOption">
                            <img
                                className="login__googleAuth"
                                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                alt=""
                                />
                            <p onClick={signIn}>Continue With Google</p>
                        </div>
                        <div className="login__authOption">
                        <img
                                className="login__googleAuth"
                                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                                alt=""
                                />
                            <p onClick={signInFb}>Continue With Facebook</p>
                        </div>
                        <div className="login__authDesc">
                            <p>
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                    Sign Up With Email
                                </span>
                                <br />
                                By continuing you indicate that you have read and agree to JU Query's{" "}   
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                     Code of Conduct{" "}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="login__emailPass">
                        <div className="login__label">
                            <h4>Login</h4>
                        </div>
                        <div className="login__inputFields">
                            <div  className="login__inputField">
                                <input
                                    value = {email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div  className="login__inputField">
                                <input
                                    value = {password}
                                    onChange = {(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="login__forgButt">
                            <small>Forgot Password?</small>
                            <button type="submit" onClick = {handleLogin}>Login</button>
                        </div>
                        <button onClick = {handleRegister}>Register</button>
                    </div>
                </div>

                <div className="login__footer">
                    <p>About</p>
                    <p>Contact</p>
                    <p>Code of Conduct</p>
                    <p>&copy; JU Query Inc. 2021</p>
                </div>
            </div>
        </div>
    );
}

export default Login;