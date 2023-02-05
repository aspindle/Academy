import React from 'react';
import hardware from '../imgs/donate/8.png';
import gold from '../imgs/donate/9.png';
import should from '../imgs/donate/10.png';
import dca from '../imgs/donate/11.png';
import sand from '../imgs/donate/12.png';
import nocash from '../imgs/donate/13.png';
import Navbar from '../components/Navbar';

export default function Donate() {
    return (
        <>
        <Navbar/>
        <p>I don't want your money.</p>
        <p>So there I was... watching the Tube of You, and recommended to me is a <a href="https://www.youtube.com/watch?v=MNzuP6V0UhA">video</a> about an 18 year old who started a pressure washing business in the state of Florida, USA.</p>
        <p>Neat. Good for him! Living the American dream. I wonder if it would be possible for me to do the same thing here in California. Short answer: No, it's not.</p>
        <p>So what is stopping me? Well, it's not the materials. After a quick trip to a local hardware store I could, in theory, buy the necessary materials to get started.</p>
        <img className="donateimg" src={hardware} alt="hardware" width="600"></img>
        <p>However, in order to start a business in California, you <a href="https://www.sos.ca.gov/business-programs/business-entities/starting-business">"should"</a> have a license:</p>
        <img className="donateimg" src={should} alt="should" width="500"></img>
        <p> I say "should" because it doesn't really specify. All it says is "Most businesses require licenses or permits in order to operate." and links to two other websites. </p>
        <p>The first website listed proved completely useless:</p>
        <img className="donateimg" src={gold} alt="calgold" width="400"></img>
        <p>And the second website proved useful only after I scrolled down the landing page and clicked on "License Search" where there was then a link to the Contractors State License Board (CSLB).</p>
        <img className="donateimg" src={dca} alt="dca" width="400"></img>
        <p>After doing some digging on the CSLB, I found that they have <a href="https://www.cslb.ca.gov/About_Us/Library/Licensing_Classifications/C-61_Limited_Speciality/D-38_-_Sand_And_Water_Blasting.aspx">cleverly crafted</a> the license to include sand blasting.</p>
        <img className="donateimg" src={sand} alt="sand" width="500"></img>
        <p>Despite the fact that I have no interest in sand blasting, what would it take to get the license? According to the <a href="https://www.cslb.ca.gov/Resources/FormsAndApplications/ApplicationForOriginalContractorsLicense.pdf">Application</a> for a Contractors License, I would need to pay a fee... </p>
        <img className="donateimg" src={nocash} alt="nocash" width="500"></img>
        <p>The fact that it says "Do not send cash" is particularly interesting because that seems <a href="https://www.federalreserve.gov/faqs/currency_12772.htm">illegal.</a> </p>
        <p>But don't take my word for it, just look at any dollar bill, it will say "THIS NOTE IS LEGAL TENDER FOR ALL DEBTS PUBLIC AND PRIVATE"</p>
        <p>Thus, it seems California is violating <a href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title31-section5103&num=0&edition=prelim">federal law</a>, which is honestly a bigger fish than I was planning on frying by writing this. </p>
        <p>To be frank, I wanted to talk about how there are pressure washing businesses currently operating in San Diego and how they are most likely unlicensed.</p>
        <p>I wanted to talk about the 4 years of journey-man experience that was required to get the license on top of whatever prerequisite training was needed.</p>
        <p>Instead I'm left with a nagging feeling that California has killed the American dream; I pray I'm wrong.</p>
        </>
    )
}