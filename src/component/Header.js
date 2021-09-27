import React from 'react';
import './Header.css';

function Header({ title, desc }) {
    return ( 
        <header>
            <img src="https://www.artic.edu/iiif/2/5d3d7ee4-268d-97dd-b557-35c99edbca31/full/800,/0/default.jpg" alt="View of IJsselmonde Seen Across the New Maas" />
            <h1>{title}</h1>
            <p>{desc}</p>
        </header>
    );
}

export default Header;