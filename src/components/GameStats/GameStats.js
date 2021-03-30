import React from 'react';
import {GameStatStyles, rowStyles} from "./GameStats.css.js";
import NumberCompacter from './../../functions/number-compacter.js';



export default function GameStats(props)  {
    return(
        <div style={GameStatStyles}>
            <h3>Stats</h3>
                <p style={rowStyles}>Per autoclick:&nbsp;{NumberCompacter(props.amountPerAutoClick/(props.autoClickSpeed/1000))}/s</p>
                <p style={rowStyles}>Per selfclick:&nbsp;{NumberCompacter(props.amountPerClick)}</p>
                <p style={rowStyles}>Total Clicks:&nbsp;{NumberCompacter(props.clicksTotal)}</p>
                <br />
                <p style={rowStyles}>Pinecones:&nbsp;{NumberCompacter(props.pineconesCurrent)}</p>
        </div>
    )
}