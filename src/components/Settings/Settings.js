import React  from 'react';
import './Settings.css';

export default function settings(props) {

  return (
    <div id="settingsBackground" onClick={(event)=> {if(event.target.id === "settingsBackground") closeSettings()} }>
        <div id="settingsMenu" >
            <div id="settingsHead">
            {/* close menu button */}
              <p style={{margin: "0"}}>Settings</p> 
              <button type="button" className="btnNoStyle" id="closeSettings"
              onClick={()=> closeSettings()}
              >X</button>
            </div>
            
            <div id="settingsContent">
            {/* autosave button */}
              <p className="settingsOption">Autosave 
                  <button type="button"
                      className={"button buttonAvailable"}
                      onClick={() => props.switchAutoSave()}
                      >{props.autoSaveOn ? "ON" : "OFF"}
                  </button>
              </p>
            {/* delete save button */}
              <p className="settingsOption">
                  <button type="button" id="deleteSaveBtn"
                      className={"button"}
                      onClick={() =>
                        {
                          if(window.confirm("Do you really want to delete yopur save?")) {
                            props.setAutoSaveOn(false);
                            localStorage.removeItem("SavedGame");
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

function closeSettings() {
  document.getElementById("settingsBackground").style.display = "none";
  document.body.style.overflow = "auto";
}