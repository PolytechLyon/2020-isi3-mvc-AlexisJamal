import "./style.css";
import { initView, drawGame } from "./gameOfLife/view";
import { Model } from "./gameOfLife/model";
import { controller } from "./gameOfLife/controller.js";

initView();

const model = new Model();

model.init();
drawGame(model);
controller(model);
