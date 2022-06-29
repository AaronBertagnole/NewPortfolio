// eslint-disable-next-line
import React, { Component } from 'react';
import Footer from './Footer';
import './style.css';


export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
        <a className='navbar-brand text-light' href='/'>
          Aaron Bertagnole Portfolio
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item '>
              <a className='nav-link text-light' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item '>
              <a className='nav-link text-light' href='/about'>
                About Me
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-light' href='/contactUs'>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
