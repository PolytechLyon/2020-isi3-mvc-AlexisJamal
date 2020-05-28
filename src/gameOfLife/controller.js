export const controller = model => {
  document.getElementById("start").onclick = () => model.run();
  document.getElementById("stop").onclick = () => model.stop();
  document.getElementById("reset").onclick = () => model.reset();
};
