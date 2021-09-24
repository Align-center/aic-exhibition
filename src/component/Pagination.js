import React from 'react';
import PaginationLink from './PaginationLink';
import './Pagination.css';

function Pagination({ artworksIds, handlePageChange, pageIndex, setArtworkPending }) {

    return (
        <ul className='pagination'>
            {artworksIds.map((artworksId, index) => (
                <li key={`page-${index + 1}`}>
                    <PaginationLink setArtworkPending={setArtworkPending} pageIndex={pageIndex} handlePageChange={handlePageChange} index={index + 1} />
                </li>
            ))}
        </ul>
    );
}

export default Pagination;