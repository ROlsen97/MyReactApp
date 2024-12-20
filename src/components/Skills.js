import React, { useState } from 'react';

function SkillCard({ title, description }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className={`flip-card min-w-80 min-h-80 mx-auto cursor-pointer relative ${isFlipped ? 'flipped' : ''}`}
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
        <section id="mySkills" className="py-20 bg-transparent">
            <div className="max-w-6xl mx-auto p-5">
                <h2 className="text-3xl font-bold text-center mb-6">Mine Færdigheder</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <SkillCard
                        title="C#/DotNet"
                        description="Erfaring med C# og .NET framework til at bygge robuste applikationer."
                    />
                    <SkillCard
                        title="Kotlin/Compose"
                        description="Udvikling af moderne Android apps med Kotlin og Jetpack Compose."
                    />
                    <SkillCard
                        title="React/TypeScript"
                        description="Bygning af interaktive webinterfaces med React og TypeScript."
                    />
                    <SkillCard
                        title="CyberSecurity"
                        description="Solid forståelse af cybersecurity principper og praksisser."
                    />
                </div>
            </div>
        </section>
    );
}

export default Skills;