// Starbie browser simulator: demonstration only, not device firmware.
const screens = ["clock", "status", "settings", "about"];
const state = { index: 0, battery: 85, brightness: 80, charging: false, mode: "normal" };
const $ = id => document.getElementById(id);
function log(message) {
  const time = new Date().toLocaleTimeString();
  $("log").textContent = `[${time}] ${message}\n` + $("log").textContent;
}
function render() {
  const screen = screens[state.index];
  let html = "";
  if (screen === "clock") {
    const now = new Date();
    html = `<div class="small">STAR BIE</div><div class="big">${now.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}</div><div class="small">${now.toLocaleDateString()}</div>`;
  } else if (screen === "status") {
    html = `<div class="symbol">⚡</div><div class="big">${state.battery}%</div><div class="small">${state.charging ? "Charging" : state.battery < 20 ? "Low battery" : "On battery"}</div>`;
  } else if (screen === "settings") {
    html = `<div class="small">SETTINGS</div><div class="big">☼ ${state.brightness}%</div><div class="small">Mode: ${state.mode}</div>`;
  } else {
    html = '<div class="symbol">✦</div><div class="big">Starbie</div><div class="small">Software concept v0.1</div>';
  }
  $("screen").innerHTML = html;
  $("screen").style.filter = `brightness(${state.brightness / 100})`;
  $("batteryLabel").textContent = state.battery + "%";
  $("brightnessLabel").textContent = state.brightness + "%";
}
function navigate(delta) {
  state.index = (state.index + delta + screens.length) % screens.length;
  log("Screen: " + screens[state.index]);
  render();
}
$("next").addEventListener("click", () => navigate(1));
$("back").addEventListener("click", () => navigate(-1));
$("select").addEventListener("click", () => {
  if (screens[state.index] === "settings") state.mode = state.mode === "normal" ? "eco" : "normal";
  log("Select on " + screens[state.index]); render();
});
$("battery").addEventListener("input", e => { state.battery = Number(e.target.value); log("Battery simulated: " + state.battery + "%"); render(); });
$("brightness").addEventListener("input", e => { state.brightness = Number(e.target.value); render(); });
$("charging").addEventListener("change", e => { state.charging = e.target.checked; log("Charging simulated: " + state.charging); render(); });
document.addEventListener("keydown", e => { if(e.key === "ArrowRight") navigate(1); if(e.key === "ArrowLeft") navigate(-1); if(e.key === "Enter") $("select").click(); });
setInterval(() => { if(screens[state.index] === "clock") render(); }, 1000);
log("Simulator started"); render();
