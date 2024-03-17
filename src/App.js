import './App.css';
import "./index.css"

import Boxa from './Box1';
import Boxb from './Box2';
import Boxc from './Box3';
import Boxe from './Box5';
import CertificateCarousel from './Certifications';
import Boxd from './Footer';


function App() {
  return (
 <div>

  <div className='Boxa'>
  <Boxa/>
  <Boxc/>
  </div>
  
  <div className='About'>
  <Boxb/>
  </div>
  


  
  <CertificateCarousel />
  <Boxe />
  
  <Boxd/>
        <div>
        <span className="copyright">
                &copy; {new Date().getFullYear()} -designed by Wanjiku
        </span>
        </div>

 </div>
  );
}

export default App;
