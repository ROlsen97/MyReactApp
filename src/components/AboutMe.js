import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import rubenpaagroenland from '../billederTilWebApp/RubenPåGlatIsPng.png'; // Juster stien til dit billede

function AboutMe() {
    const [imageRef, imageVisible] = useScrollReveal();
    const [textRef, textVisible] = useScrollReveal();

    return (
        <section id="aboutMe" className="py-20 bg-transparant md:p-4">
            <div className="flex flex-col items-center p-0 md:p-20 md:flex-row">
                <div
                    ref={imageRef}
                    className={`flex justify-center w-full md:w-[40%] scroll-reveal reveal-left ${imageVisible ? 'is-visible' : ''}`}
                >
                    <img
                        className="block rounded-full aspect-[1/1] w-[70%] md:w-[90%] md:p-0 shadow-md"
                        src={rubenpaagroenland}
                        alt="RubenPaaGroenLand"
                    />
                </div>
                <div
                    ref={textRef}
                    className={`w-full p-3 mx-auto bg-white rounded-lg shadow-md md:w-7/12 md:mt-0 scroll-reveal reveal-right reveal-delay-150 ${textVisible ? 'is-visible' : ''}`}
                >
                    <h1 className="mb-4 text-3xl font-bold">Om mig</h1>
                    <div className="p-0 md:p-4">
                        <p className="font-serif text-lg leading-relaxed first-letter">
                            Min interesse og kompetencer ligger i IT-Sikkerhed.
                            I IT-sikkerhed valgfaget på Datamatiker udviklede jeg en Remote Access Trojan(RAT), der udfoldede sig selv fra et billedes metadata. Jeg
                            blev klogere på virussers udvikling gennem tiden og steganografiens rolle deri, samt
                            hvordan forsvar- og angrebsmekanismer.<br/><br/>

                            PBA i IT-sikkerhed arbejdede jeg med Linux, opsætning af
                            brugerrettigheder, MFA, log analyse i Suricata/ELK-SIEM,
                            netværkstrafikanalyse i Wireshark, python programmering, statisk/dynamisk applikationsanalyse,
                            ISO27001/27002, Sikker netværksarkitektur, og kryptering(RSA,
                            Deffie-hellmann, 3DES). <br/><br/>

                            Jeg vil beskrive mig som en blæksprutte forstået på den måde at jeg har
                            en bred viden inden for forskellige arbejdsområder. Jeg bestræber
                            mig efter at gøre mit bedste. Mine lektorer ville
                            beskrive mig som lyttende, engageret, og frisk.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
