// index js file
import { Util } from "./utils/globals";
import { Canvas } from "./utils/canvas";
import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
  console.log("webpack is running...");
  console.log("DOM fully loaded and parsed");
  window.requestAnimFrame = Util.requestAnimFrame;
  // style the page's buttons
  let controlsBtn = document.querySelector("#controls-btn");
  controlsBtn.addEventListener("click", e => {
    let controls = document.querySelector(".controlsModal");
    controls.classList.toggle("transparent");
  });
  let volumeBtn = document.querySelector("#volume-btn");
  volumeBtn.addEventListener("click", e => {
    let innerText = volumeBtn.innerHTML;
    if (innerText === "Mute") {
      volumeBtn.innerHTML = "Unmute";
    } else {
      volumeBtn.innerHTML = "Mute";
    }
  });
  // create the game canvas
  const canvas = new Canvas({
    canvas: document.getElementById("gameCanvas"),
    container: document.getElementById("gameContainer"),
    objects: []
  });
  // initialize the game
  const game = new Game({ canvas });
  game.init();
  // render the game
  const render = () => {
    window.requestAnimationFrame(render);
    game.render();
  };

  window.requestAnimationFrame(render);
});
