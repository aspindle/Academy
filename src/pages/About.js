import React from 'react';
import Navbar from '../components/Navbar';
import usa from '../../src/imgs/usa.png';
import free_speech from '../../src/imgs/free_speech.png';

export default function About() {
    return (
        <>
        <Navbar/>
        <h1>About</h1>
        <p>To be written later... </p>
        <img src={usa} className="logo" alt="United States of America"/>
        <br />
        <a href="https://en.wikipedia.org/wiki/Free_Speech_Flag" className='logo-a'><img src={free_speech} className="logo" alt="Freedom of Speech"/></a>
        <br />
        <img src="http://pricecenterplaza.ucsd.edu/mjpg/video.mjpg" className="Camera" alt="UC Scam Diego Live Camera" width="200"/>
        </>
    )
}