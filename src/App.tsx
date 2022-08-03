import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import WarningModal from './components/GlobalErrorModal/WarningModal';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

      </Routes>
     <WarningModal/>
    </div>
  );
}

export default App;
