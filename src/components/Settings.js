import React  from 'react';
import closeSettings from '../functions/closeSettings';

import onUnload from '../functions/onUnload.js';

export default function settings(props) {
  return (
    <div id="settingsBackground" 
    onClick={(event)=> {if(event.target.id === "settingsBackground") closeSettings()} }
    onKeyDown={(event)=> {if(event.key === "Escape") closeSettings()} }
    >
        <div id="settingsMenu" >
            <div id="settingsHead">
            {/* close menu button */}
              <p style={{margin: "0"}}>Settings</p> 
              <button type="button" className="btnNoStyle" id="closeSettings"
              onClick={()=> closeSettings()}
              >X</button>
            </div>
            
            <div id="settingsContent" tabIndex="-1">
            {/* autosave switch */}
              <div style={{display: "flex", flexDirection: "row"}}>
                <p className="settingsOption">Autosave</p>
                  <div className="switch">
                    <input type="checkbox" name="switch" className="switchCheckbox" id="switchAutosave" tabIndex="0" defaultChecked
                      onKeyDown={(event) => {if(event.key === "Enter") {event.target.checked = !event.target.checked; props.switchAutoSave()}}}
                      onChange={() => props.switchAutoSave()}
                    />
                    <label className="switchLabel" htmlFor="switchAutosave" />
                  </div>
                </div>
            {/* delete save button */}
              <p className="settingsOption">
                  <button type="button" id="deleteSaveBtn"
                      className={"button"}
                      onClick={() =>
                        {
                          if(window.confirm("Do you really want to delete your save?\nThis cannot be undone.")) {
                            props.setAutoSaveOn(false);
                            localStorage.removeItem("SavedGame");
                            window.removeEventListener('beforeunload', onUnload, {capture: true});
                            window.location.reload();
                          }
                        }
                      }>
                      Delete Save
                  </button>
              </p>
            </div>
        </div>
    </div>
  )
}