import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pgcjgac', 
        'template_ovsw6fv', 
        form.current,
        'pakc_P3-hE93kJimi' // Specify your user ID here

      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="reply_to" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
