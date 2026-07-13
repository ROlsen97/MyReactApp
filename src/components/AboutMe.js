import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import rubenpaagroenland from "../billederTilWebApp/RubenPåGlatIsPng.png"; // Juster stien til dit billede

function AboutMe() {
  const [imageRef, imageVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal();

  return (
    <section id="aboutMe" className="py-20 bg-transparant md:p-4">
      <div className="flex flex-col items-center p-0 md:p-20 md:flex-row">
        <div
          ref={imageRef}
          className={`flex justify-center w-full md:w-[40%] scroll-reveal reveal-left ${imageVisible ? "is-visible" : ""}`}
        >
          <img
            className="block rounded-full aspect-[1/1] w-[70%] md:w-[90%] md:p-0 shadow-md"
            src={rubenpaagroenland}
            alt="RubenPaaGroenLand"
          />
        </div>
        <div
          ref={textRef}
          className={`w-full p-3 mx-auto bg-white rounded-lg shadow-md md:w-7/12 md:mt-0 scroll-reveal reveal-right reveal-delay-150 ${textVisible ? "is-visible" : ""}`}
        >
          <h1 className="mb-4 text-3xl font-bold">Om mig</h1>
          <div className="p-0 md:p-4">
            <p className="font-serif text-lg leading-relaxed first-letter">
              Jeg har færdiggjort min PBA i IT-sikkerhed med en afsluttende
              karakter på 12 for mit bachelorprojekt, som kombinerede ISMS,
              risikostyring, automatisering og sikker softwareudvikling.<br></br><br></br> I
              projektet udviklede min studiekammerat og jeg et værktøj målrettet
              SMV’er, der understøtter arbejdet med ISO 27001 ved at skabe
              sporbarhed mellem forventet dokumentation og eksisterende
              dokumentation, beregne status for efterlevelse og automatisere
              dele af godkendelsesprocessen. Løsningen blev udviklet med en
              risikobaseret tilgang, hvor vi analyserede kontekst,
              identificerede trusler, vurderede risici og implementerede
              relevante mitigerende kontroller.
              <br></br><br></br>
              Gennem min PBA i IT-sikkerhed har jeg arbejdet med bl.a. Linux,
              brugerrettigheder, MFA, loganalyse i Suricata/ELK-SIEM og Splunk,
              netværkstrafikanalyse i Wireshark, Python-programmering, statisk
              og dynamisk applikationsanalyse, Android-rooting, ISO 27001/27002,
              sikker netværksarkitektur og kryptering som RSA, Diffie-Hellman og
              3DES.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
