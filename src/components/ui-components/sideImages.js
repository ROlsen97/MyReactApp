import React from 'react';

function SideImages({ image1, image2, alt1, alt2 }) {
    return (
        <div className="flex flex-col justify-center w-full p-4 md:justify-center">
            <div className="flex justify-end">
                <img
                    className="flex rounded-full aspect-[1/1] max-w-[300px] w-1/2 shadow-md"
                    src={image1}
                    alt={alt1}
                />
            </div>
            <div className="flex justify-start">
                <img
                    className="rounded-full aspect-[1/1] max-w-[300px] w-1/2 margin-left shadow-md"
                    src={image2}
                    alt={alt2}
                />
            </div>
        </div>
    );
}

export default SideImages;