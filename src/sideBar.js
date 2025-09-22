export default function sideBar()
{
    const content = document.getElementById("content");
    const sideBar = document.createElement("div");
    sideBar.id = "sidebar";
    content.appendChild(sideBar);
    
    const projectHolder = document.createElement("div");
    projectHolder.classList.add("project");
    sideBar.appendChild(projectHolder);

    function projectLista(name) 
    {
        const projectElement = document.createElement("div");
        projectElement.classList.add("projectElement");
        projectElement.textContent = name;
        const list = document.createElement("div");
        projectElement.appendChild(list);
        projectHolder.appendChild(projectElement);
        return {projectElement,list,items: []};
    };

    function addToList(projectLista,newElement)
    {
        let element = document.createElement("div");
        element.classList.add("elementFromList");
        element.textContent = newElement;
        projectLista.items.push(newElement);
        projectLista.list.appendChild(element);
    }

        let projectElement1 = projectLista("Home");
        let projectElement2 = projectLista("Enterntainment");
        let projectElement3 = projectLista("Extra");

        addToList(projectElement1,"wash dished");
        addToList(projectElement2,"watch tv");
        addToList(projectElement3,"homework");

}

