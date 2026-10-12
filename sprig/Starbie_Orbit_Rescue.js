/*
@title: Starbie Dino Dash
@description: An original endless dinosaur runner inspired by classic offline jumping games. Jump over cacti and beat your high score!
@author: Patrick Draghina
@tags: ['endless', 'arcade']
*/
const dino = "d";
const cactus = "c";
const ground = "g";

setLegend(
  [dino, bitmap`
................
.......000000...
......02222220..
......02022020..
......02222220..
......02222200..
......0222220...
......0222220...
...000222220....
..0222222220....
.02222222220....
.0222222220.....
..000222000.....
.....02020......
.....02020......
.....00000......`],
  [cactus, bitmap`
................
.......DD.......
.......DD.......
.......DD.......
...DD..DD.......
...DD..DD..DD...
...DDDDDD..DD...
.....DDDDDDDD...
.......DDDD.....
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
................`],
  [ground, bitmap`
LLLLLLLLLLLLLLLL
1111111111111111
LLLLLLLLLLLLLLLL
1111111111111111
LLLLLLLLLLLLLLLL
1111111111111111
LLLLLLLLLLLLLLLL
1111111111111111
LLLLLLLLLLLLLLLL
1111111111111111
LLLLLLLLLLLLLLLL
1111111111111111
LLLLLLLLLLLLLLLL
1111111111111111
LLLLLLLLLLLLLLLL
1111111111111111`]
);

setBackground("g");
setSolids([]);
const blank = map`
................
................
................
................
................
................
................
................`;
let score = 0;
let best = 0;
let running = true;
let jumpTicks = 0;
let spawnTimer = 0;
let speedCounter = 0;

function startGame() {
  setMap(blank);
  addSprite(2, 6, dino);
  score = 0;
  running = true;
  jumpTicks = 0;
  spawnTimer = 7;
  speedCounter = 0;
  drawHud();
}

function drawHud() {
  clearText();
  addText("DINO DASH", { x: 1, y: 0, color: color`0` });
  addText("S:" + score + " B:" + best, { x: 1, y: 1, color: color`0` });
  if (!running) {
    addText("GAME OVER", { x: 4, y: 5, color: color`3` });
    addText("J = RESTART", { x: 3, y: 7, color: color`0` });
  }
}

function jump() {
  if (!running) return;
  if (jumpTicks === 0) jumpTicks = 4;
}

onInput("w", jump);
onInput("i", jump);
onInput("j", () => { if (!running) startGame(); else jump(); });

function tick() {
  if (!running) return;
  speedCounter++;

  // Jump is deliberately two tiles high at its peak.
  const hero = getFirst(dino);
  if (!hero) return;
  if (jumpTicks > 0) {
    hero.y = jumpTicks === 4 || jumpTicks === 1 ? 5 : 4;
    jumpTicks--;
  } else {
    hero.y = 6;
  }

  // Scroll all cacti one cell to the left.
  const obstacles = getAll(cactus);
  for (const obj of obstacles) {
    if (obj.x === 0) {
      obj.remove();
      score++;
      if (score > best) best = score;
    } else {
      obj.x -= 1;
    }
  }

  // Collision only occurs if dinosaur and cactus occupy the same tile.
  if (getAll(cactus).some(obj => obj.x === hero.x && obj.y === hero.y)) {
    running = false;
    drawHud();
    return;
  }

  spawnTimer--;
  if (spawnTimer <= 0) {
    addSprite(15, 6, cactus);
    // Increase difficulty gently as the player progresses.
    spawnTimer = Math.max(5, 9 - Math.floor(score / 5)) + (speedCounter % 3);
  }
  drawHud();
}

startGame();
setInterval(tick, 230);
