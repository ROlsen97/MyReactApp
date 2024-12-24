import React from 'react';

function TimeManagementSystem() {
    return (
        <section id="TimeME" className="p-10">
            <div className="flex flex-col md:flex-row">
                <div className="block mx-auto w-[30%]">
                    <img
                        className="block rounded-full aspect-[1/1] min-w-60"
                        src="path/to/your/image.jpg" // Juster stien til dit billede
                        alt="Time Management System Project"
                    />  
                </div>
                <div className="md:w-7/12 p-7 bg-white shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold mb-4">Tidsregistreringssystem Projekt</h1>
                    <div className="p-4">
                        <p className="text-lg font-serif leading-relaxed">
                            Dette projekt fokuserede på udviklingen af et tidsregistreringssystem for Mikkelsen Electronics. <br />
                            Formålet var at skabe et system, der kunne hjælpe med at registrere og administrere medarbejdernes arbejdstid effektivt. <br />
                            Jeg arbejdede med teknologier som [nævn teknologier], og projektet omfattede [beskriv projektets omfang]. <br />
                            En af de største udfordringer var [beskriv en udfordring], men jeg løste det ved at [beskriv løsningen]. <br />
                            Resultatet var en succesfuld implementering, der [beskriv resultatet]. <br /><br />
                            
                            Dette projekt gav mig værdifuld erfaring inden for softwareudvikling og projektledelse, og jeg ser frem til at anvende disse færdigheder i fremtidige projekter.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TimeManagementSystem;