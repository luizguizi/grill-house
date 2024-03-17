//
import {Routes, Route,BrowserRouter} from 'react-router-dom';


// pages
import Home from "../src/pages/Home/Home";
import Menu from './pages/Menu/Menu';

//styles 
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Specials from './pages/Specials/Specials';
import About from './pages/About/About';
import Method from './pages/Method/Method';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/specials' element={<Specials />} />
        <Route path='/about' element={<About />} />
        <Route path='/method' element={<Method />} />
      </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
