import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicNavbar from './components/Navbar';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <>
      <BasicNavbar />
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
