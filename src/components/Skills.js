import React, { useState } from 'react';

function SkillCard({ title, description }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className={`flip-card min-h-[300px] min-w-[300px] mx-auto cursor-pointer relative ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="flip-card-inner h-full min-h-[300px] min-w-[300px]">
                <div className="relative flex items-center justify-center text-white bg-blue-500 rounded-lg shadow-md flip-card-front">
                    <div className="text-xl font-bold">{title}</div>
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white transition-opacity duration-300 bg-blue-500 bg-opacity-75 opacity-0 hover:opacity-100">
                        Tryk på mig
                    </div>
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
                <h4 className="mb-2 text-xl font-bold text-center">Mine Færdigheder</h4>
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                    <SkillCard
                        title="C#/DotNet"
                        description="Erfaring med udvikling af robuste og skalerbare løsninger ved hjælp af C# og 
                        .NET, herunder implementering af Clean Architecture og arbejdet med backend-systemer."
                        
                    />
                    <SkillCard
                        title="Kotlin/Compose"
                        description="Erfaring med udvikling af Android-applikationer ved hjælp af Kotlin og Compose, 
                        herunder integration af google maps samt rutevejledning."
                        
                    />
                    <SkillCard
                        title="React/TypeScript"
                        description="Erfaring med frontend-udvikling i React og TypeScript, 
                        herunder udvikling af dynamiske webapplikationer og forbedring af brugeroplevelse."
                        
                    />
                    <SkillCard
                        title="CyberSecurity"
                        description="Grundlæggende viden om cybersikkerhed, 
                        herunder beskyttelse af data og implementering af sikre systemer, samt erfaring med sikker kodeudvikling og testmetoder."
                    />
                </div>
            </div>
        </section>
    );
}

export default Skills;