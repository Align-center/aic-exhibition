import React from 'react';

function PaginationLink({ index, handlePageChange, pageIndex, setArtworkPending }) {

    var className = 'pagination-link';

    if (index - 1 === pageIndex) {
        className += ' active';
    }

    const handleClick = e => {

        setArtworkPending(true);
        handlePageChange(e.target.value)
    } 

    return (
        <button onClick={handleClick} className={className} value={index - 1}>
            {index}
        </button>
    );
}

export default PaginationLink;