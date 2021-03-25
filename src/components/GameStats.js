import React from 'react';
import NumberCompacter from './../functions/number-compacter';

const GameStatStyles = {
    padding: '1em',
    width: '14em',
    whiteSpace: "nowrap",
    display: "block",
    border: "3px solid #e6e6e6",
    overflow: "hidden"
}
const rowStyles = {
    margin: '.1em'
}
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