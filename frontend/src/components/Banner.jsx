import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import bannerList from './bannerList';
function Banner() {
  return (
    <div >
                    <Splide options={{
                        perPage:1,
                        arrows:true,
                        pagination:true,
                        drag:"free",
                        autoplay:true,
                        type:'loop'
                    }}>
                           {bannerList.map((banner)=>{
                        return(
                            <SplideSlide key={banner.id}>
                                    <img src={banner.src} alt={banner.src} className='banner-img'/>
                            </SplideSlide>
                        );
                    })} 
                    </Splide>
                    </div>
  )
}

export default Banner