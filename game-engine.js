import { state } from "./game-state.js";
import { config } from "./game-config.js";
import { factory } from "./game-objects.js";
const gameScore=document.querySelector('.game-score');
// Game frames
function newFrame(){
  //move wiazard
modifyWizardPosition();

  //apply score
  state.score+=config.timePoints;
  gameScore.textContent=state.score + 'pts.';
//game over check
 if(!state.isGameOver){
  window.requestAnimationFrame(newFrame);
 }
}
// TODO: Fix the diagonal speed
function modifyWizardPosition(){
  const wizardElement = document.querySelector('.wizard');
  const gameArea=document.querySelector('.game-area');
  //wizard movement
 if(state.controls.KeyA && state.wizard.x > 0){
   wizardElement.style.left = `${state.wizard.x-=config.speed}px`; 
 }
 if(state.controls.KeyD && state.wizard.x-state.wizard.width<gameArea.offsetWidth){
   wizardElement.style.left = `${state.wizard.x+=config.speed}px`; 
 }
 if(state.controls.KeyW && state.wizard.y>0){
   wizardElement.style.top = `${state.wizard.y-=config.speed}px`; 
 }
 if(state.controls.KeyS && state.wizard.y+state.wizard.height<gameArea.offsetHeight){
   wizardElement.style.top = `${state.wizard.y+=config.speed}px`; 
 }
 if(state.controls.Space){
  wizardElement.style.backgroundImage = 'url("images/wizard-fire.png")';

  //create fireball
  factory.createFireball(state.wizard);
 }else{
  wizardElement.style.backgroundImage = 'url("images/wizard.png")';
 }
 
}

export let engine={
  start(){
   
  window.requestAnimationFrame(newFrame);
  }
}