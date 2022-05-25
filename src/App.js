import './App.css'
import Home from './Components/Style/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
 
          <Route path= "/" element={<Home  />}     />
           <Route path= "/about" element={<About />}     />
           <Route path= "/contact" element={<Contact  />}     />

        </Routes>



    </div>
  );
}

export default App;
