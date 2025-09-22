// import toDo from "./toDo.js"]
import "./styles.css";
import sideBar from "./sideBar.js"
import rightSide from "./rightSide.js";
import form from "./form.js";
import addproject from "./addProject.js";

const projectholder = sideBar();
const {rightside} = rightSide();
addproject(projectholder.projectHolder,projectholder.sidebar,rightside,form());






