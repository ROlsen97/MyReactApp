import React from 'react';
import ItemList from './ItemList';
import migImage from '../billederTilWebApp/mig.png'


function HomePage({followLink}){
    
    const itemsToShow = [
        { id: 0, name: "Om denne side", info: "Denne side er mit online portfolio. Den består af HTML, CSS, Vue.js, Bootstrap, og Javascript", showInfo: false, infoToShow: "" },
        { id: 1, name: "Kontakt", info: "ruben2010@live.dk", showInfo: false, infoToShow: "" }
    ];

    return (
        <body className='py-20 bg-transparent'>    
            <section id="home" className='py-8'>
                <div className="flex flex-col items-center justify-center p-20 sm:flex-row">

                    <div className="text-center sm:w-full md:w-7/12 p-7">
                        <h1 className="text-4xl font-bold sm:text-6xl">Velkommen</h1>
                        <h2 className="text-xl font-semibold sm:text-xl">til Rubens hjemmeside</h2>
                    </div>

                    <div className="md:w-5/12">
                        <div className="block mx-auto max-w-[80%] min-w-60">
                            <img className="block mx-auto" src={migImage} alt="Billede" />
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