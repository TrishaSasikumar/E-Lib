import React, { useContext, useRef } from 'react';
import Fixed from '../components/fixed';
import "./styles.css";
import { AuthContext } from '../components/authContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const   Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()
  const { requestAuth } = useContext(AuthContext) 
  return ( 
    <Fixed>
    <div className="container">
      <h1>LOGIN</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input ref={usernameRef} type="email" id="username" name="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button onClick={() => {
          requestAuth({
          email: usernameRef.current.value,
          password: passwordRef.current.value
        }, () => {navigate('/home')})}} type="button">Login</button>
      </form>
      <p>Or sign in with:</p>
      <div className="social-icons">
        <a href="/" className="google"><i className="fab fa-google"></i></a>
        <a href="/" className="github"><i className="fab fa-linkedin"></i></a>
        <a href="/" className="linkedin"><i className="fab fa-github"></i></a>
      </div>
      <p className="register-link">Don't have an account? <Link to={"/register"}>Sign up</Link></p>
    </div>
    </Fixed>
  );
};

export default Login;
