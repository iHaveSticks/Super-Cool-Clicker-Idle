import React, {useState, useEffect} from 'react';

// Import Components
import {mainStyles, buttonAvailable, buttonUnavailable} from "./App.css.js";
import GameStats from "../GameStats/GameStats.js";

// Import JS Functions
import NumberCompacter from '../../functions/number-compacter.js';

export default function App() {

    // Amounts | Clicks
    const [clicksTotal,setClicksTotal] = useState(0);
    const [clicksCurrent,setClicksCurrent] = useState(0);
    const [perClick,setPerClick] = useState(1);
    const [perAutoClick,setPerAutoClick] = useState(0);
    const [autoClickSpeed,setAutoClickSpeed] = useState(1000);
    
    // Amounts | Pine
    const [pineconesCurrent,setPineconesCurrent] = useState(0);
    const [numOfPinetrees,setNumOfPinetrees] = useState(0);
    const [pinetreesMod,setPinetreesMod] = useState(1);

    // Prices | clicks
    const [autoClick2xPrice,setAutoClick2xPrice] = useState(60);
    const [autoClick4xPrice,setAutoClick4xPrice] = useState(80);
    const [perClick2xPrice,setPerClick2xPrice] = useState(100);
    const [perClick4xPrice,setPerClick4xPrice] = useState(120);
    const [pineconePrice,setPineconePrice] = useState(100000);

    // Prices | Pincones
    const [doubleBaseS1Price,setDoubleBaseS1Price] = useState(0);
    const [autoClickSpeedPrice,setAutoClickSpeedPrice] = useState(600);
    const [pinetreePrice,setPinetreePrice] = useState(2);

    // Incremental numbers that will get updated in play
    const [twoS1,setTwoS1] = useState(2);
    const [fourS1,setFourS1] = useState(4);

    useEffect( () => {
        const interval = setInterval(() => {
            setClicksTotal(clicksTotal => clicksTotal+ perAutoClick);
            setClicksCurrent(clicksCurrent => clicksCurrent + perAutoClick);
            setPineconesCurrent(pineconesCurrent => pineconesCurrent + (numOfPinetrees * pinetreesMod));
            
        }, autoClickSpeed);
        return () => clearTimeout(interval);
    });
            
    


    // Handleclicks
    function handleClickerButton() {
        setClicksTotal(clicksTotal => clicksTotal + perClick);
        setClicksCurrent(clicksCurrent => clicksCurrent + perClick);
    }

    function buyPinecones() {
        const cost = pineconePrice;
        if (clicksCurrent >= cost) {
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setPineconesCurrent(pineconesCurrent => pineconesCurrent + twoS1);
            setPineconePrice(pineconePrice => pineconePrice * 2);
        }
    }

    function buyAuto2x() {
        const cost = autoClick2xPrice;
        if (clicksCurrent >= cost) {
            setPerAutoClick(perAutoClick => perAutoClick + twoS1);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAutoClick2xPrice(cost + (cost *.10));
        }
    }

    function buyAuto4x() {
        const cost = autoClick4xPrice;
        if (clicksCurrent >= cost) {
            setPerAutoClick(perAutoClick => perAutoClick + fourS1);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAutoClick4xPrice(cost + (cost *.10));
        }
    }

    function buyExClick2x() {
        const cost = perClick2xPrice;
        if (clicksCurrent >= cost) {
            setPerClick(perClick => perClick + twoS1);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setPerClick2xPrice(cost + (cost *.10));
        }
    }

    function buyExClick4x() {
        const cost = perClick4xPrice;
        if (clicksCurrent >= cost) {
            setPerClick(perClick => perClick + fourS1);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setPerClick4xPrice(cost + (cost *.10));
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
        const cost = doubleBaseS1Price;
        if (pineconesCurrent >= cost) {
            setPerClick(perClick => perClick * 2);
            setPerAutoClick(perAutoClick => perAutoClick * 2);
            setTwoS1(twoS1 => twoS1 * 2);
            setFourS1(fourS1 => fourS1 * 2);

            setPineconesCurrent(pineconesCurrent => pineconesCurrent - cost);

            // Give for free on first purchase (cost should be = 0)
            cost > 0
            ? setDoubleBaseS1Price(cost + 2)
            : setDoubleBaseS1Price(4)
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
        <h2 style={{border: "3px solid #e6e6e6", width: "10em", whiteSpace: "nowrap", padding: '0.250em', overflow: "hidden"}}> {NumberCompacter(clicksCurrent)} </h2>

        <div style={{minHeight: "11em", float: 'left', marginRight: '1em', display: 'block', minWidth: "20em", overflow: "hidden"}}> {/* minWidth = 10em * 2 to match the h2 element above*/}

            <p>
                <button type="button"
                        style={buttonAvailable}
                        onClick={() => handleClickerButton()}
                        >Click
                </button>
            </p>

            {/* Buy pinecones*/}
            {clicksTotal >= 15000 &&
                <p>
                    <button type="button" 
                        style={clicksCurrent >= pineconePrice ? buttonAvailable : buttonUnavailable}
                        onClick={() => buyPinecones()}
                        >Pinecones +{twoS1}
                    </button>
                    &nbsp; {NumberCompacter(pineconePrice)}
                </p>
            }

            <h3>Store</h3>

            {/* Buy amount per autoclick 2x*/}
            {clicksTotal >= 30 &&
                <p>
                    {NumberCompacter(autoClick2xPrice)}
                    <button type="button" 
                        style={clicksCurrent >= autoClick2xPrice ? buttonAvailable : buttonUnavailable}
                        onClick={() => buyAuto2x()}
                        >Autoclick +{twoS1}
                    </button>
                </p>
            }


            {/* Buy amount per autoclick 4x*/}
            {clicksTotal >= 1500 &&
                <p>
                    {NumberCompacter(autoClick4xPrice)}
                    <button type="button" 
                        style={clicksCurrent >= autoClick4xPrice? buttonAvailable : buttonUnavailable}
                        onClick={() => buyAuto4x()}
                        >Autoclick +{fourS1}
                    </button>
                </p>
            }

            {/* Buy amount per self click 2x */}
            {clicksTotal >= 60 &&
                <p>
                    {NumberCompacter(perClick2xPrice)}
                    <button type="button"
                        style={clicksCurrent >= perClick2xPrice ? buttonAvailable : buttonUnavailable}
                        onClick={() => buyExClick2x()}
                        >Selfclick +{twoS1}
                    </button>
                </p>
            }

            {/* Buy amount per self click 4x */}
            {clicksTotal >= 1700 &&
                <p>
                    {NumberCompacter(perClick4xPrice)}
                    <button type="button"
                        style={clicksCurrent >= perClick4xPrice ? buttonAvailable : buttonUnavailable}
                        onClick={() => buyExClick4x()}
                        >Selfclick +{fourS1}
                    </button>
                </p>
            }

            {/* Buy autoclick speed */}
            {clicksTotal >= 300 && autoClickSpeed > 250 &&
                <p>
                    {NumberCompacter(autoClickSpeedPrice)}
                    <button type="button"
                        style={clicksCurrent >= autoClickSpeedPrice ? buttonAvailable : buttonUnavailable}
                        onClick={() => buyAutoSpeed()}
                        >Autoclick -250ms
                    </button>
                </p>
            }

            {/* Double base incrementals */}
            {clicksTotal >= 15000 &&
                <p>
                    {doubleBaseS1Price > 0 ? NumberCompacter(doubleBaseS1Price) + ' pincones' : 'free'}
                    <button type="button"
                        style={pineconesCurrent >= doubleBaseS1Price ? buttonAvailable : buttonUnavailable}
                        onClick={() => increaseBasePrice2x()}
                        >Above incrementals *2
                    </button>
                </p>
            }
            {/* Buy pinetree */}
            {doubleBaseS1Price > 0 &&
                <p>
                    {NumberCompacter(pinetreePrice) + ' pincones'}
                    <button type="button"
                        style={pineconesCurrent >= pinetreePrice ? buttonAvailable : buttonUnavailable}
                        onClick={() => buyPineTree()}
                        >Pinetree +1
                    </button>
                </p>
            }
        </div>

        <GameStats  perAutoClick={perAutoClick}
                    autoClickSpeed={autoClickSpeed}
                    perClick={perClick}
                    pineconesCurrent={pineconesCurrent}
                    clicksTotal={clicksTotal}
        />
    </div>
    )
}


