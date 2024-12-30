// src/Dashboard.js
import React, { useContext } from 'react';
import { UserContext } from '../UserContext'; // Import UserContext
import './Dashboard.css'; // Import CSS for styling


const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Stay on top of your tasks and activities</p>
      </header>
      
      <div className="dashboard-main">
        <section className="profile-overview">
          <h2>Profile Overview</h2>
          <div className="profile-card">
            <img src="C:\Users\Shreyash\OneDrive\Desktop\OIP.jpg" alt="Profile" className="profile-image"/>
            <div className="profile-details">
              <h3>{user.email}</h3>
              <p>Last login: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>
        
        <section className="user-data">
          <h2>Recent Entries</h2>
          <div className="data-card">
            <h3>Your Recent Activities</h3>
            <p>Here you can see the recent activities you performed on the website.</p>
            {/* Add more details as needed */}
          </div>
        </section>
      </div>
      
      <nav className="dashboard-nav">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#profile">Profile Settings</a></li>
          <li><a href="#tasks">Your Tasks</a></li>
          <li><a href="#notifications">Notifications</a></li>
          <li><a href="#settings">Account Settings</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;