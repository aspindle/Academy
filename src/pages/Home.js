import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {

    return (
        <div className="App">
        <Navbar/>
        <p>Welcome to Spindler Academy!</p> <br /> 
        <p>Free educational content for anyone who wants to learn. </p>
        <br />
        
        <p>Follow me on social media below!</p>
        <br />
        <Footer/>
    </div>
    )
}