import { Grid } from '@mui/material'
import Logo from '../images/primeicon.png'
import './admin.css'

export default function Header() {
    return (   
        <Grid item container marginTop={-1}>
            <nav className='Nav'>
                <Grid item container>
                <img src={Logo} className="LG" alt="Logo" />
                </Grid>
            </nav> 
         </Grid>
    )
}