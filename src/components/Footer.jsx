import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="mt-3">
            <a href="#about" className="text-white me-3">About</a>
            <a href="#contact" className="text-white me-3">Contact</a>
            <a href="#address" className="text-white">Address</a>
            {/* <Link to="/" className="text-white me-3">Home</Link>
          <Link to="/about" className="text-white me-3">About</Link>
          <Link to="/contact" className="text-white me-3">Contact</Link>
          <Link to="/address" className="text-white">Address</Link> */}
          </div>
        </div>
      </footer>
    );
};

export default Footer;