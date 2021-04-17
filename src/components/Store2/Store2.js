import React  from 'react';

// Import CSS
import {buttonAvailable, buttonUnavailable} from "../../styles/buttonSyles.css";

// Import JS Functions
import NumberCompacter from '../../functions/number-compacter.js';



export default function Store2(props) {
    // Contains the jsx for store 2

    return (
        <div>
            {/* Buy amount per autoclick 2x */}

            {/* Buy pinetree */}
            {props.clicksTotal > 15000 &&
                <p>
                    <button type="button"
                        style={props.pineconesCurrent >= props.pinetreePrice ? buttonAvailable : buttonUnavailable}
                        onClick={() => props.buyPineTree()}
                        >Pinetree +1
                    </button>
                    &nbsp;&nbsp;{props.pinetreePrice > 0 ? NumberCompacter(props.pinetreePrice) + ' pincones' : 'free'}
                </p>
            }

            {/* Double base incrementals */}
            {props.clicksTotal >= 15000 &&
                <p>
                    <button type="button"
                        style={props.pineconesCurrent >= props.doubleBaseS1Price ? buttonAvailable : buttonUnavailable}
                        onClick={() => props.increaseBasePrice2x()}
                        >Click incrementals *2
                    </button>
                    &nbsp;&nbsp;{NumberCompacter(props.doubleBaseS1Price) + ' pincones'}
                </p>
            }

            {props.clicksTotal >= 500000 &&
                <p>
                    <button type="button" 
                        style={props.clicksCurrent >= props.pinetreesModPrice ? buttonAvailable : buttonUnavailable}
                        onClick={() => props.buyPinetreesMod()}
                        >Pintree mod + 10
                    </button>
                    &nbsp;&nbsp;{NumberCompacter(props.pinetreesModPrice)}
                </p>
            }

        </div>

    )}