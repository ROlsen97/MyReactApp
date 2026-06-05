import React, { useState } from 'react';

function SkillCard({ title, description, hint }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className={`flip-card m-2 w-full max-w-sm min-h-[300px] mx-auto cursor-pointer relative ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="flip-card-inner h-full min-h-[300px]">
                <div className="relative flex flex-col items-center justify-center gap-1 p-4 text-white bg-blue-500 rounded-lg shadow-md flip-card-front">
                    <div className="text-l font-bold mb-1">{title}</div>
                    <div className="text-sm font-semibold">{hint}</div>
                </div>
                <div className="flex items-center justify-center p-6 text-white bg-blue-500 rounded-lg shadow-md flip-card-back">
                    <div className="p-4 text-center">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Skills() {
    return (
        <section id="mySkills" className="bg-transparent md:p-7">
            <div className="max-w-6xl p-3 mx-auto">
                <h2 className="mb-2 text-center">Mine Færdigheder</h2>
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    <SkillCard
                    title="Automatisk Dokumenthåndtering"
                    hint="Klik for at se mere"
                    description="Udvikling af et automatiseret dokumenthåndteringssystem ved hjælp af Python og Power Automate, der inkluderer funktioner som statusberegning for efterlevelse af klausuler, godkendelsesprocesser, samt implementering af sikkerhedsforanstaltninger for at beskytte mod trusler."
                    />
                    <SkillCard
                    title="Security engineering"
                    hint="Klik for at se mere"
                    description="Erfaring med design og implementering af sikkerhedsløsninger, herunder trusselsmodellering, sårbarhedsvurdering og implementering af sikkerhedsforanstaltninger for at beskytte systemer og data mod trusler."
                    />
                    <SkillCard
                    title="SIEM && Log Analyse"
                    hint="Klik for at se mere"
                    description="Erfaring med Security Information and Event Management (SIEM) systemer, herunder logindsamling, korrelation og analyse for at identificere og reagere på sikkerhedstrusler."
                    />
                    <SkillCard
                    title="Linux"
                    hint="Klik for at se mere"
                    description="Erfaring med Linux-operativsystemet, herunder installation, konfiguration og administration af Linux-servere, samt brug af kommandolinjen og scripting for at automatisere opgaver."
                    />
                    <SkillCard 
                    title="ISO/IEC 27001/27002/27701"
                    hint="Klik for at se mere"
                    description="Erfaring med implementering og vedligeholdelse af informationssikkerhedsstyringssystemer og privatinformationstyringssystemer (ISMS og PIMS) i overensstemmelse med ISO/IEC 27001/27002/27701 standarderne, herunder audit forberedelse, sikkerhedspolitikker og kontrolforanstaltninger."
                    />
                    <SkillCard
                        title="C# && DotNet"
                        hint="Klik for at se mere"
                        description="Erfaring med udvikling af robuste og skalerbare løsninger ved hjælp af C# og 
                        .NET, herunder implementering af Clean Architecture og arbejdet med backend-systemer."
                        
                    />
                    <SkillCard
                        title="Kotlin && Compose"
                        hint="Klik for at se mere"
                        description="Erfaring med udvikling af Android-applikationer ved hjælp af Kotlin og Compose, 
                        herunder integration af google maps samt rutevejledning."
                        
                    />
                    <SkillCard
                        title="React && TypeScript"
                        hint="Klik for at se mere"
                        description="Erfaring med frontend-udvikling i React og TypeScript, 
                        herunder udvikling af dynamiske webapplikationer og forbedring af brugeroplevelse."
                        
                    />
                    <SkillCard
                        title="RAT Udvikling"
                        hint="Klik for at se mere"
                        description="Udvikling af en Remote Access Trojan (RAT) i Python,
                        som inkluderer en backdoor, der udnytter billedmetadata til at opnå fjernadgang."
                    />
                    
                </div>
            </div>
        </section>
    );
}

export default Skills;