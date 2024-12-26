import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage';
import './App.scss'
import AboutMe from './components/AboutMe';
import myImage from './billederTilWebApp/HjemmesideBaggrund.png'
import Skills from './components/Skills';
import SafeliiProject from './ComposeAndKotlin/SafeliiProject';
import TimeME from './Tidsregistreringssystem/TimeManagementSystem'
import RAT from './RemoteAccessTrojans/RAT';
import HomeProject from './ReactAndTypeScript/ReactAndTypeScript';
import ProjectGallery from './components/projectGallery';

function App(){
  const [activeSection, setActiveSection] = useState('home');

    const showSection = (section) => {
        setActiveSection(section);
    };

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash === 'aboutMe') {
            showSection('aboutMe');
        } else if (hash === 'skills') {
            showSection('skills');
        } else {
            showSection('home');
        }
    }, []);

  return (
    <>
      <NavigationBar/>
      <div className={'min-h-screen bg-cover bg-center'} 
          style={{backgroundImage: `url(${myImage})`}}>
        <HomePage />
        <div className=''>
          <AboutMe/>
        </div>
        <Skills/>
        <div className='p-0 md:p-8'>
          <ProjectGallery/>
        </div>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
