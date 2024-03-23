import {Fragment} from 'react';
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./Footer.css";
import NewsLatter from './NewsLatter';

const Footer = () => {
  return (
    <Fragment>
      <div className="newsletter-container">
        <NewsLatter />
      </div>
      <footer className="footer">
        <div className="section">
          <div className="email-signup">
          <img style={{height:"80px", width:'90px', marginLeft:'-1.2rem'}} src="/logo.png" alt="" />
            <div className='footer-para'>Clarity gives you the blocks and components you need to create a truly professional website.</div>
            <div className="social-icons">
              <RiTwitterXFill />
              <FaFacebook />
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="section">
          <h2>Help</h2>
          <z>Customer Support</z>
          <z>Delivery Details</z>
          <z>Terms & Conditions</z>
          <z>Privacy Policy</z>
        </div>

        <div className="section">
          <h2>Resources</h2>
          <ul>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
