import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from "./Button";

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    // to make it that when window is minimized, shows dropdown logo
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
           <nav className='navbar'>
               <div className="navbar-container">

                   {/*allowing clicking logo to close menu*/}
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Facile Health
                        {/*doctor looking logo*/}
                        <i className="fas fa-user-md"/>
                    </Link>
                   <div className="menu-icon" onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                           <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                               Home
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                               Services
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                               Contact
                           </Link>
                       </li>
                       <li>
                           <Link to='/my-account' className='nav-links-mobile' onClick={closeMobileMenu}>
                               My Account
                           </Link>
                       </li>
                   </ul>
                   {button && <Button buttonStyle='btn--outline'>My Account</Button>}
               </div>
           </nav>
        </>
    )
}

export default Navbar;