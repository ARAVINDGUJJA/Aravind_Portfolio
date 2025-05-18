import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(24, 26, 27, 0.95);
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  .dot {
    color: var(--neon-green);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover, &.active {
    color: var(--neon-green);
  }
`;

const HireButton = styled(Link)`
  background-color: var(--neon-green);
  color: var(--dark-bg);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">
        My_Portfolio<span className="dot">.</span>
      </Logo>
      <NavLinks>
        <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/services" className={location.pathname === '/services' ? 'active' : ''}>
          Services
        </NavLink>
        <NavLink to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
          Resume
        </NavLink>
        <NavLink to="/work" className={location.pathname === '/work' ? 'active' : ''}>
          Work
        </NavLink>
        <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </NavLink>
        <HireButton to="/contact">Hire me</HireButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 