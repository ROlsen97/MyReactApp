import React, { useState } from 'react';

const ItemList = ({ items }) => {
    const [itemList, setItemList] = useState(items);

    const showInfo = (item) => {
        const updatedItems = itemList.map(x => ({
            ...x,
            showInfo: x.id === item.id ? !x.showInfo : false,
            infoToShow: x.id === item.id ? (x.showInfo ? "" : x.info) : ""
        }));
        setItemList(updatedItems);
    };

    const followLink = (item) => {
        if (item.link) {
            window.open(item.link, "_blank");
        }
    };

    return (
        <div className="w3-cell-row CustomPadding" align="center">
            {itemList.map((x) => (
                <div key={x.id} className="col-sm-6">
                    {x.link ? (
                        <button className="button button1" onClick={() => followLink(x)}>
                            {x.name}
                        </button>
                    ) : (
                        <button onClick={() => showInfo(x)} className="button button1">
                            {x.name}
                        </button>
                    )}
                    <div className={x.showInfo ? 'content show' : 'content'}>
                        {x.infoToShow}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList; 