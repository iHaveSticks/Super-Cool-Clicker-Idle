import React from 'react';
import {GameStatStyles, rowStyles, listStyles} from "./GameStats.css.js";
import NumberCompacter from './../../functions/number-compacter.js';



export default function GameStats(props)  {
    /*
    Displays game statistics inside a box
    */
    return(
        <aside style={GameStatStyles}>
            <h3>Stats</h3>
                <p style={rowStyles}>Per selfclick:&nbsp;{NumberCompacter(props.perClick)}</p>
                <p style={rowStyles}>Clicks:&nbsp;{NumberCompacter(props.perAutoClick/(props.autoClickSpeed/1000))}/s</p>
                {props.numOfPinetrees > 0 &&
                <p style={rowStyles}> 
                    Pinecones:&nbsp;{NumberCompacter((props.numOfPinetrees * props.pinetreesMod)/(props.autoClickSpeed/1000))}/s
                    <ul style={listStyles}>
                        <li><em>Pinetrees: {NumberCompacter(props.numOfPinetrees)}</em></li>
                        <li><em>Modifier: {NumberCompacter(props.pinetreesMod)}</em></li>
                    </ul>
                </p>
                }
                <br />
                <p style={rowStyles}>Pinecones:&nbsp;{NumberCompacter(props.pineconesCurrent)}</p>
                <p style={rowStyles}>Total Clicks:&nbsp;{NumberCompacter(props.clicksTotal)}</p>
        </aside>
    )
}