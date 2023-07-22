import user from './user.svg';
import wall from './wallet.svg'
import './App.css';
import React, { useState, useEffect } from 'react';
import LeftSide from './component/leftSide';
import BlockChain from './component/rightContent/blockChain';
import Token from './component/rightContent/token';
import CreatorToken from './component/rightContent/creatorToken';
import Faq from './component/rightContent/faq';
import RightSide from './component/rightSide';

function App() {
  const menuItems = ['blockchain', 'token', 'creatorToken', 'faq']; // Add more menu items as needed
  const [selectedItem, setSelectedItem] = useState('blockchain');

  const handleMenuSelect = (item) => {
    setSelectedItem(item);
  };

  // useEffect(() => {
  //   window.addEventListener('scroll',()=>{
  //     let scr = window.scrollY
  //     console.log(scr)
  //   })
  // },[])

  return (
    <div className="App">
      {/* nav bar */}
       <div className="nav-bar">
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
        <LeftSide menuItems={menuItems} onSelect={handleMenuSelect}/>

      </div>



      {/* Right Section (Content) */}
      <div className="right-section">
        <RightSide selectContent={selectedItem}/>
      </div>
      </div>
    </div>
  );
}

export default App;
