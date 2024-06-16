import { Fragment } from 'react';
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
            <img style={{ height: "80px", width: '90px', marginLeft: '-1.2rem' }} src="/logo.png" alt="" />
            <div className='footer-para'>Clarity gives you the blocks and components you need to create a truly professional website.</div>
            <div className="social-icons">
              <a href="https://twitter.com/AIISCA1957" target="_blank" rel="noopener noreferrer"><RiTwitterXFill /></a>
              <a href="https://www.facebook.com/profile.php?id=100094911592602&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com/aiisca?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
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
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
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

export default Footer;
