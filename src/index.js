import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicNavbar from './components/Navbar';
import HomePage from './components/Home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import OldLogic from './OldLogic';

function App(){
  return (
    <>
      {/* <OldLogic/> */}
      <HomePage />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
