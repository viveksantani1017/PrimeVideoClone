import React from 'react'
import {useLocation} from 'react-router-dom'
 function Detail() {
    const location = useLocation()
    const{id} = location.state
  return (
    <div>
        <h1>{id}</h1>
    </div>
  )
}

export default Detail