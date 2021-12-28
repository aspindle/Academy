import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faVk, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div id="links" className="footerbar">
            
            <div class="verse">
                    <p>For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. - John 3:16</p>    
            </div>
            <ul class="footer-links">
                <li class="footer-item">
                <a href="http://www.twitter.com/avatar_polyglot"> <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                </li>
                <li class="footer-item">
                <a href="https://www.youtube.com/channel/UCbcm1mHHID3JNDLMmASIRMA"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
                </li>
                <li class="footer-item">
                <a href="http://www.vk.com/avatar_polyglot"><FontAwesomeIcon icon={faVk}></FontAwesomeIcon></a>
                </li>
                <li class="footer-item">
                <a href="http://www.github.com/aspindle"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                </li>
                <li class="footer-item">
                <a href="http://www.instagram.com/alex_spindier"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                </li>
                <li class="footer-item">
                <a href="http://www.linkedin.com/in/alex-spindler"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                </li>
            </ul>
        
        </div>
    )
}

export default Footer
