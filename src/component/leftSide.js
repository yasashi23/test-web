import React, { useState } from 'react';
import arr from '../chevron-right.svg'
import '../App.css';

export default function LeftSide({menuItems, onSelect}) {
    const [blockChainIsOpen, setBlockChainOpen] = useState(false);
  const [tokenIsOpen, setTokenOpen] = useState(false)
  const [creatorTokenIsOpen, setCreatorTokenOpen] = useState(false)
  const [faqIsOpen, setFaqOpen] = useState(false)

  const [menuSelect,setMenuSelect] = useState('blockchain')

  const toggleMenuBlockChain = (item) => {
      setMenuSelect(item)
      onSelect(item)
      setBlockChainOpen(!blockChainIsOpen);
  };
    const toggleMenuToken = (item) => {
        setMenuSelect(item)
        onSelect(item)
        setTokenOpen(!tokenIsOpen);
  };

  const toggleMenuCreatorToken = (item) => {
      setMenuSelect(item)
      onSelect(item)
      setCreatorTokenOpen(!creatorTokenIsOpen);
  };

  const toggleMenuFaq = (item) => {
      setMenuSelect(item)
      onSelect(item)
      setFaqOpen(!faqIsOpen);
  };
  return (
    <div>
         <div className="menu-container">
      <div className={menuSelect === menuItems[0]? 'menu  active': 'menu'} onClick={()=> toggleMenuBlockChain(menuItems[0])}>
        <div className='blockChain'>
          <img src={arr} className={menuSelect === menuItems[0] && blockChainIsOpen ? 'blockIcon open' : 'blockIcon'} alt="" />
        </div>
        <p>Blockchain</p>
      </div>
      <ul className={menuSelect === menuItems[0] &&blockChainIsOpen ? 'menu-items blockChainMenu open' : 'menu-items blockChainMenu'}>
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
      <div className={menuSelect === menuItems[1]? 'menu  active': 'menu'} onClick={()=> toggleMenuToken(menuItems[1])}>
        <div className='blockChain'>
          <img src={arr} className={menuSelect === menuItems[1] && tokenIsOpen ? 'tokenIcon open' : 'tokenIcon'} alt="" />
        </div>
        <p>Tokens</p>
      </div>
      <ul className={menuSelect === menuItems[1] &&tokenIsOpen ? 'menu-items tokenMenu open' : 'menu-items tokenMenu'}>
        <li><a href="#blockchain1">What are tokens in the blockchain ecosystem?</a></li>
        <li><a href="#blockchain2">How do tokens differ from cryptocurrencies like Bitcoin and Ethereum?</a></li>
        <li><a href="#blockchain3">What role does the ERC-20 standard play in token development on Ethereum?</a></li>
        <li><a href="#blockchain4">How are tokens stored and managed in blockchain wallets?</a></li>
        {/* Add more menu items here */}
      </ul>
    </div>

     <div className="menu-container">
      <div className={menuSelect === menuItems[2]? 'menu  active': 'menu'} onClick={()=> toggleMenuCreatorToken(menuItems[2])}>
        <div className='blockChain'>
          <img src={arr} className={menuSelect === menuItems[2]&&creatorTokenIsOpen ? 'creatorTokenIcon open' : 'creatorTokenIcon'} alt="" />
        </div>
        <p>Creator Tokens</p>
      </div>
      <ul className={menuSelect === menuItems[2] && creatorTokenIsOpen ? 'menu-items creatorTokenMenu open' : 'menu-items creatorTokenMenu'}>
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
      <div className={menuSelect === menuItems[3]? 'menu  active': 'menu'} onClick={()=> toggleMenuFaq(menuItems[3])}>
        <div className='blockChain'>
          <img src={arr} className={menuSelect === menuItems[3]&&faqIsOpen ? 'faqIcon open' : 'faqIcon'} alt="" />
        </div>
        <p>FAQs</p>
      </div>
      <ul className={menuSelect === menuItems[3]&&faqIsOpen ? 'menu-items faqMenu open' : 'menu-items faqMenu'}>
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
