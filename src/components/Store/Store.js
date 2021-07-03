import React, {useRef} from 'react';

import Store1 from "./Store1.js";
import Store2 from "./Store2.js";
import Store3 from "./Store3.js";

import menuControls from '../../functions/menuControls.js';
import showMessage from "../../functions/showMessage.js";
import NumberCompacter from '../../functions/numberCompacter.js';
import './Store.css'

export default function Store(props) {

  const forestReq = useRef(15000);
  const mountainReq = useRef(1e+9);

  return (
    <div id="storeContainer">
        <p> {/* clicker button */}
          <button type="button"
              className={"buttonAvailable button"}
              // Prevent button spamming
              onKeyPress={ (event) => {if(event.key === "Enter") {event.preventDefault()}} }
              // Add clicks per button press
              onClick={() => props.handleClickerButton()} 
              onKeyUp={ (event) => {if(event.key === "Enter") {props.handleClickerButton()}} }
              >Click
          </button>
      </p>
      
      
      {props.clicksTotal >= 30 &&
      /*    Navigation Menu    */

      <div style={{padding: "0 .5em 1em .5em"}}>
        <h3 style={{marginBottom: ".2em"}}>Store</h3>

        
        <nav id="storeMenu" >
          <button 
              id="storeTown" 
              className={`active`}
              onClick={()=>{menuControls("store1", "storeTown")}}
          >
              Town
          </button>

          <button 
              id="storeForest" 
              className={`${props.clicksTotal > forestReq.current ? 'inactive' : 'buttonUnavailable'}`}
              style={{pointerEvents: "initial"}}
              onClick={()=>{ // Display message if button is unavailable
                            props.clicksTotal > forestReq.current
                            ? menuControls("store2", "storeForest")
                            : showMessage(`Need <strong>${NumberCompacter(forestReq.current)}</strong><br>total clicks`)
                            } 
                      }
              disabled={!props.clicksTotal > forestReq.current}
          >
              Forest
          </button>

          <button 
              id="storeMountain" 
              className={`${props.clicksTotal > mountainReq.current ? 'inactive' : 'buttonUnavailable'}`}
              style={{pointerEvents: "initial"}}
              onClick={()=>{ // Display message if button is unavailable
                            props.clicksTotal > mountainReq.current
                            ? menuControls("store3", "storeMountain")
                            : showMessage(`Need <strong>${NumberCompacter(mountainReq.current)}</strong><br>total clicks`)
                            } 
                      }
              disabled={!props.clicksTotal > mountainReq.current}
          >
              Mountain
          </button>
        </nav>
        
      </div>
      }

      {/* Store */}
      <div id="store">
        <div id="store1" style={{"display": "initial"}}>
            <Store1
            // Variables
              clicksTotal = {props.clicksTotal}
              clicksCurrent = {props.clicksCurrent}
              autoClickSpeed = {props.autoClickSpeed}
              autoClick2xPrice = {props.autoClick2xPrice}
              autoClick4xPrice = {props.autoClick4xPrice}
              perClick2xPrice = {props.perClick2xPrice}
              perClick4xPrice = {props.perClick4xPrice}
              autoClickSpeedPrice = {props.autoClickSpeedPrice}
              twoS1 = {props.twoS1}
              fourS1 = {props.fourS1}


            // Functions
              buyAuto2x = {props.buyAuto2x}
              buyAuto4x = {props.buyAuto4x}
              buyExClick2x = {props.buyExClick2x}
              buyExClick4x = {props.buyExClick4x}
              buyAutoSpeed = {props.buyAutoSpeed}
            />
        </div>
        <div id="store2" style={{"display": "none"}}>
            <Store2
            // Variables
              clicksTotal = {props.clicksTotal}
              clicksCurrent = {props.clicksCurrent}
              pineconesCurrent = {props.pineconesCurrent}
              pinetreePrice = {props.pinetreePrice}
              doubleBaseS1Price = {props.doubleBaseS1Price}
              pinetreesMod = {props.pinetreesMod}
              pinetreesModPrice = {props.pinetreesModPrice}

            // Functions
              buyPinetreesMod = {props.buyPinetreesMod}
              increaseBasePrice2x = {props.increaseBasePrice2x}
              buyPineTree = {props.buyPineTree}
            />
        </div>
        <div id="store3" style={{"display": "none"}}>
            <Store3
            // Variables
              clicksTotal = {props.clicksTotal}
              pineconesCurrent = {props.pineconesCurrent}
              weirdRockAmount = {props.weirdRockAmount}
              weirdRockPrice = {props.weirdRockPrice}

            // Functions
              buyWeirdRock = {props.buyWeirdRock}
                
            />
        </div>
      </div>
    </div>
  )
}

