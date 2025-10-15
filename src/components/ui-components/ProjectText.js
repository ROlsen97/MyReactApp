import React from 'react';
//import './ProjectText.css'; // Importer CSS-filen

function ProjectText({ title, paragraphs }) {
    return (
        <div className="w-full p-0 bg-white rounded-lg shadow-lg sm:p-10 md:h-full md:overflow-auto overflow-visible">
            <h1 className="p-3 mb-4 text-3xl font-bold">{title}</h1>
            <div className="p-4">
                <div className="gap-2 columns-1 md:columns-2">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className={`font-serif text-lg leading-relaxed mb-4 ${index === 0 ? 'first-letter' : ''}`}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectText;