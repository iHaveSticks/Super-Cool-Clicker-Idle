import React, {useState, useEffect} from 'react';

// Import CSS
import {mainStyles} from "./App.css.js";
import {buttonAvailable, buttonUnavailable} from "../../styles/buttonSyles.css";

// Import Components
import GameStats from "../GameStats/GameStats.js";
import Store1 from "../Store1/Store1.js";

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

    // These numbers determine how much to add to per click amounts
    // They can be doubled infinite times ingame
    const [twoS1,setTwoS1] = useState(2);
    const [fourS1,setFourS1] = useState(4);


    useEffect( () => {
        // The auto clicker
        const interval = setInterval(() => {
            setClicksTotal(clicksTotal => Math.round(clicksTotal + perAutoClick));
            setClicksCurrent(clicksCurrent => Math.round(clicksCurrent + perAutoClick));
            setPineconesCurrent(pineconesCurrent => Math.round(pineconesCurrent + (numOfPinetrees * pinetreesMod)));
            
        }, autoClickSpeed);
        return () => clearInterval(interval);

        // Only re-render when specific values change
    }, [autoClickSpeed, perAutoClick, numOfPinetrees, pinetreesMod]);
            
    


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
            setAutoClick2xPrice(cost + Math.round(cost *.10));
        }
    }

    function buyAuto4x() {
        const cost = autoClick4xPrice;
        if (clicksCurrent >= cost) {
            setPerAutoClick(perAutoClick => perAutoClick + fourS1);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAutoClick4xPrice(cost + Math.round(cost *.10));
        }
    }

    function buyExClick2x() {
        const cost = perClick2xPrice;
        if (clicksCurrent >= cost) {
            setPerClick(perClick => perClick + twoS1);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setPerClick2xPrice(cost + Math.round(cost *.10));
        }
    }

    function buyExClick4x() {
        const cost = perClick4xPrice;
        if (clicksCurrent >= cost) {
            setPerClick(perClick => perClick + fourS1);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setPerClick4xPrice(cost + Math.round(cost *.10));
        }
    }

    function buyAutoSpeed() {
        const cost = autoClickSpeedPrice;
        if (clicksCurrent >= cost) {
            setAutoClickSpeed(autoClickSpeed => autoClickSpeed - 250);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAutoClickSpeedPrice(cost + Math.round(cost *.5));
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

            // Give for free on first purchase when cost should be == 0
            cost > 0
            ? setDoubleBaseS1Price(cost + (cost * 2))
            : setDoubleBaseS1Price(4)
        }
    }

    function buyPineTree() {
        const cost = pinetreePrice;
        if (pineconesCurrent >= cost) {
            setPineconesCurrent(pineconesCurrent => pineconesCurrent - cost);
            setNumOfPinetrees(numOfPinetrees => numOfPinetrees + 1);
            setPinetreePrice(cost + (cost * numOfPinetrees));
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
                    &nbsp;&nbsp; {NumberCompacter(pineconePrice)}
                </p>
            }

            
            {clicksTotal >= 30 &&
            <h3>Store</h3>
            }

            <Store1
            // Variables
                clicksTotal = {clicksTotal}
                clicksCurrent = {clicksCurrent}
                autoClickSpeed = {autoClickSpeed}
                pineconesCurrent = {pineconesCurrent}
                autoClick2xPrice = {autoClick2xPrice}
                autoClick4xPrice = {autoClick4xPrice}
                perClick2xPrice = {perClick2xPrice}
                perClick4xPrice = {perClick4xPrice}
                pineconePrice = {pineconePrice}
                doubleBaseS1Price = {doubleBaseS1Price}
                autoClickSpeedPrice = {autoClickSpeedPrice}
                pinetreePrice = {pinetreePrice}
                twoS1 = {twoS1}
                fourS1 = {fourS1}


            // Functions
                buyAuto2x = {buyAuto2x}
                buyAuto4x = {buyAuto4x}
                buyExClick2x = {buyExClick2x}
                buyExClick4x = {buyExClick4x}
                buyAutoSpeed = {buyAutoSpeed}
                increaseBasePrice2x =  {increaseBasePrice2x}
                buyPineTree = {buyPineTree}
            />

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



