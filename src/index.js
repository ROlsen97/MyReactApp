import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import AboutMe from './components/AboutMe';

function App(){
  const [activeSection, setActiveSection] = useState('home');

    const showSection = (section) => {
        setActiveSection(section);
    };

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash === 'aboutMe') {
            showSection('aboutMe');
        } else {
            showSection('home');
        }
    }, []);

  return (
    <>
      <NavigationBar/>
      <HomePage />
      <AboutMe/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
