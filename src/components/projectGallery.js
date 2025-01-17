import React, { useState } from 'react';
import ProjectText from '../components/ui-components/ProjectText';
import SideImages from '../components/ui-components/sideImages';
import kalipng from '../billederTilWebApp/KaliLinux.png';
import pythonpng from '../billederTilWebApp/Python.png';
import NetFrameWorkpng from '../billederTilWebApp/NET-Framework-Logo.png';
import svelteLogo from '../billederTilWebApp/newSvelteLogo.png';
import jetPackCompose from '../billederTilWebApp/JetPackComposeLogo.png';
import googleLogo from '../billederTilWebApp/googleLogo.png'
import reactLogo from '../billederTilWebApp/React-icon.png';
import tailwindLogo from '../billederTilWebApp/TailWindLogo.png';
//import safeliiImage1 from '../billederTilWebApp/Safelii1.png';
//import safeliiImage2 from '../billederTilWebApp/Safelii2.png';

const projects = [
    {
        title: "Remote Access Trojans",
        paragraphs: [
            `Mit projekt handlede om at udvikle en RAT, der muliggør fjernadgang til et system via en backdoor.
            Jeg brugte socket-programmering til at etablere forbindelse mellem klient (offerets system) og server (hackerens system).
            Klientprogrammet udførte funktioner skjult i systemet, som blev aktiveret via serverens kommandoer.
            Jeg skabte en testmiljø med VirtualBox og en Windows 10 ISO, hvor jeg udviklede og testede klient-delen direkte på det virtuelle offersystem.
            Serveren blev bygget i Kali Linux med PyCharm og kunne kommunikere med klienten og håndtere store mængder data. 
            For at skjule backdooren anvendte jeg steganografi til at gemme den i et JPEG-billede, som derefter blev ekstraheret og aktiveret via en skjult funktion.
            Mit program blev testet på VirusTotal, hvor kun få antivirusprogrammer opdagede det. `,
            
            `Jeg udviklede tre funktioner og undersøgte, hvordan man kunne gøre backdooren til en trojansk hest for at undgå opdagelse. 
            Tidsmangel begrænsede antallet af funktioner, men projektet gav mig en solid forståelse for RAT-teknologier og deres anvendelse.  
            Jeg lærte, hvordan RATs fungerer og blev bedre til at stille tekniske spørgsmål som fx brugen af "least significant bit" til datagjemning. 
            Projektet kunne være optimeret med en mere agil plan og undgåelse af unødigt komplekse tutorials. Overordnet har jeg opnået en metodisk og praktisk indsigt i både udvikling og skjulning af en RAT.`
        ],
        images: [pythonpng, kalipng]
    },
    {
        title: "Tidsregistreringssystem",
        paragraphs: [
            `Mikkelsen Electronics, en produktionsvirksomhed med 200 medarbejdere, havde behov for et effektivt tidsregistreringssystem for at overholde EU-lovgivning og fakturere klienter korrekt. Tidligere blev arbejdstimer manuelt indsamlet i Excel, hvilket var besværligt. Systemet skulle registrere arbejdstid, præsentere den på medarbejderprofiler og sende påmindelser via e-mail. Projektet havde til formål at levere en brugervenlig løsning med relevante funktioner og samtidig beskytte medarbejdernes privatliv.`,
            
            `Vi har udviklet et skræddersyet, brugervenligt system, der fokuserer på de nødvendige funktioner, som kunden efterspurgte, og undgår unødvendig kompleksitet. Vores valg af teknologier som Svelte til frontend og Clean Architecture til unit tests har givet os udfordringer, men også en værdifuld læring. Svelte var nyt for størstedelen af gruppen, men vi overvandt de første udfordringer gennem effektiv samarbejde og opnåede en god forståelse af frameworket. Vores udviklingsmetode, der integrerede Scrum-principper, uden en udpeget Scrum Master, har skabt en mere demokratisk arbejdsproces, hvor alle havde indflydelse på projektet.`
        ],
        images: [NetFrameWorkpng, svelteLogo]
    },{
        title: "Compose / Kotlin / Google maps / Rutevejledning",
        paragraphs: [
            `Jeg har arbejdet på et projekt, hvor jeg dykkede ned i Compose og Kotlin for at udvikle Android-versionen af Safelii's GPS-sektion. I dette projekt var mit primære fokus på at implementere Google Maps og rutevejledning, hvor brugeren kunne få vejledning fra deres nuværende position til en destination, som var knyttet til et objekt, som brugeren selv kunne tilføje. For at tilføje et objekt kunne brugeren tage et billede og tildele det et navn, hvorefter objektet blev gemt i den lokale database på enheden ved hjælp af Room.`,
            
            `For at sikre en struktureret og skalerbar applikation anvendte jeg Model-View-ViewModel (MVVM) arkitekturen. Jeg implementerede ViewModel til at håndtere forretningslogik og datastyring, hvilket gjorde det muligt for brugergrænsefladen at forblive løs koblet fra den underliggende logik. Model-laget bestod af objekter, der repræsenterede de data, som skulle gemmes i databasen, mens View-laget håndterede præsentationen af dataene i brugergrænsefladen.

Jeg brugte også Retrofit til at hente data og API-kald, mens live data blev brugt til at observere ændringer i objektdata og opdatere UI'en dynamisk. Denne opdeling sikrede, at applikationen kunne håndtere ændringer i brugerens input effektivt, samtidig med at den opretholdt en ren og vedligeholdelsesvenlig kodebase.`
        ],
        images: [jetPackCompose, googleLogo]
    },{
        title: "React / TypeScript / Denne side",
        paragraphs: ["Jeg har udarbejdet en Single Page Application (SPA) ved hjælp af React og Tailwind CSS for at dykke dybere ned i frontend-udvikling og moderne webteknologier. Applikationen er designet med en komponentbaseret arkitektur, hvor hver del af brugergrænsefladen er opdelt i genanvendelige komponenter. Dette designvalg gør det ikke kun muligt at genbruge elementer i forskellige kontekster, men reducerer også redundans i koden og forbedrer udviklingstiden. Jeg valgte Tailwind CSS til at sikre en responsiv og moderne brugergrænseflade med fokus på hurtig udvikling og konsekvent styling. Ved at kombinere Tailwind med React's state management kunne jeg opbygge dynamiske og interaktive komponenter, der reagerer i realtid på brugerens input.", 
            "Derudover har jeg integreret routing ved hjælp af React Router, hvilket muliggør en problemfri navigation mellem forskellige dele af applikationen uden at genindlæse siden. Dette har forbedret brugeroplevelsen betydeligt og reduceret belastningen på serveren. For at sikre skalerbarhed har jeg implementeret kontekstbaseret state management ved hjælp af React Context API, hvilket gør det nemt at dele data mellem komponenter uden at skulle passere dem eksplicit gennem props. Denne tilgang forbedrer vedligeholdelsen af applikationen og gør det nemt at tilføje nye funktioner i fremtiden. Projektet har givet mig en dybere forståelse for best practices inden for frontend-udvikling, herunder komponentdesign, styling, state management og optimering af brugeroplevelsen."],
        images: [reactLogo, tailwindLogo]
    },
    // Tilføj flere projekter her
];

