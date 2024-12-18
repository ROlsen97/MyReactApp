import React from 'react';
import ItemList from '../ItemList';
import migImage from '../../billederTilWebApp/mig.png'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/css/bootstrap';
//import './HomePage.scss'


function HomePage({followLink}){
    
    const itemsToShow = [
        { id: 0, name: "Om denne side", info: "Denne side er mit online portfolio. Den består af HTML, CSS, Vue.js, Bootstrap, og Javascript", showInfo: false, infoToShow: "" },
        { id: 1, name: "Kontakt", info: "ruben2010@live.dk", showInfo: false, infoToShow: "" }
    ];

    return (
        <body>    
            <section id="home">
                <div className="row ">
                    <div className="grid grid-cols-2">
                        <div className="col-start-1">
                            <h1 className="text-9xl">Velkommen</h1>
                            <h10>til rubens hjemmeside</h10>
                        </div>
                        <div className="col-start-2">
                            <div className="flex justify-center max-w-[50%]">
                                <img className="" src={migImage} alt="Billede" />
                            </div>
                        </div>
                    </div>
                    <div className="w3-container bottomPadding">
                        <div className="w3-cell-row CustomPadding" align="">
                            <ItemList items={itemsToShow}/>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default HomePage;