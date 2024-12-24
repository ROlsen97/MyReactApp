import React from 'react';
import './RAT.css'; // Importer CSS-filen
import kalipng from '../billederTilWebApp/KaliLinux.png';
import pythonpng from '../billederTilWebApp/Python.png';

function RAT() {
    return (
        <section id="RAT" className="">
            <div className="flex flex-col md:flex-row">
                <div className="p-4 md:w-5/12">
                    <div className="flex justify-end">    
                        <img
                            className='flex rounded-full aspect-[1/1] max-w-[300px] w-1/2 shadow-md'
                            src={pythonpng} // Juster stien til dit billede
                            alt="Remote Access Trojans Project"
                        />
                    </div>
                    <div className="flex justify-start">    
                        <img
                            className='rounded-full aspect-[1/1] max-w-[300px] w-1/2 margin-left shadow-md'
                            src={kalipng} // Juster stien til dit billede
                            alt="Remote Access Trojans Project"
                        />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg md:w-7/12 p-7">
                    <h1 className="mb-4 text-3xl font-bold">Remote Access Trojans Projekt</h1>
                    <div className="p-4">
                        <p className="font-serif text-lg leading-relaxed first-letter">
                        Mit projekt handlede om at udvikle en RAT, der muliggør fjernadgang til et system via en backdoor. <br />
                        Jeg brugte socket-programmering til at etablere forbindelse mellem klient (offerets system) og server (hackerens system). <br />
                        Klientprogrammet udførte funktioner skjult i systemet, som blev aktiveret via serverens kommandoer. <br />
                        Jeg skabte en testmiljø med VirtualBox og en Windows 10 ISO, hvor jeg udviklede og testede klient-delen direkte på det virtuelle offersystem. <br />
                        Serveren blev bygget i Kali Linux med PyCharm og kunne kommunikere med klienten og håndtere store mængder data. <br />
                        For at skjule backdooren anvendte jeg steganografi til at gemme den i et JPEG-billede, som derefter blev ekstraheret og aktiveret via en skjult funktion. <br /><br />
                        Mit program blev testet på VirusTotal, hvor kun få antivirusprogrammer opdagede det. <br />
                        Jeg udviklede tre funktioner og undersøgte, hvordan man kunne gøre backdooren til en trojansk hest for at undgå opdagelse. <br />
                        Tidsmangel begrænsede antallet af funktioner, men projektet gav mig en solid forståelse for RAT-teknologier og deres anvendelse. <br /> <br />
                        Jeg lærte, hvordan RATs fungerer og blev bedre til at stille tekniske spørgsmål som fx brugen af "least significant bit" til datagjemning. <br />
                        Projektet kunne være optimeret med en mere agil plan og undgåelse af unødigt komplekse tutorials. Overordnet har jeg opnået en metodisk og praktisk indsigt i både udvikling og skjulning af en RAT.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RAT;