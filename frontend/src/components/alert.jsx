import {toast} from 'react-toastify'
function ColorAlerts(messege,action) {
  if(action==='success'){
    return(
      toast.success(messege,{position:toast.POSITION.BOTTOM_CENTER}) 
    )
  }
  else{
    return (
      toast.error(messege,{position:toast.POSITION.BOTTOM_CENTER})
    )
  }
}
export default ColorAlerts