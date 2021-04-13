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