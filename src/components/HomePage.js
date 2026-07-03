import React from 'react';
import migImage from '../billederTilWebApp/mig.png'
import useScrollReveal from '../hooks/useScrollReveal';


function HomePage(){
    const [textRef, textVisible] = useScrollReveal({ initialVisible: true, rootMargin: "-12% 0px -45% 0px" });
    const [imageRef, imageVisible] = useScrollReveal({ initialVisible: true, rootMargin: "-12% 0px -45% 0px" });
    

    return (
        <body className='py-20 bg-transparent'>    
            <section id="home" className='py-8'>
                <div className="flex flex-col items-center justify-center p-20 sm:flex-row">

                    <div
                        ref={textRef}
                        className={`text-center sm:w-full md:w-7/12 p-7 intro-fly-in reveal-left scroll-reveal ${textVisible ? 'is-visible' : ''}`}
                    >
                        <h1 className="text-4xl font-bold sm:text-6xl">Velkommen</h1>
                        <h2 className="text-xl font-semibold sm:text-xl">til Rubens hjemmeside</h2>
                    </div>

                    <div
                        ref={imageRef}
                        className={`md:w-5/12 intro-fly-in reveal-right reveal-delay-150 scroll-reveal ${imageVisible ? 'is-visible' : ''}`}
                    >
                        <div className="block mx-auto max-w-[80%] min-w-60">
                            <img className="block mx-auto rounded-full aspect-[1/1] object-cover shadow-md" src={migImage} alt="Billede" />
                        </div>
                    </div>

                </div>
                {/* <div className="w3-container bottomPadding">
                    <div className="w3-cell-row CustomPadding" align="">
                        <ItemList items={itemsToShow}/>
                    </div>
                </div> */}
            </section>
        </body>
    )
}

export default HomePage;
