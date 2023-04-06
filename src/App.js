import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
