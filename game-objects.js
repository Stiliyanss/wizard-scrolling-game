// Game objects creation
const gameArea=document.querySelector('.game-area');  
export const factory={
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
  },
  createFireball(wizard){
    const fireballElement=document.createElement('div');
    fireballElement.classList.add('fireball');

    //styles
    
      fireballElement.style.backgroundImage = 'url("images/fire-ball.png")';
      fireballElement.style.backgroundSize = 'contain';
      fireballElement.style.backgroundRepeat = 'no-repeat';
      fireballElement.style.backgroundPosition = 'center';
      fireballElement.style.width = '20px';
      fireballElement.style.height = '20px';
      fireballElement.style.position ='absolute';
    

    //position
    // TODO: need adjustment to match arm position
    fireballElement.style.left=wizard.x+wizard.width+'px';
    fireballElement.style.top=wizard.y+wizard.width/2+'px'; 

    //add to DOM
    gameArea.appendChild(fireballElement);
  }
}
