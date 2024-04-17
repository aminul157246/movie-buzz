import React from 'react';

const Footer = () => {
    return (
        <div className='list-none'>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <li className="link link-hover">Branding</li>
    <li className="link link-hover">Design</li>
    <li className="link link-hover">Marketing</li>
    <li className="link link-hover">Advertisement</li>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <li className="link link-hover">About us</li>
    <li className="link link-hover">Contact</li>
    <li className="link link-hover">Jobs</li>
    <li className="link link-hover">Press kit</li>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <li className="link link-hover">Terms of use</li>
    <li className="link link-hover">Privacy policy</li>
    <li className="link link-hover">Cookie policy</li>
  </nav>
</footer>
        </div>
    );
};

export default Footer;