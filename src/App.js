import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar/Navbar';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Home/>
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
