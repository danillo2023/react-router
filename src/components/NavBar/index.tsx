import { Link } from 'react-router-dom'
import './menu.css'

export function NavBar (){
    return(
        <ul>
           <Link to="/home"> <li>Home</li></Link>
           <Link to="/cliente"> <li>Cliente</li></Link>
         
        </ul>
    )
}