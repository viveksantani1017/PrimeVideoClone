import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { getFilteredMedia, reset } from './features/media/mediaSlice'
function MovieList() {
  const dispatch = useDispatch()
  const location = useLocation()
  const {medias,isError,isLoading,message} = useSelector((state)=>state.medias)
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
            {medias.length>0?(<div>
                {medias.map((media)=>{
                    return(
                    <div key={media._id}>
                        <h1>{media.name}</h1>
                    </div>
                    )
                })}
            </div>):(<h1>No Movie</h1>)}
        </div>
    </div>
    
  )
}

export default MovieList