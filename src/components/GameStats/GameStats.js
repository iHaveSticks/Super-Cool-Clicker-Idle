import React from 'react';
import "./GameStats.css";
import NumberCompacter from './../../functions/number-compacter.js';
/* global BigInt */ //<-- enable BigInt()


export default function GameStats(props)  {
    /*
    Displays game statistics inside a box
    */
    return(
        <aside id={"gameStatsInside"}>
            <h3>Stats</h3>
                <p className={"rowStyles"}>Selfclick:&nbsp;{NumberCompacter(props.perClick * props.weirdRockAmount)}</p>
                {props.perAutoClick > 0 &&
                    <p className={"rowStyles"}>Auto:&nbsp;{
                        NumberCompacter(
                            ((props.perAutoClick * props.weirdRockAmount)
                            * BigInt(Math.round(1000 / props.autoClickSpeed * 10))
                            / 10n)
                        )}/s
                    </p>
                }
                {props.numOfPinetrees > 0 &&
                    <div>
                        <p className={"rowStyles"}> 
                            Pinecones:&nbsp;{NumberCompacter(
                                ((props.numOfPinetrees * props.pinetreesMod) 
                                * BigInt(Math.round(1000 / props.autoClickSpeed * 10))
                                / 10n)
                            )}/s&nbsp;
                            
                        </p>
                        <ul className={"listStyles"}>
                            <li><em>Pinetrees: {NumberCompacter(props.numOfPinetrees)}</em></li>
                            <li><em>Modifier: {NumberCompacter(props.pinetreesMod)}</em></li>
                        </ul>
                        
                        <br />
                        <p className={"rowStyles"}>Pinecones:&nbsp;{NumberCompacter(props.pineconesCurrent)}</p>
                    </div>
                }
                <p className={"rowStyles"}>Total Clicks:&nbsp;{NumberCompacter(props.clicksTotal)}</p>
                
                {props.weirdRockAmount > 1 &&
                    <p className={"rowStyles"}>Weird Rocks:&nbsp;{NumberCompacter(props.weirdRockAmount)}</p>
                }
        </aside>
    )
}