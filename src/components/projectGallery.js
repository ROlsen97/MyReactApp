import React, { useEffect, useState } from "react";
import ProjectText from "../components/ui-components/ProjectText";
import SideImages from "../components/ui-components/sideImages";
import kalipng from "../billederTilWebApp/KaliLinux.png";
import pythonpng from "../billederTilWebApp/Python.png";
import NetFrameWorkpng from "../billederTilWebApp/NET-Framework-Logo.png";
import svelteLogo from "../billederTilWebApp/newSvelteLogo.png";
import jetPackCompose from "../billederTilWebApp/JetPackComposeLogo.png";
import googleLogo from "../billederTilWebApp/googleLogo.png";
import reactLogo from "../billederTilWebApp/React-icon.png";
import tailwindLogo from "../billederTilWebApp/TailWindLogo.png";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const projects = [
  {
    title: "Remote Access Trojans",
    paragraphs: [
      `Projektet handlede om at udvikle en RAT, der muliggør fjernadgang til et system via en backdoor.
            Socket-programmering blev anvendt til at etablere forbindelse mellem klient (offerets system) og server (hackerens system).
            Klientprogrammet udførte funktioner skjult i systemet, som blev aktiveret via serverens kommandoer.
            Et testmiljø blev etableret med VirtualBox og Windows 10, hvor jeg udviklede og testede klient-delen af C2 direkte på det virtuelle offersystem.
            Serveren blev bygget i Kali Linux med PyCharm og kommunikerede med klienten. 
            For at skjule backdooren anvendtes steganografi til at gemme malwaren i et JPEG-billede, som blev ekstraheret og aktiveret via en skjult funktion.
            Programmet blev testet på VirusTotal, hvor kun få antivirusprogrammer opdagede det. `,

      `Tre funktioner blev udviklet grundet tidsmangel, men projektet gav forståelse for RAT-teknologier og deres anvendelse. 
            Projektet kunne optimeres med en mere agil plan. Jeg opnåede indsigt i både udvikling og skjule en RAT.`,
    ],
    images: [pythonpng, kalipng],
  },
  {
    title: "Tidsregistreringssystem",
    paragraphs: [
      `En produktionsvirksomhed med 200 medarbejdere, havde behov for et effektivt tidsregistreringssystem for at overholde EU-lovgivning og fakturere klienter korrekt. Tidligere blev arbejdstimer manuelt indsamlet i Excel, hvilket var besværligt. Systemet skulle registrere arbejdstid, præsentere den på medarbejderprofiler og sende påmindelser via e-mail. Projektet havde til formål at levere en brugervenlig løsning med relevante funktioner og samtidig beskytte medarbejdernes privatliv.`,

      `
      Der blev udviklet et brugervenligt system, der fokuserer på de nødvendige funktioner, som kunden efterspurgte. Teknologier bestod af Svelte til frontend og Clean Architecture/C#/.Net til backend. Unit tests har gav udfordringer, men også en værdifuld læring. Svelte var nyt for størstedelen af gruppen, men vi overvandt de første udfordringer gennem effektiv samarbejde og opnåede en god forståelse af frameworket. Udviklingsmetoden integrerede Scrum-principper, uden en udpeget Scrum Master, hvilket skabte en demokratisk arbejdsproces, hvor alle havde indflydelse på projektet.`,
    ],
    images: [NetFrameWorkpng, svelteLogo],
  },
  {
    title: "Compose / Kotlin / Google maps / Rutevejledning",
    paragraphs: [
      `I et projekt dykkede jeg ned i Compose og Kotlin for at udvikle Android-versionen af en virksomheds GPS-sektion. Mit primære fokus på implementering af Google Maps og rutevejledning, hvor brugeren fik vejledning fra nuværende position til destinationen, som var knyttet til objektet. Brugeren kunne selv tilføje objekter ved at tage et billede, tildele et navn, hvorefter objektet blev gemt i den lokale database på enheden.`,

      `For at sikre en struktureret og skalerbar applikation anvendtes Model-View-ViewModel (MVVM) arkitekturen. ViewModel blev implementeret til at håndtere forretningslogik og datastyring, hvilket gjorde det muligt for brugergrænsefladen at forblive løs koblet fra den underliggende logik. Model-laget bestod af objekter, der repræsenterede data gemt i databasen, mens View-laget håndterede præsentationen af dataene i brugergrænsefladen.

Retrofit anvendtes til at hente data og API-kald, mens live data anvendtes til at observere ændringer i objektdata og opdatere UI'en dynamisk. Denne opdeling sikrede, at applikationen håndterede ændringer effektivt, samtidig opretholdtes en ren og vedligeholdelsesvenlig kodebase.`,
    ],
    images: [jetPackCompose, googleLogo],
  },
  {
    title: "React / TypeScript / Denne side",
    paragraphs: [
      "En Single Page Application (SPA) blev udviklet ved hjælp af React og Tailwind CSS. Dette projekt blev udarbejdet for at dykke dybere ned i frontend-udvikling og moderne webteknologier. Applikationen er designet med en komponentbaseret arkitektur, hvor hver del af brugergrænsefladen består af genanvendelige komponenter. Dette designvalg reducerer redundans i koden og er nemmere at arbejde i. Tailwind CSS blev valgt til at sikre en moderne brugergrænseflade med fokus på hurtig udvikling og konsekvent styling. Ved at kombinere Tailwind med React's state management opbyggede jeg en dynamisk hjemmeside, der er både visuelt tiltalende og funktionel.",
      "Derudover integrerede jeg routing ved hjælp af React Router, hvilket muliggør en problemfri navigation mellem forskellige dele af applikationen uden at genindlæse siden. Dette forbedre brugeroplevelsen betydeligt og reducerer belastningen på serveren. Projektet har givet mig en dybere forståelse for best practices inden for frontend-udvikling, herunder komponentdesign, styling, og optimering af brugeroplevelsen.",
    ],
    images: [reactLogo, tailwindLogo],
  },
  // Tilføj flere projekter her
];

