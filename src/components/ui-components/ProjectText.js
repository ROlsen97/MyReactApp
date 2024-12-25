import React from 'react';
//import './ProjectText.css'; // Importer CSS-filen

function ProjectText({ title, paragraphs }) {
    return (
        <div className="bg-white rounded-lg shadow-lg md:w-7/12 p-7">
            <h1 className="mb-4 text-3xl font-bold">{title}</h1>
            <div className="p-4">
                <div className="gap-4 columns-2">
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