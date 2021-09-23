import React from 'react';
import './Header.css';

function Header({ title, desc }) {
    return ( 
        <header>
            <h1>{title}</h1>
            <p>{desc}</p>
        </header>
    );
}

export default Header;