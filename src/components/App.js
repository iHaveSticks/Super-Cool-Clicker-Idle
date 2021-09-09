import React, {useState, useEffect , useRef} from 'react';

import "../styles/index.css"


// Import Components
import GameStats from "./GameStats.js";
import Settings from './Settings';
import Footer from "./Footer.js";
import MessageContainer from './MessageContainer.js';
import MainHead from './MainHead';
import Store from "./Store/Store.js"


// Import JS Functions
import NumberCompacter from '../functions/numberCompacter.js';
import onUnload from '../functions/onUnload.js';

//import DOM functions
import showMessage from '../functions/showMessage';

/* global BigInt */ //<-- enable BigInt()


export default function App() {

    // Amounts | Clicks
    const [clicksTotal,setClicksTotal] = useState(0n);
    const [clicksCurrent,setClicksCurrent] = useState(0n);
    const [perClick,setPerClick] = useState(1n);
    const [perAutoClick,setPerAutoClick] = useState(0n);
    const [autoClickSpeed,setAutoClickSpeed] = useState(1000);
    
    // Amounts | Pine
    const [pineconesCurrent,setPineconesCurrent] = useState(0n);
    const [numOfPinetrees,setNumOfPinetrees] = useState(0n);
    const [pinetreesMod,setPinetreesMod] = useState(1n);

    // Amounts | Weird Rocks
    const [weirdRockAmount, setWeirdRockAmount] = useState(1n);

    // Prices | clicks
    const [autoClick2xPrice,setAutoClick2xPrice] = useState(60n);
    const [autoClick4xPrice,setAutoClick4xPrice] = useState(80n);
    const [perClick2xPrice,setPerClick2xPrice] = useState(100n);
    const [perClick4xPrice,setPerClick4xPrice] = useState(120n);
    const [pinetreesModPrice,setPinetreesModPrice] = useState(1000000n);
    const [autoClickSpeedPrice,setAutoClickSpeedPrice] = useState(600n);

    // Prices | Pincones
    const [doubleBaseS1Price,setDoubleBaseS1Price] = useState(60n);
    const [pinetreePrice,setPinetreePrice] = useState(0n);

    // Prices | Weird Rocks
    const [weirdRockPrice, setWeirdRockPrice] = useState(1000000n);

    // These numbers determine how much to add to per click amounts
    // They can be doubled infinite times ingame
    const [twoS1,setTwoS1] = useState(2n);
    const [fourS1,setFourS1] = useState(4n);

    const [autoSaveOn, setAutoSaveOn] = useState(true);

    /*        Don't save these values        */
    // reRender will make auto clicker update only between loops
    // allowing the auto clicker to work regardless of buttons spammed
    const [reRender1,setReRender1] = useState(0);
    const didInitialLoad = useRef(false); // Makes sure game loads first before saving

    // autoload - autosave
    useEffect(() => {
        if (autoSaveOn && didInitialLoad.current) {
            saveGame();
        } else if (!didInitialLoad.current) {
            loadGame();
            didInitialLoad.current = true;
        }
    });

    //Auto Clicker
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => autoClicker(), [reRender1]);


    /*      Functions      */
    function autoClicker() {
        const timeout = setTimeout(() => {
            setClicksTotal(clicksTotal => clicksTotal + (perAutoClick * weirdRockAmount));
            setClicksCurrent(clicksCurrent => clicksCurrent + (perAutoClick * weirdRockAmount));
            setPineconesCurrent(pineconesCurrent => pineconesCurrent + (numOfPinetrees * pinetreesMod));

            setReRender1(timeout); // Tell useEffect to reRender
            // (In browsers timeout should return timeout id)
        }, autoClickSpeed);
    }

    function saveGame() {
        localStorage.setItem('SavedGame',
            `{
                "clicksTotal": "${clicksTotal}",
                "clicksCurrent": "${clicksCurrent}",
                "perClick": "${perClick}",
                "perAutoClick": "${perAutoClick}",
                "autoClickSpeed": "${autoClickSpeed}",
                "pineconesCurrent": "${pineconesCurrent}",
                "numOfPinetrees": "${numOfPinetrees}",
                "pinetreesMod": "${pinetreesMod}",
                "weirdRockAmount": "${weirdRockAmount}",
                "autoClick2xPrice": "${autoClick2xPrice}",
                "autoClick4xPrice": "${autoClick4xPrice}",
                "perClick2xPrice": "${perClick2xPrice}",
                "perClick4xPrice": "${perClick4xPrice}",
                "pinetreesModPrice": "${pinetreesModPrice}",
                "autoClickSpeedPrice": "${autoClickSpeedPrice}",
                "doubleBaseS1Price": "${doubleBaseS1Price}",
                "pinetreePrice": "${pinetreePrice}",
                "weirdRockPrice": "${weirdRockPrice}",
                "twoS1": "${twoS1}",
                "fourS1": "${fourS1}",
                "timeSaved": "${Date.now()}"
            }`
        );
    }

    function loadGame(Game = 'SavedGame') {
        let SavedGame;
        try {
            if ((SavedGame = JSON.parse(localStorage.getItem(Game)))) {

                // Find amount for offline clicks
                const clicksGarnered = BigInt(Math.floor(((Date.now() - SavedGame.timeSaved) / SavedGame.autoClickSpeed)
                    * SavedGame.perAutoClick * SavedGame.weirdRockAmount));
                const pinconesGarnered = BigInt(Math.floor(((Date.now() - SavedGame.timeSaved) / SavedGame.autoClickSpeed)
                    * SavedGame.numOfPinetrees * SavedGame.pinetreesMod));
                // Show offline clicks in a message
                showMessage(`Offline Clicks: ${NumberCompacter(clicksGarnered)}<br>
                ${pinconesGarnered ? "Offline Pinecones " + NumberCompacter(pinconesGarnered) : "" }`,
                8000
                )

                // Add offline clicks to variables
                setClicksTotal(BigInt(SavedGame.clicksTotal) + clicksGarnered);
                setClicksCurrent(BigInt(SavedGame.clicksCurrent) + clicksGarnered);

                // Load other stuff
                setPerClick(BigInt(SavedGame.perClick));
                setPerAutoClick(BigInt(SavedGame.perAutoClick));
                setAutoClickSpeed(parseInt(SavedGame.autoClickSpeed));
                setPineconesCurrent(BigInt(SavedGame.pineconesCurrent) + pinconesGarnered);
                setNumOfPinetrees(BigInt(SavedGame.numOfPinetrees));
                setPinetreesMod(BigInt(SavedGame.pinetreesMod));
                setWeirdRockAmount(BigInt(SavedGame.weirdRockAmount));
                setAutoClick2xPrice(BigInt(SavedGame.autoClick2xPrice));
                setAutoClick4xPrice(BigInt(SavedGame.autoClick4xPrice));
                setPerClick2xPrice(BigInt(SavedGame.perClick2xPrice));
                setPerClick4xPrice(BigInt(SavedGame.perClick4xPrice));
                setPinetreesModPrice(BigInt(SavedGame.pinetreesModPrice));
                setAutoClickSpeedPrice(BigInt(SavedGame.autoClickSpeedPrice));
                setDoubleBaseS1Price(BigInt(SavedGame.doubleBaseS1Price));
                setPinetreePrice(BigInt(SavedGame.pinetreePrice));
                setWeirdRockPrice(BigInt(SavedGame.weirdRockPrice));
                setTwoS1(BigInt(SavedGame.twoS1));
                setFourS1(BigInt(SavedGame.fourS1));
            };
        } catch(error) {
            console.log(error);
            showMessage("Save file corrupted");
        }

        // Determine autosave settings
        let autoSaveOnMem = JSON.parse(localStorage.getItem("autoSaveOn"));
        if (autoSaveOnMem !== null) {
            setAutoSaveOn(autoSaveOnMem);
            if (!autoSaveOnMem) {
                showMessage("Autosave is turned off");
                document.getElementById("switchAutosave").checked = false;
                window.addEventListener('beforeunload', onUnload, {capture: true});
            }
        }
    }

    function switchAutoSave() {
        const autoSave = !autoSaveOn; //Save value to ensure correct one is used
        setAutoSaveOn(autoSave);

        localStorage.setItem("autoSaveOn", `${autoSave}`);
        showMessage(`Autosave is turned ${autoSave ? "ON" : "OFF"}`);
        
        if(!autoSaveOn) {
            window.removeEventListener('beforeunload', onUnload, {capture: true});
        } else {
            window.addEventListener('beforeunload', onUnload, {capture: true});
        }
    }


    /*      Handler Functions      */
    function handleClickerButton() {
        setClicksTotal(clicksTotal => clicksTotal + (perClick * weirdRockAmount));
        setClicksCurrent(clicksCurrent => clicksCurrent + (perClick * weirdRockAmount));
    }

    function buyAuto2x() {
        const cost = autoClick2xPrice;
        if (clicksCurrent >= cost) {
            setPerAutoClick(perAutoClick => perAutoClick + twoS1);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAutoClick2xPrice(cost + ((cost * 1n) / 10n));
        }
    }

    function buyAuto4x() {
        const cost = autoClick4xPrice;
        if (clicksCurrent >= cost) {
            setPerAutoClick(perAutoClick => perAutoClick + fourS1);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAutoClick4xPrice(cost + ((cost * 1n) / 10n));
        }
    }

    function buyExClick2x() {
        const cost = perClick2xPrice;
        if (clicksCurrent >= cost) {
            setPerClick(perClick => perClick + twoS1);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setPerClick2xPrice(cost + ((cost * 1n) / 10n));
        }
    }

    function buyExClick4x() {
        const cost = perClick4xPrice;
        if (clicksCurrent >= cost) {
            setPerClick(perClick => perClick + fourS1);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setPerClick4xPrice(cost + ((cost * 1n) / 10n));
        }
    }

    function buyAutoSpeed() {
        const cost = autoClickSpeedPrice;
        if (clicksCurrent >= cost) {
            setAutoClickSpeed(autoClickSpeed => autoClickSpeed - 250);
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setAutoClickSpeedPrice(cost + ((cost * 5n) / 10n));
        }
    }

    function increaseBasePrice2x() {
        const cost = doubleBaseS1Price;
        if (pineconesCurrent >= cost) {
            setPerClick(perClick => perClick * 2n);
            setPerAutoClick(perAutoClick => perAutoClick * 2n);
            setTwoS1(twoS1 => twoS1 * 2n);
            setFourS1(fourS1 => fourS1 * 2n);

            setPineconesCurrent(pineconesCurrent => pineconesCurrent - cost);
            setDoubleBaseS1Price(cost + ((cost * 15n) / 10n));
        }
    }

    function buyPineTree() {
        const cost = pinetreePrice;
        if (pineconesCurrent >= cost) {
            setPineconesCurrent(pineconesCurrent => pineconesCurrent - cost);
            setNumOfPinetrees(numOfPinetrees => numOfPinetrees + 1n);

            cost > 0
            ? setPinetreePrice(cost + (cost * 2n))
            : setPinetreePrice(100n)
        }
    }

    function buyPinetreesMod() {
        const cost = pinetreesModPrice;
        if (clicksCurrent >= cost) {
            setClicksCurrent(clicksCurrent => clicksCurrent - cost);
            setPinetreesMod(pinetreesMod => pinetreesMod + 1n);
            setPinetreesModPrice(cost + ((cost * 15n) / 100n));
        }
    }

    function buyWeirdRock() {
        const cost = weirdRockPrice;
        if (pineconesCurrent >= cost) {
            setPineconesCurrent(pineconesCurrent => pineconesCurrent - cost);
            setWeirdRockAmount(weirdRockAmount => weirdRockAmount * 2n);
            setWeirdRockPrice(cost + ((cost * 5n) / 10n))
        }
    }

    return (
    <div style={{margin: "none", minHeight: "inherit"}}>
        <Settings
            //variables
            autoSaveOn = {autoSaveOn}
            //functions
            setAutoSaveOn = {setAutoSaveOn}
            switchAutoSave = {switchAutoSave}
        />
        <main id="main">
            <MainHead  
                clicksCurrent = {clicksCurrent}
            />
            <Store 
                clicksTotal = {clicksTotal}
                clicksCurrent = {clicksCurrent}
                autoClickSpeed = {autoClickSpeed}
                autoClick2xPrice = {autoClick2xPrice}
                autoClick4xPrice = {autoClick4xPrice}
                perClick2xPrice = {perClick2xPrice}
                perClick4xPrice = {perClick4xPrice}
                autoClickSpeedPrice = {autoClickSpeedPrice}
                weirdRockPrice = {weirdRockPrice}
                weirdRockAmount = {weirdRockAmount}
                pineconesCurrent = {pineconesCurrent}
                pinetreePrice = {pinetreePrice}
                doubleBaseS1Price = {doubleBaseS1Price}
                pinetreesMod = {pinetreesMod}
                pinetreesModPrice = {pinetreesModPrice}
                twoS1 = {twoS1}
                fourS1 = {fourS1}

                handleClickerButton = {handleClickerButton}
                buyAuto2x = {buyAuto2x}
                buyAuto4x = {buyAuto4x}
                buyExClick2x = {buyExClick2x}
                buyExClick4x = {buyExClick4x}
                buyAutoSpeed = {buyAutoSpeed}
                buyPinetreesMod = {buyPinetreesMod}
                increaseBasePrice2x = {increaseBasePrice2x}
                buyPineTree = {buyPineTree}
                buyWeirdRock = {buyWeirdRock}

            />

            
            <GameStats  perAutoClick={perAutoClick}
                        autoClickSpeed={autoClickSpeed}
                        perClick={perClick}
                        pineconesCurrent={pineconesCurrent}
                        numOfPinetrees={numOfPinetrees}
                        pinetreesMod={pinetreesMod}
                        clicksTotal={clicksTotal}
                        weirdRockAmount = {weirdRockAmount}
            />
            <Footer />
        </main>
        <MessageContainer />
    </div>
    )
}

