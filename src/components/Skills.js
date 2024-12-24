import React, { useState } from 'react';

function SkillCard({ title, description }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className={`flip-card min-w-70 min-h-70 mx-auto cursor-pointer relative ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="flip-card-inner h-full min-h-[200px] min-w-[200px]">
                <div className="flip-card-front bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center p-6 relative">
                    <div className="text-xl font-bold">{title}</div>
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-75 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                        Tryk på mig
                    </div>
                </div>
                <div className="flip-card-back bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center p-6">
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
        <section id="mySkills" className="bg-transparent">
            <div className="max-w-6xl mx-auto p-3">
                <h4 className="text-xl font-bold text-center mb-2">Mine Færdigheder</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <SkillCard
                        title="C#/DotNet"
                        description="Erfaring med udvikling af robuste og skalerbare løsninger ved hjælp af C# og 
                        .NET, herunder implementering af Clean Architecture og arbejdet med backend-systemer."
                    />
                    <SkillCard
                        title="Kotlin/Compose"
                        description="Erfaring med udvikling af Android-applikationer ved hjælp af Kotlin og Compose, 
                        herunder integration af funktioner som countdown-timere og systemoptimering."
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