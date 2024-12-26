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