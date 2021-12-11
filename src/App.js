import './App.css';
import Home from './components/Home'
import Destinations from './components/Destinations'
import Partner from './components/Partner'
import About from './components/About'
import Navigation from './components/Navigation'


import {
 
  Routes,
  Route
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faChevronRight, faStar)

function App() {
  return (
         
             
           <>
             <Navigation />
             <Routes>
               
                  <Route path="/" element={<Home />} />
                  <Route path="/destinations" element={<Destinations/>} />
                  <Route path="/partner" element={<Partner/>} />
                  <Route path="/about" element={<About/>} />
                  
              </Routes>


          
          
           </>
             
        
  );
}

export default App;
