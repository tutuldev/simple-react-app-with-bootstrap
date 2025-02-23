import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="mt-3">
          <Link to="/" className="text-white me-3 text-decoration-none">Home</Link>
          <Link to="/about" className="text-white me-3 text-decoration-none">About</Link>
          <Link to="/contact" className="text-white me-3 text-decoration-none">Contact</Link>
          <Link to="/address" className="text-white me-3 text-decoration-none">Address</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
