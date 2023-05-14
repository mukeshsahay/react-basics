import React from 'react';
import profileImage from './profileImage.jpg';

export default function Profile() {
  return (
    <div className="Profile">
      <img src={profileImage} className="App-Profile" alt="logo" />
    </div>
  )
}