import React from 'react';

const GameStatStyles = {
    padding: '1em',
    minWidth: '14em',
    float: 'left',
    display: "block",
    border: "3px solid #e6e6e6"
}
const rowStyles = {
    margin: '.1em'
}
class GameStats extends React.Component {
    render() {
        return(
            <div style={GameStatStyles}>
                <h3>Stats</h3>
                    <p style={rowStyles}>Per autoclick:&nbsp;{(this.props.amountPerAutoClick/(this.props.autoClickSpeed/1000)).toFixed(0)}/s</p>
                    <p style={rowStyles}>Per selfclick:&nbsp;{this.props.amountPerClick.toFixed(0)}</p>
                    <p style={rowStyles}>Total Clicks:&nbsp;{this.props.clicksTotal.toFixed(0)}</p>
            </div>
        )
    }
}

export default GameStats;