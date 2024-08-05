import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import shakeImg from "../assets/shake.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(false);

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setMessage(true);
    }, (err) => {
      console.error('FAILED...', err);
      setMessage(false);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src={shakeImg} alt=''/>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type='email' 
            name='email' 
            placeholder='Email' 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name='message' 
            placeholder='Message' 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
          <button type='submit'>Send</button>
          {message && <h3>Thanks, I will reply ASAP :</h3>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
