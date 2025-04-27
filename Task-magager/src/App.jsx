import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Regestration/Signin';
import Login from './Regestration/Login';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signin />} />       {/* Signup page */}
        <Route path='/login' element={<Login />} />    {/* Login page */}

        <Route path='/home' element={<Home />} />      {/* Home page */}
      </Routes>
    </Router>
  );
}

export default App;
