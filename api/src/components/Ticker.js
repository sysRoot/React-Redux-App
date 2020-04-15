import React from 'react';
import TickerItem from './TickerItem';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions';
const Ticker = () => {
    const tickerData = useSelector((state) => state.tickerData);
    const pastTickers = useSelector((state) => state.pastTickers);
    const dispatch = useDispatch();
    if (tickerData.hasOwnProperty('ask') && pastTickers.length < 1) {
        return (
            <>
                <ListGroup>
                    <ListGroupItem active>
                        <p>
                            Ask:{tickerData.ask} - Bid:{tickerData.bid}- Last:
                            {tickerData.last}{' '}
                            <Button onClick={() => dispatch(fetchData())}>
                                Fetch
                            </Button>
                        </p>
                    </ListGroupItem>
                </ListGroup>
            </>
        );
    }
    if (tickerData.hasOwnProperty('ask') && pastTickers.length > 0) {
        return (
            <>
                <ListGroup>
                    <ListGroupItem active>
                        <p>
                            Ask:{tickerData.ask} - Bid:{tickerData.bid}- Last:
                            {tickerData.last}{' '}
                            <Button onClick={() => dispatch(fetchData())}>
                                Fetch
                            </Button>
                        </p>
                    </ListGroupItem>
                    {pastTickers.map((item) => {
                        return (
                            <ListGroupItem key={item.volume.timestamp}>
                                <TickerItem item={item} />
                            </ListGroupItem>
                        );
                    })}
                </ListGroup>
            </>
        );
    }
    return (
        <>
            <ListGroup>
                <ListGroupItem active>
                    <p>
                        No data available
                        <Button onClick={() => dispatch(fetchData())}>
                            Fetch
                        </Button>
                    </p>
                </ListGroupItem>
            </ListGroup>
        </>
    );
};

export default Ticker;
