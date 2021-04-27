import React, {useState, useEffect} from 'react';

// Import CSS
import  "./App.css";
import "../../styles/buttonSyles.css";

// Import Components
import GameStats from "../GameStats/GameStats.js";
import Store1 from "../Store1/Store1.js";
import Store2 from "../Store2/Store2.js";
import Footer from "../Footer/Footer.js";

// Import JS Functions
import NumberCompacter from '../../functions/number-compacter.js';
import menuControls from '../../functions/menuControls.js';

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
    const [pinetreesModPrice,setPinetreesModPrice] = useState(1000000);
    const [autoClickSpeedPrice,setAutoClickSpeedPrice] = useState(600);

    // Prices | Pincones
    const [doubleBaseS1Price,setDoubleBaseS1Price] = useState(60);
    const [pinetreePrice,setPinetreePrice] = useState(0);

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
            setDoubleBaseS1Price(cost + (cost * 2.5))
        }
    }

    function buyPineTree() {
        const cost = pinetreePrice;
        if (pineconesCurrent >= cost) {
            setPineconesCurrent(pineconesCurrent => pineconesCurrent - cost);
            setNumOfPinetrees(numOfPinetrees => numOfPinetrees + 1);

            cost > 0
            ? setPinetreePrice(Math.round( cost + (1.5 * numOfPinetrees) ))
            : setPinetreePrice(100)
        }
    }

    function buyPinetreesMod() {
        const cost = pinetreesModPrice;
        if (clicksCurrent >= cost) {
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setPinetreesMod(pinetreesMod => pinetreesMod + 10);
            setPinetreesModPrice(Math.round( cost + (pinetreesMod * 100000) ));
        }
    }

    return (
    <div style={{
        margin: "none"
        }}>
        <main id={"main"}>
            <div id="mainHead">
                <h1>Super Cool Clicker&nbsp;Idle</h1>
                <h2 id={"clicksCurrent"}> {NumberCompacter(clicksCurrent)} </h2>
            </div>
            <div id="storeContainer"> {/* minWidth = 10em * 2 to match the h2 element above*/}

                <p>
                    <button type="button"
                        className={"buttonAvailable button"}
                        onClick={() => handleClickerButton()}
                        >Click
                    </button>
                </p>
                
                {clicksTotal >= 30 &&
                    <h3>Store

                        {clicksTotal > 15000 &&
                            <button
                            type="button"
                            id="storeNav"
                            style={{
                                "background": "none",
                                "fontSize": ".8em",
                                "color": "#DA7422",
                                "border": "none",
                                "cursor": "pointer"
                                }}
                            onClick={() => menuControls("store1", "store2", "storeNav")}
                            > Next &#62;
                            </button>
                        }
                    </h3>
                }
                
                <div id="store1" style={{"display": "initial"}}>
                    <Store1
                    // Variables
                        clicksTotal = {clicksTotal}
                        clicksCurrent = {clicksCurrent}
                        autoClickSpeed = {autoClickSpeed}
                        autoClick2xPrice = {autoClick2xPrice}
                        autoClick4xPrice = {autoClick4xPrice}
                        perClick2xPrice = {perClick2xPrice}
                        perClick4xPrice = {perClick4xPrice}
                        autoClickSpeedPrice = {autoClickSpeedPrice}
                        twoS1 = {twoS1}
                        fourS1 = {fourS1}


                    // Functions
                        buyAuto2x = {buyAuto2x}
                        buyAuto4x = {buyAuto4x}
                        buyExClick2x = {buyExClick2x}
                        buyExClick4x = {buyExClick4x}
                        buyAutoSpeed = {buyAutoSpeed}
                    />
                </div>
                <div id="store2" style={{"display": "none"}}>
                    <Store2
                    // Variables
                        clicksTotal = {clicksTotal}
                        clicksCurrent = {clicksCurrent}
                        pineconesCurrent = {pineconesCurrent}
                        pinetreePrice = {pinetreePrice}
                        doubleBaseS1Price = {doubleBaseS1Price}
                        pinetreesMod = {pinetreesMod}
                        pinetreesModPrice = {pinetreesModPrice}

                    // Functions
                        buyPinetreesMod = {buyPinetreesMod}
                        increaseBasePrice2x = {increaseBasePrice2x}
                        buyPineTree = {buyPineTree}
                    />
                </div>
            </div>

            <div id="gameStatsContainer">
                <GameStats  perAutoClick={perAutoClick}
                            autoClickSpeed={autoClickSpeed}
                            perClick={perClick}
                            pineconesCurrent={pineconesCurrent}
                            numOfPinetrees={numOfPinetrees}
                            pinetreesMod={pinetreesMod}
                            clicksTotal={clicksTotal}
                />
            </div>
        </main>
        <footer id="footer">
            <Footer />
        </footer>
    </div>
    )
}



