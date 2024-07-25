import { state } from "./game-state.js";
import { config } from "./game-config.js";
import { factory } from "./game-objects.js";
const gameScore=document.querySelector('.game-score');
const gameArea=document.querySelector('.game-area');
// Game frames
function newFrame(){
  //move wiazard
 const wizardElement = modifyWizardPosition();

//modify fireballs
const fireballs=document.querySelectorAll('.fireball');
for (const fireball of fireballs) {
  if(fireball.offsetLeft>gameArea.offsetWidth){

    fireball.remove();
  }else{
    fireball.style.left =fireball.offsetLeft + config.magicSpeed+'px';
  }
    
}

//create bugs
if(state.lastBugSpawn + state.maxBugSpawnTime * Math.random() < Date.now()){
  factory.createBug();
  state.lastBugSpawn=Date.now();
}

//move bugs
const bugs=document.querySelectorAll('.bug');
bugs.forEach(bug=>{
  //remove outside bugs
  if(bug.offsetLeft<0){
    return bug.remove();
  }

  //check wizard collision
  const hasCollision= checkCollision(wizardElement, bug);
  if(hasCollision){
    state.isGameOver=true;
  }

  //check fireball collision
   const fireballs=document.querySelectorAll('.fireball');
   fireballs.forEach(fireball=>{
    if(checkCollision(fireball,bug)){
      fireball.remove();
      bug.remove();
      state.score+=config.bugPoints;
     }
   })

  //move bugs
 bug.style.left=bug.offsetLeft-config.bugSpeed + 'px';
});

//collision detection


  //apply score
  state.score+=config.timePoints;
  gameScore.textContent=state.score + 'pts.';
//game over check
 if(!state.isGameOver){
  window.requestAnimationFrame(newFrame);
 }else{
  const gameOverArea=document.querySelector('.game-over');
  gameOverArea.classList.remove('hidden');
 }
}

function checkCollision(firstElement, secondElement){
    const first = firstElement.getBoundingClientRect();
    const second = secondElement.getBoundingClientRect();

    const hasCollision= !(first.top>second.bottom 
        || first.bottom< second.top
        || first.right < second.left
        || first.left> second.right);

    return hasCollision;
}

// TODO: Fix the diagonal speed
function modifyWizardPosition(){
  const wizardElement = document.querySelector('.wizard');

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
  return wizardElement;
}

export let engine={
  start(){
   
  window.requestAnimationFrame(newFrame);
  }
}