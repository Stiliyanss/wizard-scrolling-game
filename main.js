import { state } from "./game-state.js";
import { factory } from "./game-objects.js";
import "./game-controls.js"
import { engine } from "./game-engine.js";



const startElement=document.querySelector('.game-start');
startElement.addEventListener('click',(e)=>{
  // hide start element
  e.currentTarget.classList.add('hidden');

  //initialize game
factory.createWizard(state.wizard);

  

})

     


