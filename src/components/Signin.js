// Signin.js
import React, { useRef, useEffect, useState } from 'react';
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import '../css/Signin.css'
const Signin = () => {
  const [arrowRight, setArrowRight] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const needhandler = () => {
    setArrowRight(!arrowRight);
  };

  return (
    <div id='outside-border'>
      <header>
        <img src='https://shorturl.at/mWoyF' alt='amazon-logo' id='amazon-logo' />
        <p id='domain-name'>.in</p>
      </header>

      <div id='signin-block'>
        <content>
          <p id='signin-text'>Sign in</p>
          <label htmlFor='input-field' id='email-label'>Email or mobile phone number</label><br />
          <input name='input-field' ref={inputRef} /><br />
          <button id='continue-btn'>Continue</button>
          <p id='agreement'>By continuing, you agree to Amazon's <a href='https://shorturl.at/S4iHs' id='agreement-a'>Conditions of Use</a> and <a href='https://shorturl.at/Fygy9' id='agreement-a'>Privacy Notice.</a></p>

          <div>
            <p id='help-text'>{arrowRight ? <IoMdArrowDropright onClick={needhandler} /> : <IoMdArrowDropdown onClick={needhandler} />}
              <span id='help-text-span' onClick={needhandler}>Need help?</span>
            </p>
            {!arrowRight && <div><a id='forgot-text' href='https://shorturl.at/UYHod'>Forgot Password?</a><br />
              <a id='issue-text' href='https://shorturl.at/pLfJ8'>Other issues with Sign-In</a></div>}
          </div>

          <p id='buy-text'>Buying for work?</p>
          <a href='https://shorturl.at/MZkog' id='shop-text-a'><p id='shop-text'>Shop on Amazon Business</p></a>
        </content>
      </div>
      <p id='new-user'>New to Amazon?</p>
      <div id='new-account-block'>
        <a href='./Signup'>Create your Amazon account</a>
      </div>

     
    </div>
  );
};

export default Signin
