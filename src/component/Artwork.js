import React, { useState } from 'react';
import './Artwork.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

function Artwork({ artwork }) {

    const [shouldRedirect, setShouldRedirect] = useState(false);

    const handleClick = () => {
        setShouldRedirect(true);        
    }

    if (shouldRedirect) {
        return <Redirect push to={`details/${artwork.id}`} page={2} />
    }

    return (
        <article className='artwork-card' onClick={handleClick}>
            <LazyLoadImage 
                srcSet={
                    `https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg 600w,
                    https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg 700w,
                    https://www.artic.edu/iiif/2/${artwork.image_id}/full/600,/0/default.jpg 1000w`
                    }
                alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <div>
                <p>{artwork.artist_display}</p>
                <Link to={`/details/${artwork.id}`} className='learn-more'>
                    Learn more
                    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13V7M7 7V1M7 7H13M7 7H1" stroke="#B00433" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </Link>
            </div>
        </article> 
    );    
}

export default Artwork;