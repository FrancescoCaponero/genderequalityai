import { useState, useEffect } from 'react';
import './Header.scss';
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setIsVisible(true);
      } else {
        setIsScrolled(false);
        setIsVisible(false);

      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = isScrolled ? 'active-header' : '';
  const fixedClasses = isVisible ? ' active-fixed' : '';

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }
  return (
    <div className={`header ${headerClasses}`}>
      <div className={`fixedbtn ${fixedClasses}`} onClick={handleScrollUp}><BsFillArrowUpSquareFill/></div>
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Speakers</a>
          </li>
          <li>
            <a>Schedule</a>
          </li>
          <li>
            <a>Sponsors</a>
          </li>
          <li>
            <a>Info</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
