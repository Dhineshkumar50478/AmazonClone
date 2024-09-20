// Signup.js
import React, { useRef, useEffect, useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import axios from 'axios';
import CountrySelect from './CountrySelect';
import '../css/Signup.css';

const Signup = () => {
  const inputRef = useRef(null);
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { username, mobileNumber, password };
      console.log('Sending user data:', userData); // Log the data being sent
      const response = await axios.post('http://localhost:3500/api/users', userData);
      console.log('User saved:', response.data);
    } catch (error) {
      console.error('Error saving user:', error.response?.data || error.message);
    }
  };

  const sendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3500/send-otp', { mobileNumber });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('Failed to send OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3500/verify-otp', { mobileNumber, otp });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setMessage('Failed to verify OTP');
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  return (
 
    <div id='outside-border'>
      <header id='header'>
        <img src='https://shorturl.at/mWoyF' alt='amazon-logo' id='amazon-logo' />
        <p id='domain-name'>.in</p>
      </header>

      <div id='signup-block'>
        <div>
          <p id='signup-text'>Create Account</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor='input-field-name' id='name-label'>Your name</label><br />
            <input
              name='input-field-name'
              ref={inputRef}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            /><br />

            <label htmlFor='input-field-mobile' id='mobile-label'>Mobile number</label><br />
            <div id='mobile-block'>
              <CountrySelect/>
              <input
                name='input-field-mobile'
                id='mobile-input'
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              /><br />
            </div>

            <label htmlFor='input-field-password' id='password-label'>Password</label><br />
            <input
              name='input-field-password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /><br />
            <p id='password-condition-text'>
              <i id='i-symbol'>i</i>Passwords must be at least 6 characters
            </p>

            <p id='password-verify-procedure'>
              To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
            </p>

            <button id='send-otp-btn' type='button' onClick={sendOtp}>Send OTP</button>

            <label htmlFor='input-field-otp' id='otp-label'>Enter OTP</label><br />
            <input
              name='input-field-otp'
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            /><br />

            <button id='verify-otp-btn' type='button' onClick={verifyOtp}>Verify OTP</button>

            <button id='continue-btn' type='submit'>Sign Up</button>
          </form>

          <p id='message-text'>{message}</p>

          <p id='buy-text'>Buying for work?</p>
          <a href='https://shorturl.at/MZkog' id='account-text-a'>
            <p id='account-text'>Create a free business account</p>
          </a>

          <p id='signin-option'>
            Already have an account? <a href='./Signin'>Sign in<IoMdArrowDropright /></a>
          </p>

          <button>Forgot Password?</button>

          <p id='agreement'>
            By creating an account or logging in, you agree to Amazon's
            <a href='https://shorturl.at/S4iHs' id='agreement-a'>Conditions of Use</a> and
            <a href='https://shorturl.at/Fygy9' id='agreement-a'>Privacy Notice.</a>
          </p>
        </div>
      </div>

      <div id='footer-block'>
        <a href='https://shorturl.at/pwHXj'><p>Condition of use</p></a>
        <a href='https://shorturl.at/qSe5K'><p>Privacy Notice</p></a>
        <a href='https://shorturl.at/NBY0e'><p>Help</p></a>
      </div>
      <p id='copyright-text'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
    </div>
  );
};

export default Signup