import React from 'react';
import PaginationLink from './PaginationLink';
import './Pagination.css';

function Pagination({ artworksIds, pageIndex, setArtworkPending }) {

    return (
        <ul className='pagination'>
            {artworksIds.map((artworksId, index) => (
                <li key={`page-${index + 1}`}>
                    <PaginationLink setArtworkPending={setArtworkPending} pageIndex={pageIndex} index={index + 1} />
                </li>
            ))}
        </ul>
    );
}

export default Pagination;