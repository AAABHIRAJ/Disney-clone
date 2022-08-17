import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Details from './components/Details';
import Login from './components/Login';
import { useEffect } from 'react';

function App() {

  return (
    <div>
      

      <Router>
        <Navbar />
        <Routes>
          <Route path='/details' element={<Details />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
