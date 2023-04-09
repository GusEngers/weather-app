import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/components/NavBar/NavBar';
import Footer from './components/components/Footer/Footer';
import Favorites from './components/favorites/Favorites';
import Detail from './components/detail/Detail';
import NotFound from './components/not found/NotFound';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
