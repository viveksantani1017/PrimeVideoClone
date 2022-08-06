import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import languageList from './languageList.js'
function Language() {
  return (
    <div>
                    <h3  style={{marginBottom:'10px'}}>Watch in Your Language</h3>
                    <Splide options={{
                        perPage:10,
                        arrows:false,
                        pagination:false,
                        autoplay:false,
                        gap:'1rem'
                    }}>
                           {languageList.map((language)=>{
                        return(
                            <SplideSlide key={language.id}>
                                <Link to={"/api/media/filter"} state={{'lang':language.lang, 'genre':'' }}>
                                    <img src={language.src} alt={language.lang} style={{borderRadius:'3px'}} className='banner-img'/>
                                </Link>
                            </SplideSlide>
                        );
                    })} 
                    </Splide>
                    </div>

  )
}

export default Language