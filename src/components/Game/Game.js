import React from 'react';

// Import Components
import {mainStyles, clickerButton, unavailable} from "./Game.css.js";
import GameStats from "../GameStats/GameStats.js";

// Import JS Functions
import NumberCompacter from '../../functions/number-compacter.js';

class Game extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            // Amounts | Clicks
            clicksTotal: 0,
            clicksCurrent: 0,
            amountPerClick: 1,
            amountPerAutoClick: 0,
            autoClickSpeed: 1000,
            
            // Amounts | Pine
            pineconesCurrent: 0,
            numOfPinetrees: 0,
            pinetreesMod: 1,

            // Prices | clicks
            amountPerAutoClickPrice2x: 60,
            amountPerAutoClickPrice4x: 80,
            amountPerClickPrice2x: 100,
            amountPerClickPrice4x: 120,
            pineconePrice: 100000,

            // Prices | Pincones
            increaseBasePrice2xPrice: 0,
            autoClickSpeedPrice: 600,
            pinetreePrice: 2,
            
           

            // Incremental numbers that will get updated in play
            two: 2,
            four: 4,
            
        }
        this.handleClickerButton = this.handleClickerButton.bind(this);
        this.buyAuto2x = this.buyAuto2x.bind(this);
        this.buyAuto4x = this.buyAuto4x.bind(this);
        this.buyExClick2x = this.buyExClick2x.bind(this);
        this.buyExClick4x = this.buyExClick4x.bind(this);
        this.buyAutoSpeed2x = this.buyAutoSpeed2x.bind(this);
        this.increaseBasePrice2x = this.increaseBasePrice2x.bind(this);
        this.buyPinecones = this.buyPinecones.bind(this);
        this.buyPineTree = this.buyPineTree.bind(this);

        this.perLoop = this.perLoop.bind(this);
        {
            let counter = 1;
            setInterval(() => {
                switch(this.state.autoClickSpeed) {
                    case 250:
                            this.perLoop()
                        break;
                    case 500:
                        if(counter === 2) {
                            this.perLoop()
                        }
                        counter >= 2 ? counter = 1 : counter++;
                        break;
                    case 750:
                        if(counter === 3) {
                            this.perLoop()
                        }
                        counter >= 3 ? counter = 1 : counter++;
                        break;
                    case 1000:
                        if(counter === 4) {
                            this.perLoop()
                        }
                        counter >= 4 ? counter = 1 : counter++;
                        break;
                    default:
                        break;
                }
                
            }, 250);
        };
    };
    perLoop() {
        this.setState({
            clicksTotal: this.state.clicksTotal + this.state.amountPerAutoClick,
            clicksCurrent: this.state.clicksCurrent + this.state.amountPerAutoClick,
            pineconesCurrent: this.state.pineconesCurrent + (this.state.numOfPinetrees * this.state.pinetreesMod)
        })
    }


    // Handleclicks

    handleClickerButton() {
        this.setState({
            clicksTotal: this.state.clicksTotal + this.state.amountPerClick,
            clicksCurrent: this.state.clicksCurrent + this.state.amountPerClick
        })
        
    }
    buyPinecones() {
        const cost = this.state.pineconePrice;
        if (this.state.clicksCurrent >= cost) {
            this.setState({
                clicksCurrent: this.state.clicksCurrent - cost,
                pineconesCurrent: this.state.pineconesCurrent += this.state.two,
                pineconePrice: this.state.pineconePrice * 2
            });
        }
    }
    buyAuto2x() {
        const cost = this.state.amountPerAutoClickPrice2x;
        if (this.state.clicksCurrent >= cost) {
            this.setState({
                amountPerAutoClick: this.state.amountPerAutoClick + this.state.two,
                clicksCurrent: this.state.clicksCurrent - cost,
                amountPerAutoClickPrice2x: cost + (cost *.10)
            });
        }
    }
    buyAuto4x() {
        const cost = this.state.amountPerAutoClickPrice4x;
        if (this.state.clicksCurrent >= cost) {
            this.setState({
                amountPerAutoClick: this.state.amountPerAutoClick + this.state.four,
                clicksCurrent: this.state.clicksCurrent - cost,
                amountPerAutoClickPrice4x: cost + (cost *.10)
            });
        }
    }
    buyExClick2x() {
        const cost = this.state.amountPerClickPrice2x;
        if (this.state.clicksCurrent >= cost) {
            this.setState({
                amountPerClick: this.state.amountPerClick + this.state.two,
                clicksCurrent: this.state.clicksCurrent - cost,
                amountPerClickPrice2x: cost + (cost *.10)
            });
        }
    }
    buyExClick4x() {
        const cost = this.state.amountPerClickPrice4x;
        if (this.state.clicksCurrent >= cost) {
            this.setState({
                amountPerClick: this.state.amountPerClick + this.state.four,
                clicksCurrent: this.state.clicksCurrent - cost,
                amountPerClickPrice4x: cost + (cost *.10)
            });
        }
    }
    buyAutoSpeed2x() {
        const cost = this.state.autoClickSpeedPrice;
        if (this.state.clicksCurrent >= cost) {
            this.setState({
                autoClickSpeed: this.state.autoClickSpeed - 250,
                clicksCurrent: this.state.clicksCurrent - cost,
                autoClickSpeedPrice: cost + (cost *.5)
            });
        }
    }

    increaseBasePrice2x() {
        const cost = this.state.increaseBasePrice2xPrice;
        const pineconesCurrent = this.state.pineconesCurrent
        if (this.state.pineconesCurrent >= cost) {
            this.setState({
                amountPerClick: this.state.amountPerClick * 2,
                amountPerAutoClick: this.state.amountPerAutoClick * 2,
                two: this.state.two * 2,
                four: this.state.four * 2,
                
                pineconesCurrent: pineconesCurrent - cost
            });
            if(cost > 0) {
                this.setState({
                    increaseBasePrice2xPrice: cost + this.state.two
                });
            } else {
                this.setState({
                    increaseBasePrice2xPrice: 4
                });
            }
        }
    }

    buyPineTree() {
        const cost = this.state.pinetreePrice;
        if (this.state.pineconesCurrent >= cost) {
            this.setState({
                pineconesCurrent: this.state.pineconesCurrent - cost,
                numOfPinetrees: this.state.numOfPinetrees + 1,
                pinetreePrice: cost + this.state.numOfPinetrees
            });
        }
    }

  

    render() {
        //clicks
        const clicksCurrent = this.state.clicksCurrent;
        const clicksTotal = this.state.clicksTotal;

        //pincones
        const pineconesCurrent = this.state.pineconesCurrent;
        const pineconePrice = this.state.pineconePrice;

        const amountPerAutoClickPrice2x = this.state.amountPerAutoClickPrice2x;
        const amountPerAutoClickPrice4x = this.state.amountPerAutoClickPrice4x;
        const amountPerClickPrice2x = this.state.amountPerClickPrice2x;
        const amountPerClickPrice4x = this.state.amountPerClickPrice4x;
        const autoClickSpeed = this.state.autoClickSpeed;
        const autoClickSpeedPrice = this.state.autoClickSpeedPrice;
        const amountPerAutoClick = this.state.amountPerAutoClick;
        const amountPerClick = this.state.amountPerClick;
        const increaseBasePrice2xPrice = this.state.increaseBasePrice2xPrice;
        const pinetreePrice = this.state.pinetreePrice;

        const two = NumberCompacter(this.state.two);
        const four = NumberCompacter(this.state.four);

        return (
        <div style={mainStyles}>
            <h1>Super Cool Clicker Idle</h1>
            <h2 style={{border: "3px solid #e6e6e6", width: "10em", whiteSpace: "nowrap", padding: '5px', overflow: "hidden"}}> {NumberCompacter(clicksCurrent)} </h2>

            <div style={{minHeight: "11em", float: 'left', marginRight: '1em', display: 'block', minWidth: "20em", overflow: "hidden"}}> {/* minWidth = 10em * 2 to match the h2 element above*/}

            <p>
                <button type="button"
                        style={clickerButton}
                        onClick={this.handleClickerButton}
                        >Click
                </button>
            </p>

            {/* Buy pinecones*/}
            {clicksTotal >= 15000 &&
                <p>
                    <button type="button" 
                        style={clicksCurrent >= pineconePrice ? clickerButton : unavailable}
                        onClick={this.buyPinecones}
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
                        onClick={this.buyAuto2x}
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
                        onClick={this.buyAuto4x}
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
                        onClick={this.buyExClick2x}
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
                        onClick={this.buyExClick4x}
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
                        onClick={this.buyAutoSpeed2x}
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
                        onClick={this.increaseBasePrice2x}
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
                        onClick={this.buyPineTree}
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
    };
}

export default Game;



