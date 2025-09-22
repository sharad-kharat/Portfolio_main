import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';

const ContactMe = ({id}) => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7j6mhkj', 'template_2aolk4d', form.current, {
        publicKey: 'G7k7AsjiExyefm2Yt',
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <h3 className='contact-title'>Contact Me</h3>
      <section id={id} className="contact-section">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> <a href="mailto:sharadkharat214@gmail.com">sharadkharat214@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919067785123">+91 9067785123</a></p>
          <p><strong>Location:</strong> Pune, India</p>
          <div className="social-links">
<a 
  href="https://www.linkedin.com/in/sharad-kharat-20a9a1220/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  LinkedIn
</a>
            <a href="https://github.com/sharad-kharat" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h3>Send me a message</h3>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
          {success && (
            <div className="success-message">
              Message sent successfully!
            </div>
          )}
        </form>
      </section>
    </>
  );
};

export default ContactMe;
