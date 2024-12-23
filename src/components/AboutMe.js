import React from 'react';
import rubenpaagroenland from '../billederTilWebApp/RubenPåGlatIsPng.png'; // Juster stien til dit billede
//import './AboutMe.scss'; // Importer CSS-filen

function AboutMe() {
    return (
        <section id="aboutMe" className="bg-transparant p-14 py-20">
            <div className="flex flex-col md:flex-row">
                <div className="block mx-auto w-[30%]">
                    <img
                        className="block rounded-full aspect-[1/1] min-w-60"
                        src={rubenpaagroenland}
                        alt="RubenPaaGroenLand"
                    />
                </div>
                <div className="md:w-7/12 p-7 bg-white shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold mb-4">Om mig</h1>
                    <div className="p-4">
                        <p className="text-lg font-serif leading-relaxed first-letter">
                            Mit navn er Ruben, og jeg er nyuddannet datamatiker. <br />
                            Jeg har nylig kastet mig ud i at skabe denne hjemmeside, der fungerer som mit online portfolio. <br />
                            Når jeg ikke sidder med næsen i computeren, kan jeg lide at bruge min tid på små projekter,
                            lytte til musik, spille computer, se YouTube og udvide min kulinariske horisont. <br />
                            Livet handler om mere end blot kodning, ikke? <br /><br />
                            
                            Nu står jeg overfor en spændende tid, hvor jeg ser frem til at komme ud på arbejdsmarkedet. <br /><br />
                            
                            Mit yndlingskodesprog er uden tvivl C#. Dets alsidighed er beundrende, også har jeg hovedsageligt brugt det igennem uddannelsen. <br />
                            Senest har jeg dedikeret tid til at forbedre mine færdigheder inden for hjemmesidedesign. <br />
                            Jeg er tilfreds med mine fremskridt, især fordi min hjemmeside er responsiv.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;