import React from 'react';
import rubenpaagroenland from '../billederTilWebApp/RubenPåGlatIsPng.png'; // Juster stien til dit billede

function AboutMe() {
    return (
        <section id="aboutMe" className="py-20 bg-transparant md:p-4">
            <div className="flex flex-col items-center p-0 md:p-20 md:flex-row">
                <div className="flex justify-center w-full md:w-[40%]">
                    <img
                        className="block rounded-full aspect-[1/1] w-[70%] md:w-[90%] md:p-0"
                        src={rubenpaagroenland}
                        alt="RubenPaaGroenLand"
                    />
                </div>
                <div className="w-full p-3 mx-auto bg-white rounded-lg shadow-lg md:w-7/12 md:mt-0">
                    <h1 className="mb-4 text-3xl font-bold">Om mig</h1>
                    <div className="p-0 md:p-4">
                        <p className="font-serif text-lg leading-relaxed first-letter">
                            Gennem min uddannelse og karrier har jeg udviklet mine kompetencer indenfor Software arkitektur, IT-Sikkerhed, Frontend og Backend
                            udvikling.<br/><br/>

                            Min interesse ligger i IT-Sikkerhed.
                            Ved IT-sikkerhed valgfaget på Datamatiker udviklede jeg en RAT, som
                            indeholdte en backdoor, der blev udfoldet fra et billedes metadata. Jeg
                            blev klogere på hvordan virusser/steganografi kan fungere, samt
                            hvordan forsvar og angreb har udviklet sig gennem tiden, det fik jeg
                            12 for.<br/><br/>

                            I løbet af PBA i IT-sikkerhed har jeg arbejdet med Linux, opsætning af
                            brugerrettigheder, MFA, log analyse i Suricata/ELK-SIEM,
                            netværkstrafikanalyse i Wireshark, python programmering. Jeg har
                            også arbejdet med statisk og dynamisk applikationsanalyse,
                            ISO27001/27002, Sikker netværksarkitektur, og kryptering(RSA,
                            Deffie-hellmann, 3DES). <br/><br/>

                            Jeg er lidt ligesom en blæksprutte forstået på den måde at jeg har
                            armene nede i mange forskellige arbejdsområder, og jeg bestræber
                            mig efter at gøre mit bedste. Spørger man mine lektorer så ville de
                            beskrive mig som lyttende, engageret, og frisk.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;