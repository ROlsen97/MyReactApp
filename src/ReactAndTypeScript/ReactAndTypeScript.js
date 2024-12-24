import React from 'react';

function ReactAndTypeScript() {
    return (
        <section id="homeProject" className=" p-10">
            <div className="flex flex-col md:flex-row">
                <div className="block mx-auto w-[30%]">
                    <img
                        className="block rounded-full aspect-[1/1] min-w-60"
                        src="path/to/your/image.jpg" // Juster stien til dit billede
                        alt="React and TypeScript Project"
                    />
                </div>
                <div className="md:w-7/12 p-7 bg-white shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold mb-4">React og TypeScript Projekt</h1>
                    <div className="p-4">
                        <p className="text-lg font-serif leading-relaxed">
                            Dette projekt er et eksempel på, hvordan man kan bruge React og TypeScript sammen for at skabe en moderne webapplikation. <br />
                            Jeg har brugt TypeScript til at tilføje statisk typekontrol til React-komponenterne, hvilket hjælper med at fange fejl tidligt i udviklingsprocessen. <br />
                            Projektet inkluderer funktioner som [beskriv funktioner], og jeg har brugt teknologier som [nævn teknologier]. <br />
                            En af de største udfordringer var [beskriv en udfordring], men jeg løste det ved at [beskriv løsningen]. <br />
                            Resultatet var en succesfuld implementering, der [beskriv resultatet]. <br /><br />
                            
                            Dette projekt har givet mig værdifuld erfaring inden for både React og TypeScript, og jeg ser frem til at anvende disse færdigheder i fremtidige projekter.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReactAndTypeScript;