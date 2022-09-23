import { Link } from 'react-router-dom';
import logo from '../../src/logo.png';
import React, {useState, useEffect} from 'react';
import '../styles/two_bar.scss';


function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
        

    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);

        }

        window.addEventListener('resize',changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])


    return (
        <>
        <header className="App-header">
        <nav id="myTopnav" className="navbar">
            <div className="container">
            
            <a href="/" className='logo-a'><img src={logo} className="logo" alt="Spindler Academy logo"/></a>
            
            {(screenWidth > 768 ) && (
                <ul className="nav-links">
                    <li className="nav-item">
                        <a href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/donate">Donate</Link>
                    </li>
                    
                </ul>
            )}
            
            
            {/* old hamburger menu
            <span onClick={toggleNav} className="navTrigger" >
                    <i></i>
                    <i></i>
                    <i></i>
            </span>*/}

            
            <div onClick={toggleNav} class="menu-icon navTrigger">
                <input class="menu-icon__cheeckbox" type="checkbox" />
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>


            </div>
        </nav>

        {(toggleMenu && screenWidth < 768) && (
                <ul className="nav-links">
                    <li className="nav-item">
                        <a href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/donate">Donate</Link>
                    </li>
                    
                </ul>
        )}
        </header>
        </>
    )
}

export default Navbar
