import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { getMediaByType, reset } from '../features/media/mediaSlice'
import { getFilteredMedia } from '../features/filter/filterSlice'
function MovieList() {
  const imglocation = process.env.PUBLIC_URL + '/resources/images/coverimages/'
  const dispatch = useDispatch()
  const location = useLocation()
  const {medias,isError,isLoading,message} = useSelector((state)=>state.medias)
  const {lang,genre,type}  = location.state
  useEffect(()=>{
    if(isError){
        console.log(message)
    }
    dispatch(getFilteredMedia({'lang':lang,'genre':genre,'type':type}))
    dispatch(getMediaByType({'type':type}))
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
            {medias.length>0?(<div>
                {medias.map((media)=>{
                    return(
                    <div key={media._id}>
                        <h1>{media.name}</h1>
                        <img src={ imglocation + media.coverImg} alt={media.name}/><br />
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

export default MovieList