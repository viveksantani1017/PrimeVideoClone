import {useState,createContext} from 'react'

const MediaContext = createContext();

export function MediaProvider({children}){
    const [medias,setMedias] = useState([]);
    
    return(
        <MediaContext.Provider value={{item:1}}>
            {children}
        </MediaContext.Provider> 
    )
}
export default MediaContext