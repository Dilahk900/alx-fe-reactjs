import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '15px',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px'
    }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
