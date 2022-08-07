import axios from 'axios'
import {useEffect,useState} from 'react'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'
import showGenre from './showGenre'
import movieGenre from './movieGenre'
import languageList from './languageList.js'
function MovieSliders() {
    const imglocation = '../resources/images/coverimages/'
    const [media,setMedia] = useState([]);
    // const [drama,setDrama] = useState([]);
    const getMovies = async ()=>{
        const response = await axios.get("http://localhost:5000/api/media")
        const filter = response.data.filter(d=>d.type==='Movie')
        setMedia(filter)
    }
    const drama = media.filter(({genre})=>genre.includes('Drama'))
    const thriller = media.filter(({genre})=>genre.includes('Thriller'))
    const oscars = media.filter(m=>m.isOscarNominee === true)
    const english = media.filter(m=>m.lang === 'English')
    useEffect(()=>{
        getMovies()
    },[])
  return (
    <>
    <div className='slider-wrapper'>
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
                                <Link to={"/category"} state={{'lang':language.lang, 'genre':'' }}>
                                    <img src={language.src} alt={language.lang} style={{borderRadius:'3px'}} className='smallBanner-img'/>
                                </Link>
                                  <span className="img-name">{language.lang}</span>
                            </SplideSlide>
                        );
                    })} 
                    </Splide>
                    </div>

      {/* Drama */}
      <div className="slider-wrapper">
        <h3>Drama movies</h3>
        <Link
          to={"/category"}
          state={{ lang: "", genre: "Drama" }}
          style={{ display: "", textDecoration: "none", color: "blue" }}
        >
          See more
        </Link>
        <br />
        <Splide
          options={{
            perPage: 5,
            arrows: true,
            pagination: false,
            drag: "free",
            autoplay: true,
            gap: "1rem",
          }}
          className="splide-custom"
        >
          {drama.map((d) => {
            return (
              <SplideSlide key={d._id} className="movielist-wrapper">
                <img src={imglocation + d.coverImg} className="movie-img" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      {/* Oscars */}
      <div className="slider-wrapper">
        <h3>ACADEMY AWARD nominees and winners</h3>
        <Link
          to={"/category"}
          style={{ display: "", textDecoration: "none", color: "blue" }}
        >
          See more
        </Link>
        <br />
        <Splide
          options={{
            perPage: 5,
            arrows: true,
            pagination: false,
            drag: "free",
            autoplay: true,
            gap: "1rem",
          }}
          className="splide-custom"
        >
          {oscars.map((o) => {
            return (
              <SplideSlide key={o._id} className="movielist-wrapper">
                <img src={imglocation + o.coverImg} className="movie-img" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      {/* Thriller */}
      <div className="slider-wrapper">
        <h3>Thriller Movies</h3>
        <Link
          to={"/category"}
          state={{ lang: "", genre: "Thriller" }}
          style={{ display: "", textDecoration: "none", color: "blue" }}
        >
          See more
        </Link>
        <br />
        <Splide
          options={{
            perPage: 5,
            arrows: true,
            pagination: false,
            drag: "free",
            autoplay: true,
            gap: "1rem",
          }}
          className="splide-custom"
        >
          {thriller.map((t) => {
            return (
              <SplideSlide key={t._id} className="movielist-wrapper">
                <img src={imglocation + t.coverImg} className="movie-img" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      {/* English */}
      <div className="slider-wrapper">
        <h3>Movies in English</h3>
        <Link
          to={"/category"}
          state={{ lang: "English", genre: "" }}
          style={{ display: "", textDecoration: "none", color: "blue" }}
        >
          See more
        </Link>
        <br />
        <Splide
          options={{
            perPage: 5,
            arrows: true,
            pagination: false,
            drag: "free",
            autoplay: true,
            gap: "1rem",
          }}
          className="splide-custom"
        >
          {english.map((e) => {
            return (
              <SplideSlide key={e._id} className="movielist-wrapper">
                <img src={imglocation + e.coverImg} className="movie-img" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      {/* Show Genre */}
      <div className="slider-wrapper">
        <h3 style={{ marginBottom: "10px" }}>Tv Genres</h3>
        <Splide
          options={{
            perPage: 10,
            arrows: false,
            pagination: false,
            autoplay: false,
            gap: "1rem",
          }}
          className="splide-custom"
        >
          {showGenre.map((show) => {
            return (
              <SplideSlide key={show.id}>
                <Link
                  to={"/category"}
                  style={{
                    position: "relative",
                    textAlign: "center",
                    color: "white",
                    textDecoration: "none",
                  }}
                  state={{ lang: "", genre: show.genre,type:'Show' }}
                >
                  <img
                    src={show.src}
                    alt={show.lang}
                    style={{ borderRadius: "3px" }}
                    className="smallBanner-img"
                  />
                  <span className="img-name">{show.genre}</span>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      {/* Movie Genre */}
      <div className="slider-wrapper">
        <h3 style={{ marginBottom: "10px" }}>Movie Genres</h3>
        <Splide
          options={{
            perPage: 10,
            arrows: false,
            pagination: false,
            autoplay: false,
            gap: "1rem",
          }}
          className="splide-custom"
        >
          {movieGenre.map((movie) => {
            return (
              <SplideSlide key={movie.id}>
                <Link
                  to={"/category"}
                  style={{
                    position: "relative",
                    textAlign: "center",
                    color: "white",
                    textDecoration: "none",
                  }}
                  state={{ lang: "", genre: movie.genre,type:'Movie' }}
                >
                  <img
                    src={movie.src}
                    alt={movie.lang}
                    style={{ borderRadius: "3px" }}
                    className="smallBanner-img"
                  />
                  <span className="img-name">{movie.genre}</span>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default MovieSliders