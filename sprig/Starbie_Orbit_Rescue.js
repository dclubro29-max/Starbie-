/*
@title: Starbie Orbit Rescue
@description: Collect stars and navigate seven asteroid mazes to activate escape portals.
@author: Patrick Draghina
@tags: ['puzzle', 'maze']
*/
const player = "p";
const wall = "w";
const star = "s";
const goal = "g";
setLegend(
  [player, bitmap`
................
.......33.......
......3333......
.....333333.....
....33333333....
...3333333333...
..333333333333..
.33333333333333.
.33333333333333.
..333333333333..
...3333333333...
....33333333....
.....333333.....
......3333......
.......33.......
................`],
  [wall, bitmap`
5555555555555555
5555555555555555
55LLLL5555LLLL55
55LLLL5555LLLL55
5555555555555555
5555555555555555
55LLLL5555LLLL55
55LLLL5555LLLL55
5555555555555555
5555555555555555
55LLLL5555LLLL55
55LLLL5555LLLL55
5555555555555555
5555555555555555
5555555555555555
5555555555555555`],
  [star, bitmap`
................
.......6........
.......6........
......666.......
...666666666....
.....66666......
......666.......
......666.......
.....66.66......
....66...66.....
...66.....66....
................
................
................
................
................`],
  [goal, bitmap`
................
....77777777....
...77......77...
..77........77..
.77..........77.
.7............7.
.7............7.
.7............7.
.7............7.
.7............7.
.77..........77.
..77........77..
...77......77...
....77777777....
................
................`]
);
setSolids([player, wall]);
const levels = [
  map`
wwwwwwwwww
wp..s....w
w.ww.ww..w
w....w...w
w.ww...w.w
w...ww...w
w.s.....gw
wwwwwwwwww`,
  map`
wwwwwwwwww
wp.....s.w
w.wwww.w.w
w......w.w
w.ww.ww..w
w..s.....w
w....ww.gw
wwwwwwwwww`,
  map`
wwwwwwwwww
wp..w....w
w...w.s..w
w.w...ww.w
w...w....w
w.s...w..w
w....w..gw
wwwwwwwwww`,
  map`
wwwwwwwwww
wp....w..w
w.ww..w.s.w
w..w......w
w..w.ww...w
w.s......ww
w...ww..gw
wwwwwwwwww`,
  map`
wwwwwwwwww
wp...w...w
w.ww...s.w
w..w.ww..w
w....w...w
w.s....w.w
w...ww..gw
wwwwwwwwww`,
  map`
wwwwwwwwww
wp...w.s.w
w.w......w
w...ww.w.w
ww.w......w
w..s..ww.w
w......g.w
wwwwwwwwww`,
  map`
wwwwwwwwww
wp.w.....w
w..w.s.w.w
w....w...w
w.w..w.w.w
w.s......w
w....ww.gw
wwwwwwwwww`
];
let level = 0;
let complete = false;
function loadLevel() {
  clearText();
  setMap(levels[level]);
  complete = false;
  showHud();
}
function showHud() {
  if (complete) return;
  clearText();
  addText("Sector " + (level + 1) + "/7", { x: 1, y: 0, color: color`3` });
  addText("Stars: " + getAll(star).length, { x: 1, y: 1, color: color`6` });
}
function move(dx, dy) {
  if (complete) return;
  const p = getFirst(player);
  if (!p) return;
  p.x += dx;
  p.y += dy;
  const current = getFirst(player);
  const tile = getTile(current.x, current.y);
  tile.filter(t => t.type === star).forEach(t => t.remove());
  if (tile.some(t => t.type === goal) && getAll(star).length === 0) {
    if (level === levels.length - 1) {
      complete = true;
      clearText();
      addText("MISSION COMPLETE", { x: 1, y: 5, color: color`6` });
      addText("J TO REPLAY", { x: 3, y: 7, color: color`3` });
    } else {
      level++;
      loadLevel();
    }
  } else {
    showHud();
  }
}
onInput("w", () => move(0, -1));
onInput("s", () => move(0, 1));
onInput("a", () => move(-1, 0));
onInput("d", () => move(1, 0));
onInput("j", () => { if (complete) level = 0; loadLevel(); });
loadLevel();
