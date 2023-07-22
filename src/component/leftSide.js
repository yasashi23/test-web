import React, { useState } from 'react';
import arr from '../chevron-right.svg'
import '../App.css';

export default function LeftSide({menuItems, onSelect}) {
    const [blockChainIsOpen, setBlockChainOpen] = useState(false);
  const [tokenIsOpen, setTokenOpen] = useState(false)
  const [creatorTokenIsOpen, setCreatorTokenOpen] = useState(false)
  const [faqIsOpen, setFaqOpen] = useState(false)

  const [menuSelect,setMenuSelect] = useState('')

  const toggleMenuBlockChain = (item) => {
    setBlockChainOpen(!blockChainIsOpen);
    setMenuSelect(item)
    onSelect(item)
  };
    const toggleMenuToken = (item) => {
    setTokenOpen(!tokenIsOpen);
        setMenuSelect(item)
    onSelect(item)
  };

  const toggleMenuCreatorToken = (item) => {
    setCreatorTokenOpen(!creatorTokenIsOpen);
        setMenuSelect(item)
    onSelect(item)
  };

  const toggleMenuFaq = (item) => {
    setFaqOpen(!faqIsOpen);
        setMenuSelect(item)
    onSelect(item)
  };
  return (
    <div>
         <div className="menu-container">
      <div className="menu" onClick={()=> toggleMenuBlockChain(menuItems[0])}>
        <div className='blockChain'>
          <img src={arr} className={blockChainIsOpen ? 'blockIcon open' : 'blockIcon'} alt="" />
        </div>
        <p>Blockchain</p>
      </div>
      <ul className={blockChainIsOpen ? 'menu-items blockChainMenu open' : 'menu-items blockChainMenu'}>
        <li><a href="#blockchain1">What is blockchain technology?</a></li>
        <li><a href="#blockchain2">How is blockchain different from traditional databases?</a></li>
        <li><a href="#blockchain3">What are the key components of a blockchain network?</a></li>
        <li><a href="#blockchain4">How are transactions verified and added to the blockchain?</a></li>
        <li><a href="#blockchain4">Security of blockchain transactions</a></li>
        <li><a href="#blockchain4">What are the types of blockchains:?</a></li>
        <li><a href="#blockchain4">Smart Contracts & Functionalities</a></li>
        {/* Add more menu items here */}
      </ul>
    </div>

     <div className="menu-container">
      <div className="menu" onClick={()=> toggleMenuToken(menuItems[1])}>
        <div className='blockChain'>
          <img src={arr} className={tokenIsOpen ? 'tokenIcon open' : 'tokenIcon'} alt="" />
        </div>
        <p>Tokens</p>
      </div>
      <ul className={tokenIsOpen ? 'menu-items tokenMenu open' : 'menu-items tokenMenu'}>
        <li><a href="#blockchain1">What is blockchain technology?</a></li>
        <li><a href="#blockchain2">How is blockchain different from traditional databases?</a></li>
        <li><a href="#blockchain3">What are the key components of a blockchain network?</a></li>
        <li><a href="#blockchain4">How are transactions verified and added to the blockchain?</a></li>
        <li><a href="#blockchain4">Security of blockchain transactions</a></li>
        <li><a href="#blockchain4">What are the types of blockchains:?</a></li>
        <li><a href="#blockchain4">Smart Contracts & Functionalities</a></li>
        {/* Add more menu items here */}
      </ul>
    </div>

     <div className="menu-container">
      <div className="menu" onClick={()=> toggleMenuCreatorToken(menuItems[2])}>
        <div className='blockChain'>
          <img src={arr} className={creatorTokenIsOpen ? 'creatorTokenIcon open' : 'creatorTokenIcon'} alt="" />
        </div>
        <p>Creator Tokens</p>
      </div>
      <ul className={creatorTokenIsOpen ? 'menu-items creatorTokenMenu open' : 'menu-items creatorTokenMenu'}>
        <li><a href="#blockchain1">What is blockchain technology?</a></li>
        <li><a href="#blockchain2">How is blockchain different from traditional databases?</a></li>
        <li><a href="#blockchain3">What are the key components of a blockchain network?</a></li>
        <li><a href="#blockchain4">How are transactions verified and added to the blockchain?</a></li>
        <li><a href="#blockchain4">Security of blockchain transactions</a></li>
        <li><a href="#blockchain4">What are the types of blockchains:?</a></li>
        <li><a href="#blockchain4">Smart Contracts & Functionalities</a></li>
        {/* Add more menu items here */}
      </ul>
    </div>

         <div className="menu-container">
      <div className="menu" onClick={()=> toggleMenuFaq(menuItems[3])}>
        <div className='blockChain'>
          <img src={arr} className={faqIsOpen ? 'faqIcon open' : 'faqIcon'} alt="" />
        </div>
        <p>FAQs</p>
      </div>
      <ul className={faqIsOpen ? 'menu-items faqMenu open' : 'menu-items faqMenu'}>
        <li><a href="#blockchain1">What is blockchain technology?</a></li>
        <li><a href="#blockchain2">How is blockchain different from traditional databases?</a></li>
        <li><a href="#blockchain3">What are the key components of a blockchain network?</a></li>
        <li><a href="#blockchain4">How are transactions verified and added to the blockchain?</a></li>
        <li><a href="#blockchain4">Security of blockchain transactions</a></li>
        <li><a href="#blockchain4">What are the types of blockchains:?</a></li>
        <li><a href="#blockchain4">Smart Contracts & Functionalities</a></li>
        {/* Add more menu items here */}
      </ul>
    </div>
    </div>
  )
}
