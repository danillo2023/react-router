import { BrowserRouter, Routes , Route} from 'react-router-dom'
import { NavBar } from './../components/NavBar'

import { Cliente } from './../pages/Cliente'
import { Home } from './../pages/Home'

export function RouterApp(){
    return(
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route path='/' element={ < Home />} />
            <Route path='/home' element={ < Home /> } />
            <Route path='/cliente' element={ <Cliente /> } />
         </Routes>
    </BrowserRouter>
)
}