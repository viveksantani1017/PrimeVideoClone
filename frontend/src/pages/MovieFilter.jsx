import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { getFilteredMedia, reset } from '../features/filter/filterSlice'
function MovieFilter() {
  const imglocation = '.../public/resources/images/coverimages/'
  const dispatch = useDispatch()
  const location = useLocation()
  const {filterMedia,isError,isLoading,message} = useSelector((state)=>state.filterMedia)
  const {lang,genre}  = location.state
  useEffect(()=>{
    if(isError){
        console.log(message)
    }
    dispatch(getFilteredMedia({'lang':lang,'genre':genre}))
    return()=>{
        dispatch(reset())
    }
  },[isError,dispatch,message])
  if(isLoading){
    return(
        <h1>Loading</h1>
    )
  }
    return (
    <div>
        <div>
            {filterMedia.length>0?(<div>
                {filterMedia.map((media)=>{
                    return(
                    <div key={media._id}>
                        <h1>{media.name}</h1>
                        <img src={imglocation+media.coverImg} alt={media.name}/><br />
                        <span>{media.rating}/10</span><br />
                        <span>{media.releaseDate}</span><br />
                        <span>{media.description}</span>
                    </div>
                    )
                })}
            </div>):(<h1>No Movie</h1>)}
        </div>
    </div>
    
  )
}

export default MovieFilter