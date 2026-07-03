import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage';
import './App.scss'
import AboutMe from './components/AboutMe';
import myImage from './billederTilWebApp/HjemmesideBaggrund.png'
import Skills from './components/Skills';
import ProjectGallery from './components/projectGallery';

function App(){
  return (
    <>
      <NavigationBar/>
      <div className={'min-h-screen bg-cover bg-center'} 
          style={{backgroundImage: `url(${myImage})`}}>
        <HomePage />
        <div className='py-20'>
          <AboutMe/>
        </div>
        <div className='p-0 md:p-12'>
          <ProjectGallery/>
        </div>
        <div className='py-20'>  
          <Skills/>
        </div>
        {/* <div className='py-5'>
          <ContactFormular/>
        </div> */}
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
