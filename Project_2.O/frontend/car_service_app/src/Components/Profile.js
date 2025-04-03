import React, { useState } from 'react';
import '../StyleSheets/profile.css';
import Header from './Header';

const Profile = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Car enthusiast and professional mechanic with over 10 years of experience.',
    location: 'Panjim, Goa, India',
    profilePicture: '/assets/profile1.jpg', // Ensure this image is in the public folder
  });

  return (
    <div>
    <Header/>
    <hr/>
    <div className="profile-container">
        
      <div className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-pic" />
        <h1>{user.name}</h1>
        <p>{user.location}</p>
      </div>
      <div className="profile-body">
        <h2>About Me</h2>
        <p>{user.bio}</p>
        <h2>Contact Information</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
    </div>
  );
};

export default Profile;
