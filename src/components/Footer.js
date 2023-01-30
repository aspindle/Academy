import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import faOdysee from "../imgs/odysee.png";


function Footer() {
    return (
        <div id="links" className="footerbar">
            
            <div className="verse">
                    <p>For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. - <a href="https://www.blueletterbible.org/nkjv/jhn/3/16/t_conc_1000016">John 3:16</a></p>    
            </div>
            <ul className="footer-links">
                <li className="footer-item">
                <a href="https://www.youtube.com/channel/UCbcm1mHHID3JNDLMmASIRMA?sub_confirmation=1"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
                </li>
                <li className="footer-item">
                <a href="http://www.twitter.com/avatar_polyglot"> <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                </li>
                <li className="footer-item vk">
                <a href="https://www.facebook.com/alex.spindler.50/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                </li>
                <li className="footer-item">
                <a href="http://www.github.com/aspindle"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                </li>
                <li className="footer-item">
                <a href="http://www.instagram.com/spindleracademy"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                </li>
                <li className="footer-item">
                <a href="http://www.linkedin.com/in/alex-spindler"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                </li>
                <li className="footer-item">
                <a href="https://odysee.com/@avatar_alex:8"><img width="16" height="16" src={faOdysee} className="odysee" alt="odysee logo"/></a>
                </li>
            </ul>
        
        </div>
    )
}

export default Footer
