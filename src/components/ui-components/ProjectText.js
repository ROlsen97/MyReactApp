import React from 'react';
//import './ProjectText.css'; // Importer CSS-filen

function ProjectText({ title, paragraphs, compact = false }) {
    return (
        <div className={`w-full bg-white rounded-lg shadow-md md:h-full md:overflow-auto overflow-visible ${compact ? 'p-5' : 'p-0 sm:p-10'}`}>
            <h1 className={`${compact ? 'mb-3 text-2xl' : 'p-3 mb-4 text-3xl'} font-bold`}>{title}</h1>
            <div className={compact ? 'p-0' : 'p-4'}>
                <div className={`gap-2 columns-1 ${compact ? '' : 'md:columns-2'}`}>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className={`font-serif leading-relaxed mb-4 ${compact ? 'text-sm' : 'text-lg'} ${index === 0 && !compact ? 'first-letter' : ''}`}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectText;
