// State initialization
const state = {
  player:'Navcho the destroyer',
  wizard: {
      x: 100,
      y: 100,
      width: 50,
      height: 50, 
  },
  isGameOver: false,
  points:0,
  controls: {
    KeyA:false,
    KeyS:false,
    KeyD:false,
    KeyW:false,
    Space:false,
  }
};

// Game objects creation
const gameArea=document.querySelector('.game-area');  
const factory={
  createWizard(wizard){
    //create element
    const wizardElement=document.createElement('div');
    wizardElement.classList.add('wizard');

    //set styles
    wizardElement.style.width=wizard.width + 'px';
    wizardElement.style.height=wizard.height + 'px';
    wizardElement.style.backgroundImage = 'url("images/wizard.png")';
    wizardElement.style.backgroundSize='contain';
    wizardElement.style.backgroundRepeat='no-repeat';
    wizardElement.style.backgroundPosition='center';

    //set position
    wizardElement.style.position='absolute';
    wizardElement.style.left=wizard.x + 'px';
    wizardElement.style.top=wizard.y + 'px';

    //attach to DOM 
    gameArea.appendChild(wizardElement);
  }
}

// Input control
document.addEventListener('keydown', (e)=>{
 if(state.controls.hasOwnProperty(e.code)){
  state.controls[e.code]=true;
 }
});

document.addEventListener('keyup', (e)=>{
  if(state.controls.hasOwnProperty(e.code)){
    state.controls[e.code]=false;
  }
});

// Game frames
function newFrame(){
  console.log(state.controls);
 const wizardElement = document.querySelector('.wizard');

 wizardElement.style.left = state.wizard.x++ +'px';

 if(!state.isGameOver){
  window.requestAnimationFrame(newFrame);
 }
}

const startElement=document.querySelector('.game-start');
startElement.addEventListener('click',(e)=>{
  // hide start element
  e.currentTarget.classList.add('hidden');

  //initialize game
factory.createWizard(state.wizard);

  //start game
  window.requestAnimationFrame(newFrame);

})

     


