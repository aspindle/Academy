import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
    return (
        <>
        <Link to="/">Back</Link>
        <h1>Blog</h1>
        <a href="https://www.youtube.com/watch?v=CIjnzXxtM-A">Lord of the Most Dangerous Hunger Games</a>
        <br />
        <a href="https://docs.google.com/document/d/1_Mu392CzJ7lmZg-PQ3br3ZxXzCbIN6y3To-EAXGBVlE/edit?usp=sharing">Math in Rome</a>
        <br />
        <a href="https://docs.google.com/document/d/1Xu0NMSasV6-XCsrdHGqUaokclvnWWDViLrzdO1kQwfk/edit?usp=sharing">Goals</a>
        <br />
        <a href="https://docs.google.com/document/d/11qA5EAtMH72luflTaVAydSjEc-e6a4sF-BB5M4WYqW4/edit?usp=sharing">Ideas and Plans</a>
        <br />
        </>
    )
}