import React, {useState} from 'react';

function SkillCard({ title, description }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
      <div 
        className="w-full h-32 bg-blue-500 text-white rounded-lg shadow-md cursor-pointer flex items-center justify-center"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {isFlipped ? (
          <div className="p-4 text-center">
            <p>{description}</p>
          </div>
        ) : (
          <div className="text-xl font-bold">{title}</div>
        )}
      </div>
    );
}

function Skills() {
    return (
        <section id="mySkills" className="py-8 bg-transparent">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Mine Færdigheder</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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