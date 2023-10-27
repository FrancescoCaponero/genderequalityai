import { useState, useEffect } from 'react';
import './Header.scss';
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const handleMenu = () => {
    setIsVisibleMenu(!isVisibleMenu)
  }

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
      <div className='menu-mobile' onClick={handleMenu}>
      {
          isVisibleMenu ?
        <svg width="30" height="30" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="40.4353" width="57.0731" height="3.67804" transform="rotate(-45 0 40.4353)" fill="#000"/>
          <rect x="5.02734" width="57.0731" height="4.08671" transform="rotate(45 5.02734 0)" fill="#000"/>
        </svg> :
        <svg width="40" height="29" viewBox="0 0 63 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="24.4443" width="62.069" height="4" fill="#fafafa"/>
          <rect width="62.069" height="4.44444" fill="#fafafa"/>
          <rect y="12" width="62.069" height="4" fill="#fafafa"/>
        </svg> 
        }
       
      </div>
      {
          isVisibleMenu ?
      <nav>
        <ul>
          <li>
            <Link  to="home" spy={true} smooth={true} duration={500} onClick={handleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link  to="about" spy={true} smooth={true} duration={500} onClick={handleMenu}>
              About
            </Link >
          </li>
          <li>
            <Link  to="speakers" spy={true} smooth={true} duration={500} onClick={handleMenu}>
              Speakers
            </Link>
          </li>
          <li>
            <Link  to="schedule" spy={true} smooth={true} duration={500} onClick={handleMenu}>
              Schedule
            </Link>
          </li>
          <li>
            <Link to="sponsors" spy={true} smooth={true} duration={500} onClick={handleMenu}>
              Sponsors
            </Link>
          </li>
          <li>
            <Link  to="info" spy={true} smooth={true} duration={500} onClick={handleMenu}>
              Info
            </Link>
          </li>
        </ul>
      </nav>
    :null}
     <nav className='nav2'>
        <ul>
          <li>
            <Link  to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link  to="about" spy={true} smooth={true} duration={500}>
              About
            </Link >
          </li>
          <li>
            <Link  to="speakers" spy={true} smooth={true} duration={500}>
              Speakers
            </Link>
          </li>
          <li>
            <Link  to="schedule" spy={true} smooth={true} duration={500}>
              Schedule
            </Link>
          </li>
          <li>
            <Link to="sponsors" spy={true} smooth={true} duration={500}>
              Sponsors
            </Link>
          </li>
          <li>
            <Link  to="info" spy={true} smooth={true} duration={500}>
              Info
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
