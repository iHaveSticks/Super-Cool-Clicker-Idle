import gearSVG from "../assets/icons/gear.svg";
import openSettings from '../functions/openSettings.js';
import NumberCompacter from '../functions/number-compacter.js';


export default function MainHead(props) {

  return(
    <div id="mainHead">  
      <h1>Super Cool Clicker&nbsp;Idle</h1>
      
      <div style={{display: "flex"}}>
          <h2 id={"clicksCurrent"}> {NumberCompacter(props.clicksCurrent)} </h2>
          <img id="openSettingBtn" src={gearSVG} alt="settings" tabIndex="0"
          onClick={()=>openSettings()}
          onKeyDown={ (event) => {if(event.key === "Enter") openSettings()}}
          />
          
      </div>
  </div>
  )
}