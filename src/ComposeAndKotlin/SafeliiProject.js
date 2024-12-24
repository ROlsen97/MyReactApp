import React from 'react';

function SafeliiProject() {
    return (
        <section id="safeliiProject" className="p-10">
            <div className="flex flex-col md:flex-row">
                <div className="block mx-auto w-[30%]">
                    <img
                        className="block rounded-full aspect-[1/1] min-w-60"
                        src="" // Juster stien til dit billede
                        alt="Safelii Project"
                    />
                </div>
                <div className="md:w-7/12 p-7 bg-white shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold mb-4">Safelii Projekt</h1>
                    <div className="p-4">
                        <p className="text-lg font-serif leading-relaxed">
                            Hos Safelii arbejdede jeg på et spændende projekt, hvor jeg var ansvarlig for at udvikle en løsning til [beskrivelse af projektet]. <br />
                            Projektet involverede brug af teknologier som [nævn teknologier], og jeg arbejdede tæt sammen med et team af dygtige udviklere. <br />
                            En af de største udfordringer var [beskriv en udfordring], men vi løste det ved at [beskriv løsningen]. <br />
                            Resultatet var en succesfuld implementering, der [beskriv resultatet]. <br /><br />
                            
                            Dette projekt gav mig værdifuld erfaring inden for [nævn relevante områder], og jeg er stolt af det arbejde, vi udførte. <br />
                            Jeg ser frem til at anvende disse færdigheder i fremtidige projekter.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SafeliiProject;