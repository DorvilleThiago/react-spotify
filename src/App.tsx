import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Spotext from './Spotext'; // Correct the import statement for Spotext context
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [songInput, setSongInput] = useState('');

  return (
    <Spotext.Provider value={{songInput, setSongInput}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Spotext.Provider>
  );
}

export default App;
