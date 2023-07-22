import user from './user.svg';
import wall from './wallet.svg'
import arr from './chevron-right.svg'
import './App.css';
import React, { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      {/* nav bar */}
       <div className="nav-bar">
        {/* <h2>Navigation Bar</h2> */}
        {/* Add your navigation links here */}
        <nav>
        <div className="logo">
        {/* Your logo content goes here */}
        <h1>Logo</h1>
      </div>
      <div className="navigation">
        {/* Your navigation links go here */}
        <ul>
          <li>Home</li>
          <li>How it works</li>
          <li>Marketplace</li>
          <li>About Us</li>
          <li>Learn</li>
        </ul>
      </div>
      <div className="login">
        {/* Your login section content goes here */}
        <div className="user">
          <div className="wallet">
            <div className="wallet-icon">
              <img src={wall} alt="" />
            </div>
            <h4>Connect Wallet</h4>
          </div>
          <div className="login-user">
            <img src={user} alt="" />
          </div>
        </div>
      </div>
        </nav>
      </div>

    <div className="bg-cont">
      this is for image
    </div>

      <div className="content">      
       {/* Left Section (Dropdown) */}
      <div className="left-section">
 <div className="menu-container">
      <div className="menu" onClick={toggleMenu}>
        <div className='blockChain'>
          <img src={arr} className={isOpen ? 'blockIcon open' : 'blockIcon'} alt="" />
        </div>
        <p>Blockchain</p>
      </div>
      <ul className={isOpen ? 'menu-items open' : 'menu-items'}>
        <li>What is blockchain technology?</li>
        <li>How is blockchain different from traditional databases?</li>
        <li>What are the key components of a blockchain network?</li>
        <li>How are transactions verified and added to the blockchain?</li>
        <li>Security of blockchain transactions</li>
        <li>What are the types of blockchains:?</li>
        <li>Smart Contracts & Functionalities</li>
        {/* Add more menu items here */}
      </ul>
    </div>
      </div>

      {/* Right Section (Content) */}
      <div className="right-section">
        <h2>Content Section</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in magna
          eleifend, euismod arcu vel, iaculis felis. Duis aliquam arcu vel leo
          eleifend, vel interdum urna facilisis.
        </p>
      </div>
      </div>
    </div>
  );
}

export default App;
