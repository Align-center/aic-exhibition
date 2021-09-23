import { Fragment, useEffect, useState } from 'react';
import './App.css';

import Header from './component/Header';

import axios from 'axios';

function App() {

  const [exhibitionData, setExhibitionData] = useState({});
  const [artworksIds, setArtworksIds] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

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
    
        pagedIds = concatIds.match(/([0-9]+,){1,10}/g);
  
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
  
        setArtworks(result.data.data);
      }
  
      fetchArtworks();
    }
  }, [artworksIds, pageIndex]);


  console.log(artworks);

  return (
    <Fragment>
      <Header title={exhibitionData.title} desc={exhibitionData.short_description} />
      <h2>The Artworks</h2>
      <section className='artworks'>
      </section>
    </Fragment>
  );
}

export default App;
