export const state = {
  player:'Navcho the destroyer',
  wizard: {
      x: 100,
      y: 100,
      width: 50,
      height: 50, 
      lastMagicUse:0,
      cooldown: 1000,
  },
  isGameOver: false,
  score:0,
  timePoint:1,
  controls: {
    KeyA:false,
    KeyS:false,
    KeyD:false,
    KeyW:false,
    Space:false,
  },
  lastBugSpawn:0,
  maxBugSpawnTime:20000,
};
