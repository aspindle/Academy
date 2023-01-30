import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {

    return (
    <div className="App">
        <Navbar/>
        <p>Welcome to Spindler Academy!</p> 
        <br /> 
        <p>Free educational content for anyone who wants to learn. </p>
        <br />
        
        <p>Thanks for stopping by!</p>

        <br />
        
        <p className='verse'>For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. - <a href="https://www.blueletterbible.org/nkjv/jhn/3/16/t_conc_1000016">John 3:16</a></p>    
       
        <br />
        
    </div>
    )
}