import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/components/NavBar/NavBar';
import Footer from './components/components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
