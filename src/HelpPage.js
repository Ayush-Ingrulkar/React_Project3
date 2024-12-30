import React from 'react';
import './HelpPage.css'; // Import CSS file

const HelpPage = () => {
  return (
    <div className="help-page">
      <h1>Help Page</h1>
      <p>Welcome to our help page! Here you can find answers to commonly asked questions.</p>
      <section>
        <h2>FAQs</h2>
        <ul>
          <li>
            <strong>How do I create an account?</strong>
            <p>To create an account, click on the 'Sign Up' button and follow the instructions.</p>
          </li>
          <li>
            <strong>How do I reset my password?</strong>
            <p>To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions.</p>
          </li>
          {/* Add more FAQs as needed */}
        </ul>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>If you couldn't find the answer to your question in the FAQs above, feel free to contact us using the form below:</p>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Submit</button>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
