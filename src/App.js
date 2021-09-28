import { Fragment, useEffect, useRef, useState } from 'react';
import './App.css';

import axios from 'axios';
import { isMobile } from 'react-device-detect';
import Loader from 'react-loader-spinner';
import { useLocation } from 'react-router';

import Header from './component/Header';
import Artwork from './component/Artwork';
import Pagination from './component/Pagination';

function App() {

  const [exhibitionData, setExhibitionData] = useState({});
  const [artworksIds, setArtworksIds] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pending, setPending] = useState(true);
  const [artworkPending, setArtworkPending] = useState(true);

  const location = useLocation();
  const title = useRef(null);
  var artworkElement;

  //When we get the data from the API, update the value of exhibitionData
  useEffect(() => {
    const fetchData = async () => {

      let result = await axios(
        'https://api.artic.edu/api/v1/exhibitions/9106?fields=artwork_ids,id,short_description,title'
      );

      let desc = result.data.data.short_description.replace(/<p>|<\/p>/gi, '');
      
      setExhibitionData({
        ...result.data.data,
        short_description: desc
      });
    }
    fetchData();
  }, []);

  useEffect(() => {

    const concatArtIds = obj => {
      if (obj) {
  
        let concatIds;
        let pagedIds;
    
        for (let i = 0; i < obj.length; i++) {
    
          concatIds += obj[i] + ',';
        }
    
        // If user is on a mobile device, we'll show less artworks on one page
        if (isMobile) {

          pagedIds = concatIds.match(/([0-9]+,){1,10}/g);
        } else {
          
          pagedIds = concatIds.match(/([0-9]+,){1,15}/g);
        }
  
        for (let i = 0; i < pagedIds.length; i++) {
  
          pagedIds[i] = pagedIds[i].replace(/,$/gi, '');
        }
  
        setArtworksIds(pagedIds);
      }
    }

    concatArtIds(exhibitionData.artwork_ids);
  }, [exhibitionData]);

  useEffect(() => {

    if (artworksIds[0]) {

      const fetchArtworks = async () => {
  
        let result = await axios(
          `https://api.artic.edu/api/v1/artworks?ids=${artworksIds[pageIndex]}&fields=artist_display,id,image_id,title`
        );
  
        setArtworkPending(false);
        setPending(false);
        setArtworks(result.data.data);
      }
  
      fetchArtworks();
    }
  }, [artworksIds, pageIndex]);

  useEffect(() => {

    if (title.current) {

      window.scrollTo(title.current.offsetWidth, title.current.offsetTop - 75);
    }
  }, [artworkPending]);

  useEffect(() => {

    parseQuery(location.search);
  }, [location]);

  const parseQuery = query => {
    if (query) {
      
      let newQuery = query.match(/(?<=\?).*/gi);
      let result = newQuery[0].match(/[a-z]{1,}|[1-9]{1,}/gi)
  
      if (result[0] === 'page') {
        setPageIndex(result[1] - 1);
      }
    }
  }

  if (artworkPending) {

    artworkElement = <Loader type='ThreeDots' color='#B00433' className='artworks-loader' />
  } else {

    artworkElement = artworks
      .map(artwork => (
        <Artwork key={artwork.id} artwork={artwork} />
      ));
  }

  if (pending) {
    return <Loader type='Puff' color='#B00433' className='loader' />
  }

  return (
    <Fragment>
      <Header title={exhibitionData.title} desc={exhibitionData.short_description} />
      <h2 ref={title}>The Artworks</h2>
      <section className='artworks'>
        
        {artworkElement}

        <Pagination setArtworkPending={setArtworkPending} pageIndex={pageIndex} artworksIds={artworksIds} />
      </section>

      {/* <Detail visible={isDetailVisible} artworkDetail={artworkDetail} setIsDetailVisible={setIsDetailVisible} /> */}
    </Fragment>
  );
}

export default App;
