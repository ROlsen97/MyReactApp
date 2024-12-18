import React, { useEffect, useState } from 'react';
import HomePage from './components/Home/HomePage';
//import AboutMeSection from './AboutMeSection';
import Navigation from './components/Navbar';

function OldLogic() {
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
        <div>
            <Navigation onNavigate={showSection} />
            {activeSection === 'home' && <HomePage />}
            {/* {activeSection === 'aboutMe' && <AboutMeSection />} */}
        </div>
    );
}

export default OldLogic;