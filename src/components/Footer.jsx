import React from "react";
import "./Footer.css";
import { FaGlobe, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help Centre</li>
            <li>Get help with a safety issue</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighbourhood concern</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Hosting</h4>
          <ul>
            <li>Airbnb your home</li>
            <li>Airbnb your experience</li>
            <li>Airbnb your service</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
            <li>Join a free hosting class</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Airbnb</h4>
          <ul>
            <li>2025 Summer Release</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <span>© 2026 Airbnb, Inc.</span>
          <span>·</span>
          <span>Privacy</span>
          <span>·</span>
          <span>Terms</span>
          <span>·</span>
          <span>Company details</span>
        </div>

        <div className="footer-right">
          <div
            className="footer-globe"
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <FaGlobe />
            <span>English (IN)</span>
          </div>
          <div className="footer-currency">
            <span>₹ INR</span>
          </div>
          <div className="footer-icon-group">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
