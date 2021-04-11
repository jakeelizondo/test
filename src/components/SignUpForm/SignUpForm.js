import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import messageIcon from '../../assets/simple-icon.PNG';
import arrowIcon from '../../assets/arrow.png';
import './SignUpForm.css';

const SignUpForm = () => {
  const [bizName, setBizName] = useState('');
  const [bizWebsite, setBizWebsite] = useState('');
  const [ticketSystem, setTicketSystem] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serviceAccept, setServiceAccept] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('trying to submit');
  };

  const renderFormError = (inputName) => {
    if (inputName === 'bizName') {
      if (!bizName.length > 0) {
        return <ErrorMessage text={'Business Name Required'} />;
      }
    }

    if (inputName === 'bizWebsite') {
      if (!bizWebsite.length > 0) {
        return <ErrorMessage text={'Business Website Required'} />;
      }
    }

    if (inputName === 'ticketSystem') {
      if (!ticketSystem.length > 0) {
        return <ErrorMessage text={'Ticketing System Required'} />;
      }
    }

    if (inputName === 'email') {
      if (
        !email.length > 0 ||
        !email.includes('@') ||
        !email.includes('.com')
      ) {
        return <ErrorMessage text={'Please Enter A Valid Email'} />;
      }
    }

    if (inputName === 'password') {
      if (password.length < 8) {
        return <ErrorMessage text={'Password Must Be At Least 8 Characters'} />;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="form-heading">
        <img src={messageIcon} alt="sign-up-icon" />
        <h3>
          Tell us about <br />
          yourself
        </h3>
      </div>
      <div className="form-body">
        <div className="registration-input">
          <input
            placeholder="What is the name of your business?"
            id="biz-name-input"
            className="input-special"
            value={bizName}
            onChange={(e) => setBizName(e.target.value)}
            required
          />
          {renderFormError('bizName')}
        </div>
        <div className="registration-input">
          <input
            placeholder="Business Website"
            id="biz-website-input"
            value={bizWebsite}
            onChange={(e) => setBizWebsite(e.target.value)}
            required
          />
          {renderFormError('bizWebsite')}
        </div>
        <div className="custom-select">
          <select
            value={ticketSystem}
            onChange={(e) => setTicketSystem(e.target.value)}
            required
            style={{ backgroundImage: arrowIcon }}
          >
            <option selected="selected" value="" hidden>
              Select Your Ticketing System
            </option>
            <option>Zendesk</option>
            <option>Intercom</option>
            <option>Gorgias</option>
          </select>
          {renderFormError('ticketSystem')}
        </div>
        <div className="registration-input">
          <input
            placeholder="Your email"
            id="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {renderFormError('email')}
        </div>
        <div className="registration-input">
          <input
            id="password-input"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {renderFormError('password')}
        </div>
        <div className="accept-service">
          <label class="container">
            <input
              type="checkbox"
              id="service-input"
              value={serviceAccept}
              onChange={() => setServiceAccept(!serviceAccept)}
            />
            <span class="checkmark"></span>I accept to the
            <a href="https://www.jakeelizondo.com">Terms of Service</a>
          </label>
        </div>
      </div>
      <button type="submit" className="signup-button">
        Sign up
      </button>{' '}
    </form>
  );
};

export default SignUpForm;
