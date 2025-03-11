import React from "react";
import "../StyleSheets/footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand or Logo */}
        <div className="footer-brand">
          <h2>CarServiceApp</h2>
        </div>

        {/* Navigation Links */}
        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CarServiceApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
