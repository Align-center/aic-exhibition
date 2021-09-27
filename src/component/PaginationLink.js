import React from 'react';
import { Link } from 'react-router-dom';

function PaginationLink({ index, pageIndex, setArtworkPending }) {

    var className = 'pagination-link';

    if (index - 1 === pageIndex) {
        className += ' active';
    }

    const handleClick = e => {

        setArtworkPending(true);
    } 

    return (
        <Link onClick={handleClick} className={className} to={`/exhibition?page=${index}`}>
            {index}
        </Link>
    );
}

export default PaginationLink;