function ProjectGallery() {
  // slides med kloner
  const slides = [projects[projects.length - 1], ...projects, projects[0]];

  const [curr, setCurr] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  const next = () => {
    setIsAnimating(true);
    setCurr((c) => c + 1);
  };

  const prev = () => {
    setIsAnimating(true);
    setCurr((c) => c - 1);
  };

  const handleTransitionEnd = () => {
    if (curr === 0) {
      setIsAnimating(false);
      setCurr(slides.length - 2);
    } else if (curr === slides.length - 1) {
      setIsAnimating(false);
      setCurr(1);
    }
  };
  // infinite reset uden hop
  useEffect(() => {
    const duration = 500;
    let timer;
    if (!isAnimating) {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }
    if (curr === slides.length - 1) {
      timer = setTimeout(() => {
        setIsAnimating(false);
        setCurr(1);

        // Vent til næste render-cycle
        setTimeout(() => {
          setIsAnimating(true);
        }, 0);
      }, duration);
    }

    if (curr === 0) {
      timer = setTimeout(() => {
        setIsAnimating(false);
        setCurr(slides.length - 2);

        setTimeout(() => {
          setIsAnimating(true);
        }, 0);
      }, duration);
    }

    return () => clearTimeout(timer);
  }, [curr, slides.length, isAnimating]);

  // korrekt dot-index (uden kloner)
  const realIndex =
    curr === 0
      ? projects.length - 1
      : curr === slides.length - 1
        ? 0
        : curr - 1;

  return (
    <section className="p-0 md:p-5" id="projects">
      <h3 className="flex justify-center text-white mb-4 font-bold">Builds</h3>

      <div className="relative overflow-hidden w-full">
        {/* TRACK */}
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${
            isAnimating ? "transition-transform duration-500 ease-out" : ""
          }`}
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7">
                  <ProjectText
                    title={project.title}
                    paragraphs={project.paragraphs}
                  />
                </div>
                <div className="md:col-span-5 flex justify-center">
                  <SideImages
                    image1={project.images[0]}
                    alt1={project.title}
                    image2={project.images[1]}
                    alt2={project.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PILE */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                     bg-slate-900/60 backdrop-blur-md text-white
                     rounded-full w-10 h-10 flex items-center justify-center
                     hover:bg-slate-900/80 transition"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                     bg-slate-900/60 backdrop-blur-md text-white
                     rounded-full w-10 h-10 flex items-center justify-center
                     hover:bg-slate-900/80 transition"
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i + 1)}
              className={`h-2 rounded-full transition-all ${
                realIndex === i ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;