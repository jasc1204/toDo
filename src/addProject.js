export default function addProject (projectHolder,sidebar,rightside,form)
{
    const addButton = document.createElement("button");
    addButton.textContent= "Add new task+";
    addButton.id = "addButton";
    projectHolder.append(addButton);

    addButton.addEventListener("click",(e) =>{
        rightside.appendChild(form);
        });
    
}