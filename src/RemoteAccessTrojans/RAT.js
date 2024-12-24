import React from 'react';
import './RAT.css'; // Importer CSS-filen

function RAT() {
    return (
        <section id="RAT" className="rat-section">
            <div className="rat-container">
                <div className="rat-image">
                    <img
                        src="path/to/your/image.jpg" // Juster stien til dit billede
                        alt="Remote Access Trojans Project"
                    />
                </div>
                <div className="rat-text">
                    <h1 className="text-3xl font-bold mb-4">Remote Access Trojans Projekt</h1>
                    <p className="text-lg font-serif leading-relaxed">
                        Dette projekt fokuserede på undersøgelse og udvikling af Remote Access Trojans (RATs). <br />
                        Formålet var at forstå, hvordan RATs fungerer, og hvordan man kan beskytte sig mod dem. <br />
                        Jeg arbejdede med teknologier som [nævn teknologier], og projektet omfattede [beskriv projektets omfang]. <br />
                        En af de største udfordringer var [beskriv en udfordring], men jeg løste det ved at [beskriv løsningen]. <br />
                        Resultatet var en dybdegående forståelse af RATs og udvikling af værktøjer til at opdage og forhindre dem. <br /><br />
                        
                        Dette projekt gav mig værdifuld erfaring inden for cybersecurity og malware-analyse, og jeg ser frem til at anvende disse færdigheder i fremtidige projekter.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RAT;