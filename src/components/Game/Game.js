import React, {useState, useEffect} from 'react';

// Import Components
import {mainStyles, clickerButton, unavailable} from "./Game.css.js";
import GameStats from "../GameStats/GameStats.js";

// Import JS Functions
import NumberCompacter from '../../functions/number-compacter.js';

export default function Game() {

    // Amounts | Clicks
    const [clicksTotal,setClicksTotal] = useState(0);
    const [clicksCurrent,setClicksCurrent] = useState(0);
    const [amountPerClick,setAmountPerClick] = useState(1000);
    const [amountPerAutoClick,setAmountPerAutoClick] = useState(0);
    const [autoClickSpeed,setAutoClickSpeed] = useState(1000);
    
    // Amounts | Pine
    const [pineconesCurrent,setPineconesCurrent] = useState(0);
    const [numOfPinetrees,setNumOfPinetrees] = useState(0);
    const [pinetreesMod,setPinetreesMod] = useState(1);

    // Prices | clicks
    const [amountPerAutoClickPrice2x,setAmountPerAutoClickPrice2x] = useState(60);
    const [amountPerAutoClickPrice4x,setAmountPerAutoClickPrice4x] = useState(80);
    const [amountPerClickPrice2x,setAmountPerClickPrice2x] = useState(100);
    const [amountPerClickPrice4x,setAmountPerClickPrice4x] = useState(120);
    const [pineconePrice,setPineconePrice] = useState(100000);

    // Prices | Pincones
    const [increaseBasePrice2xPrice,setIncreaseBasePrice2xPrice] = useState(0);
    const [autoClickSpeedPrice,setAutoClickSpeedPrice] = useState(600);
    const [pinetreePrice,setPinetreePrice] = useState(2);

    // Incremental numbers that will get updated in play
    const [two,setTwo] = useState(2);
    const [four,setFour] = useState(4);

    useEffect( () => {
        const interval = setInterval(() => {
            setClicksTotal(clicksTotal => clicksTotal+ amountPerAutoClick);
            setClicksCurrent(clicksCurrent => clicksCurrent + amountPerAutoClick);
            setPineconesCurrent(pineconesCurrent => pineconesCurrent + (numOfPinetrees * pinetreesMod));
            
        }, autoClickSpeed);
        return () => clearTimeout(interval);
    });
            
    


    // Handleclicks
    function handleClickerButton() {
        setClicksTotal(clicksTotal => clicksTotal + amountPerClick);
        setClicksCurrent(clicksCurrent => clicksCurrent + amountPerClick);
    }

    function buyPinecones() {
        const cost = pineconePrice;
        if (clicksCurrent >= cost) {
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setPineconesCurrent(pineconesCurrent => pineconesCurrent + two);
            setPineconePrice(pineconePrice => pineconePrice * 2);
        }
    }

    function buyAuto2x() {
        const cost = amountPerAutoClickPrice2x;
        if (clicksCurrent >= cost) {
            setAmountPerAutoClick(amountPerAutoClick => amountPerAutoClick + two);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAmountPerAutoClickPrice2x(cost + (cost *.10));
        }
    }

    function buyAuto4x() {
        const cost = amountPerAutoClickPrice4x;
        if (clicksCurrent >= cost) {
            setAmountPerAutoClick(amountPerAutoClick => amountPerAutoClick + four);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAmountPerAutoClickPrice4x(cost + (cost *.10));
        }
    }

    function buyExClick2x() {
        const cost = amountPerClickPrice2x;
        if (clicksCurrent >= cost) {
            setAmountPerClick(amountPerClick => amountPerClick + two);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAmountPerClickPrice2x(cost + (cost *.10));
        }
    }

    function buyExClick4x() {
        const cost = amountPerClickPrice4x;
        if (clicksCurrent >= cost) {
            setAmountPerClick(amountPerClick => amountPerClick + four);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAmountPerClickPrice4x(cost + (cost *.10));
        }
    }

    function buyAutoSpeed() {
        const cost = autoClickSpeedPrice;
        if (clicksCurrent >= cost) {
            setAutoClickSpeed(autoClickSpeed => autoClickSpeed - 250);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAutoClickSpeedPrice(cost + (cost *.5));
        }
    }

    function increaseBasePrice2x() {
        const cost = increaseBasePrice2xPrice;
        if (pineconesCurrent >= cost) {
            setAmountPerClick(amountPerClick => amountPerClick * 2);
            setAmountPerAutoClick(amountPerAutoClick => amountPerAutoClick * 2);
            setTwo(two => two * 2);
            setFour(four => four * 4);

            setPineconesCurrent(pineconesCurrent => pineconesCurrent - cost);

            // Give for free on first purchase (cost should be = 0)
            cost > 0
            ? setIncreaseBasePrice2xPrice(cost + 2)
            : setIncreaseBasePrice2xPrice(4)
        }
    }

    function buyPineTree() {
        const cost = pinetreePrice;
        if (pineconesCurrent >= cost) {
            setPineconesCurrent(pineconesCurrent => pineconesCurrent - cost);
            setNumOfPinetrees(numOfPinetrees => numOfPinetrees + 1);
            setPinetreePrice(cost + numOfPinetrees);
        }
    }


    return (
    <div style={mainStyles}>
        <h1>Super Cool Clicker Idle</h1>
        <h2 style={{border: "3px solid #e6e6e6", width: "10em", whiteSpace: "nowrap", padding: '5px', overflow: "hidden"}}> {NumberCompacter(clicksCurrent)} </h2>

        <div style={{minHeight: "11em", float: 'left', marginRight: '1em', display: 'block', minWidth: "20em", overflow: "hidden"}}> {/* minWidth = 10em * 2 to match the h2 element above*/}

            <p>
                <button type="button"
                        style={clickerButton}
                        onClick={() => handleClickerButton()}
                        >Click
                </button>
            </p>

            {/* Buy pinecones*/}
            {clicksTotal >= 15000 &&
                <p>
                    <button type="button" 
                        style={clicksCurrent >= pineconePrice ? clickerButton : unavailable}
                        onClick={() => buyPinecones()}
                        >Pinecones +{two}
                    </button>
                    &nbsp; {NumberCompacter(pineconePrice)}
                </p>
            }

            <h3>Store</h3>

            {/* Buy amount per autoclick 2x*/}
            {clicksTotal >= 30 &&
                <p>
                    {NumberCompacter(amountPerAutoClickPrice2x)}
                    <button type="button" 
                        style={clicksCurrent >= amountPerAutoClickPrice2x ? clickerButton : unavailable}
                        onClick={() => buyAuto2x()}
                        >Autoclick +{two}
                    </button>
                </p>
            }


            {/* Buy amount per autoclick 4x*/}
            {clicksTotal >= 1500 &&
                <p>
                    {NumberCompacter(amountPerAutoClickPrice4x)}
                    <button type="button" 
                        style={clicksCurrent >= amountPerAutoClickPrice4x ? clickerButton : unavailable}
                        onClick={() => buyAuto4x()}
                        >Autoclick +{four}
                    </button>
                </p>
            }

            {/* Buy amount per self click 2x */}
            {clicksTotal >= 60 &&
                <p>
                    {NumberCompacter(amountPerClickPrice2x)}
                    <button type="button"
                        style={clicksCurrent >= amountPerClickPrice2x ? clickerButton : unavailable}
                        onClick={() => buyExClick2x()}
                        >Selfclick +{two}
                    </button>
                </p>
            }

            {/* Buy amount per self click 4x */}
            {clicksTotal >= 1700 &&
                <p>
                    {NumberCompacter(amountPerClickPrice4x)}
                    <button type="button"
                        style={clicksCurrent >= amountPerClickPrice4x ? clickerButton : unavailable}
                        onClick={() => buyExClick4x()}
                        >Selfclick +{four}
                    </button>
                </p>
            }

            {/* Buy autoclick speed */}
            {clicksTotal >= 300 && autoClickSpeed > 250 &&
                <p>
                    {NumberCompacter(autoClickSpeedPrice)}
                    <button type="button"
                        style={clicksCurrent >= autoClickSpeedPrice ? clickerButton : unavailable}
                        onClick={() => buyAutoSpeed()}
                        >Autoclick -250ms
                    </button>
                </p>
            }

            {/* Double base incrementals */}
            {clicksTotal >= 15000 &&
                <p>
                    {increaseBasePrice2xPrice > 0 ? NumberCompacter(increaseBasePrice2xPrice) + ' pincones' : 'free'}
                    <button type="button"
                        style={pineconesCurrent >= increaseBasePrice2xPrice ? clickerButton : unavailable}
                        onClick={() => increaseBasePrice2x()}
                        >Above incrementals *2
                    </button>
                </p>
            }
            {/* Buy pinetree */}
            {increaseBasePrice2xPrice > 0 &&
                <p>
                    {NumberCompacter(pinetreePrice) + ' pincones'}
                    <button type="button"
                        style={pineconesCurrent >= pinetreePrice ? clickerButton : unavailable}
                        onClick={() => buyPineTree()}
                        >Pinetree +1
                    </button>
                </p>
            }
        </div>

        <GameStats  amountPerAutoClick={amountPerAutoClick}
                    autoClickSpeed={autoClickSpeed}
                    amountPerClick={amountPerClick}
                    pineconesCurrent={pineconesCurrent}
                    clicksTotal={clicksTotal}
        />
    </div>
    )
}