function ProjectGallery() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
            setIsTransitioning(false);
        }, 500); // Match transition duration
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
            setIsTransitioning(false);
        }, 500); // Match transition duration
    };

    const currentProject = projects[currentProjectIndex];

    return (
        <section className="p-0 md:p-5" id="projects">
            <div className="flex justify-between mt-4">
                <button onClick={handlePrev} className="px-4 py-2 bg-gray-300 rounded">Forrige</button>
                <button onClick={handleNext} className="px-4 py-2 bg-gray-300 rounded">Næste</button>
            </div>
                <h3 className='flex justify-center'>Projekter</h3>
            <div className={`flex w-full p-0 flex-col md:flex-row items-center transition-transform duration-500 ${isTransitioning ? 'transform -translate-x-full' : ''}`}>
                <div className="flex justify-center w-full md:w-5/12">    
                    <SideImages
                        image1={currentProject.images[0]}
                        alt1={currentProject.title}
                        image2={currentProject.images[1]}
                        alt2={currentProject.title}
                    />
                </div>
                <div className="flex w-full md:justify-center md:w-7/12 md:p-4">    
                    <ProjectText
                        title={currentProject.title}
                        paragraphs={currentProject.paragraphs}
                    />
                </div>
            </div>
        </section>
    );
}

export default ProjectGallery;