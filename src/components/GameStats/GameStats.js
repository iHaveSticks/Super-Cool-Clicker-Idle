import React from 'react';
import {GameStatStyles, rowStyles} from "./GameStats.css.js";
import NumberCompacter from './../../functions/number-compacter.js';



class GameStats extends React.Component {
    render() {
        return(
            <div style={GameStatStyles}>
                <h3>Stats</h3>
                    <p style={rowStyles}>Per autoclick:&nbsp;{NumberCompacter(this.props.amountPerAutoClick/(this.props.autoClickSpeed/1000))}/s</p>
                    <p style={rowStyles}>Per selfclick:&nbsp;{NumberCompacter(this.props.amountPerClick)}</p>
                    <p style={rowStyles}>Total Clicks:&nbsp;{NumberCompacter(this.props.clicksTotal)}</p>
                    <br />
                    <p style={rowStyles}>Pinecones:&nbsp;{NumberCompacter(this.props.pineconesCurrent)}</p>
            </div>
        )
    }
}

export default GameStats;