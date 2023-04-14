import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState, useEffect } from 'react';
import SearchAppBar from './navbar';

const Home = () => {
    const [imageList,setImageList] = useState([]);
    useEffect(()=>{
        ( async _ =>{
             const reponse = await fetch("https://api.unsplash.com/photos/?client_id=tH1DdNC1kthQXkPen-oa8C_m9TPpf_1TXPTEjPaZM3U");
             const data = await reponse.json();
             console.log(data);
             setImageList(data);
        })()
    },[])
  return (
    <div>
        <SearchAppBar />
          <Box sx={{ width: "100vw", overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageList.map((item) => (
          <ImageListItem key={item.img} className='outer-container'>
            <img
              src={`${item.urls.small}?w=248&fit=crop&auto=format`}
              srcSet={`${item.urls.small}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item?.title}
              loading="lazy"
            />
               <div className='inner-elements'>

                <h3>{item?.user?.username}</h3>
                <h3>{item?.user?.updated_at}</h3>
                </div> 
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    
      {/* {imageList.map((elem) => {
        return(
            <div className='outer-container'>
                
            <img src={elem.urls.small} className='image'/>
            <div className='inner-elements'>
                <h3>{elem?.user?.username}</h3>
                <h3>{elem?.user?.updated_at}</h3>
                </div> */}
            {/* </div> */}
        {/* )
      })} */}
    </div>
  )
}

export default Home