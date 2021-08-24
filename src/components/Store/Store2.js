import React  from 'react';
import NumberCompacter from '../../functions/numberCompacter.js';

export default function Store2(props) {
    // Contains the jsx for store 2

    return (
        <div>
            {/* Buy amount per autoclick 2x */}

            {/* Buy pinetree */}
            {props.clicksTotal > 15000 &&
                <p>
                    <button type="button"
                        className={`button ${props.pineconesCurrent >= props.pinetreePrice ? "buttonAvailable" : "buttonUnavailable"}`}
                        onClick={() => props.buyPineTree()}
                        >Pinetree +1
                    </button>
                    {props.pinetreePrice > 0 ? NumberCompacter(props.pinetreePrice) + ' pincones' : 'free'} {/* Display as free for first purchase */}
                </p>
            }

            {/* Double base incrementals */}
            {props.clicksTotal >= 15000 &&
                <p>
                    <button type="button"
                        className={`button ${props.pineconesCurrent >= props.doubleBaseS1Price ? "buttonAvailable" : "buttonUnavailable"}`}
                        onClick={() => props.increaseBasePrice2x()}
                        >Click incrementals *2
                    </button>
                    {NumberCompacter(props.doubleBaseS1Price) + ' pincones'}
                </p>
            }

            {props.clicksTotal >= 500000 &&
                <p>
                    <button type="button"
                        className={`button ${props.clicksCurrent >= props.pinetreesModPrice ? "buttonAvailable" : "buttonUnavailable"}`}
                        onClick={() => props.buyPinetreesMod()}
                        >Pintree mod +1
                    </button>
                    {NumberCompacter(props.pinetreesModPrice)}
                </p>
            }

        </div>

    )}