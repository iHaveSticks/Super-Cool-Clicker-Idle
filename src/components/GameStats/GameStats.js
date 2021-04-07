import React from 'react';
import {GameStatStyles, rowStyles} from "./GameStats.css.js";
import NumberCompacter from './../../functions/number-compacter.js';



export default function GameStats(props)  {
    /*
    Displays game statistics inside a box
    */
    return(
        <div style={GameStatStyles}>
            <h3>Stats</h3>
                <p style={rowStyles}>Per autoclick:&nbsp;{NumberCompacter(props.perAutoClick/(props.autoClickSpeed/1000))}/s</p>
                <p style={rowStyles}>Per selfclick:&nbsp;{NumberCompacter(props.perClick)}</p>
                <p style={rowStyles}>Total Clicks:&nbsp;{NumberCompacter(props.clicksTotal)}</p>
                <br />
                <p style={rowStyles}>Pinecones:&nbsp;{NumberCompacter(props.pineconesCurrent)}</p>
        </div>
    )
}