import React, { useEffect, useState } from 'react';
import './Detail.css';

import { useParams } from 'react-router';
import axios from 'axios';
import Loader from 'react-loader-spinner';

function Detail() {

    const params = useParams();
    const [artworkDetail, setArtworkDetail] = useState({})
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(
                `https://api.artic.edu/api/v1/artworks/${params.id}?fields=title,artist_title,image_id,date_display,place_of_origin,medium_display,inscriptions,dimensions,credit_line`
                );
            
            setArtworkDetail(result.data.data);
        }

        setPending(false);
        fetchData();
    }, [params.id]);

    console.log(artworkDetail);

    if (pending) {
        return <Loader type='Puff' color='#B00433' className='loader' />
    }

    return (
        <section className='detail'>

            <button className='back'>

                <svg width="6" height="16" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M8.34077 20.0054C8.12731 20.0061 7.9164 19.959 7.72354 19.8675C7.53068 19.776 7.36076 19.6425 7.22628 19.4767L0.325041 10.9038C0.114887 10.6481 0 10.3274 0 9.99645C0 9.66549 0.114887 9.3448 0.325041 9.08914L7.46918 0.516168C7.71171 0.224377 8.06022 0.0408805 8.43804 0.00604609C8.81586 -0.0287884 9.19204 0.0878925 9.48383 0.33042C9.77562 0.572947 9.95912 0.921455 9.99395 1.29927C10.0288 1.67709 9.91211 2.05328 9.66958 2.34507L3.28272 10.0036L9.45526 17.6621C9.62998 17.8718 9.74096 18.1272 9.77508 18.3981C9.8092 18.6689 9.76503 18.9438 9.64779 19.1904C9.53054 19.4369 9.34514 19.6446 9.11351 19.7891C8.88188 19.9335 8.61372 20.0086 8.34077 20.0054Z" fill="black"/>
                </svg>

                <span>Back</span>
            </button>

            <article>

                <img 
                    src={`https://www.artic.edu/iiif/2/${artworkDetail.image_id}/full/600,/0/default.jpg`} 
                    alt={artworkDetail.title} />

                <h2>{artworkDetail.title}</h2>

                <p> 
                    {artworkDetail.artist_title}
                    <span className='date'>{artworkDetail.date_display}</span>
                </p>

                <small>CC0 Public Domain Designation</small>

                <h3>Origin</h3>
                <p>{artworkDetail.place_of_origin}</p>

                <h3>Medium</h3>
                <p>{artworkDetail.medium_display}</p>

                <h3>Inscriptions</h3>
                <p>{artworkDetail.inscriptions}</p>

                <h3>Dimensions</h3>
                <p>{artworkDetail.dimensions}</p>

                <h3>Credit Line</h3>
                <p>{artworkDetail.credit_line}</p>
            </article>
        </section>
    );
}

export default Detail;