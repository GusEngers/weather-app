import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/components/NavBar/NavBar';
import Footer from './components/components/Footer/Footer';
import Favorites from './components/favorites/Favorites';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
