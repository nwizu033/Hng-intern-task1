import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/contact' element={ <Contact/>}/>
      
    </Routes>
    <Footer/>

    </>
  
   
  );
}

export default App;
