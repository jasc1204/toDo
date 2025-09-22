export default function rightSide(){
    const content = document.getElementById("content");
    const rightside = document.createElement("div");
    rightside.id = "rightside";
    content.appendChild(rightside);
    return {rightside};

}