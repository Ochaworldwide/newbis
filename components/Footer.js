import React from 'react'
import logoimg from '../images/logo1.svg'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <section>
      <hr className='footline'/>
      <div className="footer">
        <div className="foot footimg">
          <img src={logoimg} alt="logo" />
          <h4>WarmBooks</h4>
        </div>
        <div className="foot">
          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
        </div>
        <div className="foot">
        <Link to="/">Journals</Link>
        <Link to="/">Articles</Link>
        </div>
        <div className="foot">
        <Link to="/">Terms of use</Link>
        <Link to="/">Privacy Policy</Link>
        </div>
        <div className="foot">
        <Link to="/">FAQ</Link>
        <Link to="/">Contact Us</Link>
        </div>
      </div>
      <p className='footp'>WarmBooks ©2023 All Rights Reserved</p>
    </section>
  )
}

export default Footer