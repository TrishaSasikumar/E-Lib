import React from 'react';
import Fixed from '../components/fixed';
import "./styles.css";
import { Link } from 'react-router-dom';



const Register = () => {
  return (
    
    <Fixed>

    <div className="container">
      <h1>REGISTER</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        {/* <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div> */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
      <div className="social-login">
        <p>Or sign up with:</p>
        <div className="social-icons">
          <a href="/" className="google"><i className="fab fa-google"></i></a>
          <a href="/" className="linkedin"><i className="fab fa-linkedin"></i></a>
          <a href="/" className="github"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <p>Already have an account? <Link to="/login">Sign in</Link></p>
      
    </div>
    </Fixed>
  );
};

export default Register;
