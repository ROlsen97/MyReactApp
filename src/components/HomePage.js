import React from 'react';
import ItemList from './ItemList';
import migImage from '../billederTilWebApp/mig.png'


function HomePage({followLink}){
    
    const itemsToShow = [
        { id: 0, name: "Om denne side", info: "Denne side er mit online portfolio. Den består af HTML, CSS, Vue.js, Bootstrap, og Javascript", showInfo: false, infoToShow: "" },
        { id: 1, name: "Kontakt", info: "ruben2010@live.dk", showInfo: false, infoToShow: "" }
    ];

    return (
        <body className='bg-transparent'>    
            <section id="home" className='py-8'>
                <div className="flex flex-col sm:flex-row p-20 items-center justify-center">

                    <div className="sm:w-full md:w-7/12 p-7 text-center">
                        <h1 className="text-4xl sm:text-6xl font-bold">Velkommen</h1>
                        <h2 className="text-xl sm:text-xl font-semibold">til rubens hjemmeside</h2>
                    </div>

                    <div className="md:w-5/12">
                        <div className="block mx-auto max-w-[80%] min-w-60">
                            <img className="block mx-auto" src={migImage} alt="Billede" />
                        </div>
                    </div>

                </div>
                <div className="w3-container bottomPadding">
                    <div className="w3-cell-row CustomPadding" align="">
                        <ItemList items={itemsToShow}/>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default HomePage;