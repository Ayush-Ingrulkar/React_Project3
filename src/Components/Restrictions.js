// src/Restrictions.js
import React from 'react';
import './Restrictions.css'; // Optional: For styling

const Restrictions = () => {
    return (
        <div className="restrictions-container">
            <h1>Restrictions</h1>
            <p>Welcome to the Apex Restrictions Page. Below are the guidelines that govern our company’s operations and user interactions:</p>

            <h2>1. Access Restrictions</h2>
            <ul>
                <li>Access to certain areas of this website is restricted. Apex reserves the right to restrict access to any area of this website, or indeed this entire website, at Apex’s discretion.</li>
                <li>If Apex provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.</li>
            </ul>

            <h2>2. User Conduct</h2>
            <ul>
                <li>You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</li>
                <li>You must not use this website in any way which is unlawful, illegal, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <ul>
                <li>Unless otherwise stated, Apex and/or its licensors own the intellectual property rights in the website and material on the website.</li>
                <li>You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these restrictions.</li>
            </ul>

            <h2>4. Data Privacy</h2>
            <ul>
                <li>Your privacy is important to us. Apex’s privacy policy explains how we collect, use, and protect your information. Please review it to understand our practices.</li>
            </ul>

            <h2>5. Amendments</h2>
            <ul>
                <li>Apex may revise these restrictions from time to time. Revised restrictions will apply to the use of this website from the date of the publication of the revised restrictions on this website. Please check this page regularly to ensure you are familiar with the current version.</li>
            </ul>
        </div>
    );
};

export default Restrictions;