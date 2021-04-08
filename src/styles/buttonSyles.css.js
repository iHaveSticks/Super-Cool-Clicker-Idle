

/* 
    Specific styles for whether a button is available
    If anavailable pointer events are disabled
*/

export const buttonAvailable = {
    fontSize: '.8em',
    borderStyle: 'none',
    marginLeft: '1em',
    minWidth: '5em',
    backgroundColor: '#DA7422',
    minHeight: '2.3em',
    cursor: "pointer"
}
export const buttonUnavailable = {
    fontSize: '.8em',
    borderStyle: 'none',
    marginLeft: '1em',
    minWidth: '5em',
    minHeight: '2.3em',
    backgroundColor: 'grey',
    pointerEvents: 'none',
    cursor: "default"
}