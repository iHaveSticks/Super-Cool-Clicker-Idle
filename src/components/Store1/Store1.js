import React  from 'react';

// Import CSS
import "../../styles/buttonSyles.css";

// Import JS Functions
import NumberCompacter from '../../functions/number-compacter.js';



export default function Store1(props) {
    // Contains the jsx for store 1

    return (
        <div>
            {/* Buy amount per autoclick 2x */}
            {props.clicksTotal >= 30 &&
                <p>
                    <button type="button" 
                        className={`button ${props.clicksCurrent >= props.autoClick2xPrice ? "buttonAvailable" : "buttonUnavailable"}`}
                        onClick={() => props.buyAuto2x()}
                        >Autoclick +{NumberCompacter(props.twoS1)}
                    </button>
                    {NumberCompacter(props.autoClick2xPrice)}
                </p>
            }


            {/* Buy amount per autoclick 4x */}
            {props.clicksTotal >= 1500 &&
                <p>
                    <button type="button" 
                        className={`button ${props.clicksCurrent >= props.autoClick4xPrice ? "buttonAvailable" : "buttonUnavailable"}`}
                        onClick={() => props.buyAuto4x()}
                        >Autoclick +{NumberCompacter(props.fourS1)}
                    </button>
                    {NumberCompacter(props.autoClick4xPrice)}
                </p>
            }

            {/* Buy amount per self click 2x */}
            {props.clicksTotal >= 30 &&
                <p>
                    <button type="button"
                        className={`button ${props.clicksCurrent >= props.perClick2xPrice ? "buttonAvailable" : "buttonUnavailable"}`}
                        onClick={() => props.buyExClick2x()}
                        >Selfclick +{NumberCompacter(props.twoS1)}
                    </button>
                    {NumberCompacter(props.perClick2xPrice)}
                </p>
            }

            {/* Buy amount per self click 4x */}
            {props.clicksTotal >= 1500 &&
                <p>
                    <button type="button"
                        className={`button ${props.clicksCurrent >= props.perClick4xPrice ? "buttonAvailable" : "buttonUnavailable"}`}
                        onClick={() => props.buyExClick4x()}
                        >Selfclick +{NumberCompacter(props.fourS1)}
                    </button>
                    {NumberCompacter(props.perClick4xPrice)}
                </p>
            }

            {/* Buy autoclick speed */}
            {props.clicksTotal >= 300 && props.autoClickSpeed > 250 &&
                <p>
                    <button type="button"
                        className={`button ${props.clicksCurrent >= props.autoClickSpeedPrice ? "buttonAvailable" : "buttonUnavailable"}`}
                        onClick={() => props.buyAutoSpeed()}
                        >Autoclick -250ms
                    </button>
                    {NumberCompacter(props.autoClickSpeedPrice)}
                </p>
            }
        
        </div>

    )}