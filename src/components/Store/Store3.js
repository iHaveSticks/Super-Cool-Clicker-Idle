import React  from 'react';

// Import CSS
import "../../styles/buttonStyles.css";

// Import JS Functions
import numberCompacter from '../../functions/numberCompacter.js';



export default function Store3(props) {
    // Contains the jsx for store 3

    return (
        <div>
            {/* Buy weird rock */}
            {props.clicksTotal > 1e+9 &&
                <p>
                    <button type="button"
                        className={`button ${props.pineconesCurrent >= props.weirdRockPrice ? "buttonAvailable" : "buttonUnavailable"}`}
                        onClick={() => props.buyWeirdRock()}
                        >Weird rock * 2
                    </button>
                    {numberCompacter(props.weirdRockPrice) + " pinecones"}
                </p>
            }

            
        </div>

    )}