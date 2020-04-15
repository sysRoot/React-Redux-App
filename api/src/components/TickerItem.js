import React from 'react';

const TickerItem = ({ item }) => {
    return (
        <p>
            Ask:{item.ask} - Bid:{item.bid} - Last:{item.last}
        </p>
    );
};

export default TickerItem;
