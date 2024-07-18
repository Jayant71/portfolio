import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="Header">
    <div id='header-name' ><h1>Jayant Patel</h1></div>
      <div id="navbar">
        <nav>
        <a href="#about">About me</a>
        <a href="#resume">Resume</a>
        <a href="#work">Work</a>
        <button>Get in touch!</button>
      </nav>
        </div>
    </header>
  );
}

export default Header;
