import React from 'react';
import rubenpaagroenland from '../billederTilWebApp/RubenPåGlatIsPng.png'

function AboutMe() {
    return (      
        <section id="aboutMe" className="py-14">
           <div className="flex flex-col md:flex-row p-7">
               <div className="block mx-auto w-[30%]">
                   <img
                       className="block rounded-full aspect-[1/1] min-w-60"
                       src={rubenpaagroenland}
                       alt="RubenPaaGroenLand"
                   />
               </div>
                <div className="md:w-7/12 p-7">
                   <h1 className="text-2xl font-bold">Om mig</h1>
                   <div className="p-4">
                       <p className="text-lg font-semibold">
                           Mit navn er Ruben, og jeg er nyuddannet datamatiker. Jeg har nylig kastet mig ud i at skabe denne hjemmeside, der fungerer som mit online portfolio.
                       </p>
                       <p className="text-lg font-semibold">
                           Når jeg ikke sidder med næsen i computeren, kan jeg lide at bruge min tid på små projekter, lytte til musik, spille computer, se YouTube og udvide min kulinariske horisont. Livet handler om mere end blot kodning, ikke?
                       </p>
                       <p className="text-lg font-semibold">
                           I mit 4. semester arbejdede jeg intenst med et projekt om remote access trojans. Jeg ønskede at forstå, hvordan man udvikler dem og hvordan man forsvarer sig imod dem. Det endte med et 12 tal, og det styrkede ikke kun mine tekniske færdigheder, men gav mig også et dybere indblik i cybersecurity.
                       </p>
                       <p className="text-lg font-semibold">
                           I mit 5. semester arbejdede min gruppe og jeg på et projekt for Mikkelsen Electronics, hvor vi skulle levere et tidsregistreringssystem. Vi konstruerede projektet fra bunden, og fulgte Clean Architecture, hvilket var meget spændende at sætte op, udvide og ændre. Det endte med et 10 tal, og det forbedrede ikke kun min forståelse for arkitekturen, men gjorde mig også opmærksom på vigtigheden af velvære, holdånd og gennemsigtighed.
                       </p>
                       <p className="text-lg font-semibold">
                           Nu står jeg overfor en spændende tid, hvor jeg ser frem til at komme ud på arbejdsmarkedet.
                       </p>
                       <p className="text-lg font-semibold">
                           Mit yndlingskodesprog er uden tvivl C#. Dets alsidighed er beundrende, også har jeg hovedsageligt brugt det igennem uddannelsen. Senest har jeg dedikeret tid til at forbedre mine færdigheder inden for hjemmesidedesign. Jeg er tilfreds med mine fremskridt, især fordi min hjemmeside er responsiv.
                       </p>
                   </div>
               </div>
           </div>
       </section>
   );
}
export default AboutMe;