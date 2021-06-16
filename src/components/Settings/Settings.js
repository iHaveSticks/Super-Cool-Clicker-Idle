import React  from 'react';
import './Settings.css';

export default function settings(props) {

  return (
    <div id="settingsBackground">
        <div id="settingsMenu">
            <div id="settingsHead">
              <p style={{margin: "0"}}>Settings</p>
              <button type="button" className="btnNoStyle" id="closeSettings"
              onClick={()=> {document.getElementById("settingsBackground").style.display = "none"}}
              >X</button>
            </div>
            
            <div id="settingsContent">
              <p className="settingsOption">Autosave 
                  <button type="button"
                      className={"button buttonAvailable"}
                      onClick={() => props.switchAutoSave()}
                      >{props.autoSaveOn ? "ON" : "OFF"}
                  </button>
              </p>
              <p className="settingsOption">
                  <button type="button" id="deleteSaveBtn"
                      className={"button"}
                      onClick={() =>
                        {
                          props.setAutoSaveOn(false);
                          localStorage.removeItem("SavedGame");
                          window.location.reload()
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