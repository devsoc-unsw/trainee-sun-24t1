import React, { useState } from 'react';
import './LoginPage2.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authLogin } from '../../../backend/src/service.js'; 


export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await authLogin(email, password);

      // Go to home profile page if login is successful 
      navigate('/profile'); 
      console.log('Registered successfully');

    } catch (error) {

      setErrorMessage('Login invalid:', error.response.data.error); 
      console.error('Login invalid:', error.message);

      // reset email and password textboxes
      setEmail('');
      setPassword('');
    }
  };

  const handleRegisterClick = () => {
    // go to register page
    navigate('/register'); 
  };

  return (
    <div className="login-page">
      <div className="login">
        LOGIN
      </div>
      <div className="Email-container">
        <label className="Email">
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      </div>
      <div className="password-container">
        <label className="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <div className="register-hyperlink" onClick={handleRegisterClick}>
        Or register here
      </div>
      <div className="enter-button">
        <button className="enter" onClick={handleSubmit}>
          Enter
        </button>
      </div>
    </div>
  );
}