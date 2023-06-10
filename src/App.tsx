import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Spotext from './Spotext'; // Correct the import statement for Spotext context
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { RequireAuth } from './middlewares/RequireAuth';
import { ReverseAuth } from './middlewares/ReverseAuth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Player from './pages/Player';


function App() {
  const [songInput, setSongInput] = useState('');

  return (
    <Spotext.Provider value={{songInput, setSongInput}}>
      <Router>
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/spotify/:song" element={<RequireAuth><Player/></RequireAuth>} />
          <Route path="/login" element={<ReverseAuth><Login/></ReverseAuth>} />
          <Route path="/register" element={<ReverseAuth><Register/></ReverseAuth>} />
        </Routes>
      </Router>
      <ToastContainer />
    </Spotext.Provider>
  );
}

export default App;
