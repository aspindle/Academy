import React from 'react';
import { Link } from 'react-router-dom';

export default function my404() {
    return (
        <>
        <Link to="/">Back</Link>
        <h1>404 Page not found, please click Back</h1>
        </>
    )
}