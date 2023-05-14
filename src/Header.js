import React from 'react';
import './App.css';
import logo from './logo.svg';

export default function Header({ name }) {
  return (
    <div className='Header'>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to the world of React - {name}</h1>
    </div>
  )
}