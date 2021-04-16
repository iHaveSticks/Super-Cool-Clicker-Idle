import React from 'react';
import "./GameStats.css";
import NumberCompacter from './../../functions/number-compacter.js';



export default function GameStats(props)  {
    /*
    Displays game statistics inside a box
    */
    return(
        <aside id={"gameStatsInside"}>
            <h3>Stats</h3>
                <p className={"rowStyles"}>Per selfclick:&nbsp;{NumberCompacter(props.perClick)}</p>
                <p className={"rowStyles"}>Clicks:&nbsp;{NumberCompacter(props.perAutoClick/(props.autoClickSpeed/1000))}/s</p>
                {props.numOfPinetrees > 0 &&
                    <div>
                        <p className={"rowStyles"}> 
                            Pinecones:&nbsp;{NumberCompacter((props.numOfPinetrees * props.pinetreesMod)/(props.autoClickSpeed/1000))}/s&nbsp;
                            
                        </p>
                        <ul className={"listStyles"}>
                            <li><em>Pinetrees: {NumberCompacter(props.numOfPinetrees)}</em></li>
                            <li><em>Modifier: {NumberCompacter(props.pinetreesMod)}</em></li>
                        </ul>
                    </div>
                }
                <br />
                <p className={"rowStyles"}>Pinecones:&nbsp;{NumberCompacter(props.pineconesCurrent)}</p>
                <p className={"rowStyles"}>Total Clicks:&nbsp;{NumberCompacter(props.clicksTotal)}</p>
        </aside>
    )
}