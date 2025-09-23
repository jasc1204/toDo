export default function sideBar()
{
    const content = document.getElementById("content");
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    content.appendChild(sidebar);
    
    const projectHolder = document.createElement("div");
    projectHolder.classList.add("project");
    sidebar.appendChild(projectHolder);

    const projects = [];
    function projectLista(name) 
    {
        const projectElement = document.createElement("div");
        projectElement.classList.add("projectElement");
        projectElement.textContent = name;
        const list = document.createElement("div");
        projectElement.appendChild(list);
        projectHolder.appendChild(projectElement);

        const proj = {name,projectElement,list, items: []};
        projects.push(proj);          
        return proj;
    };

    function addToList(projectLista,newElement)
    {
        let element = document.createElement("div");
        element.classList.add("elementFromList");
        element.textContent = newElement;
        projectLista.items.push(newElement);
        projectLista.list.appendChild(element);
    }

    const addButton = document.createElement("button");
    addButton.textContent= "Add new task+";
    addButton.id = "addButton";
    projectHolder.append(addButton);

    addButton.addEventListener("click",(e) =>{
        rightside.appendChild(form);
        });
    

//     const submitButton = document.createElement("button");
//     submitButton.type = "submit";
//     submitButton.textContent = "save";
//     form.appendChild(submitButton);

//     form.addEventListener("submit", (e) =>{
//         e.preventDefault()
//          const project = document.getElementById("project").value;
//          const title = document.getElementById("title").value;
//          const description = document.getElementById("description").value;
//          const duedate = document.getElementById("dueDate").value;
//          const priority = document.getElementById("priority").value;

//         // Bundle them into a single object
//         const todoInformation = {project,title,description,duedate,priority};
//         //Saves to Local Storage
//         displayNewProject(todoInformation);
//         saveTodo(todoInformation);
//     });

//  function saveTodo(todo) 
//  {
//     // get existing todos, or [] if none
//     let todos = JSON.parse(localStorage.getItem("todos")) || [];
    
//     todos.push(todo);
    
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// function displayNewProject (todoInformation)
// {
//     const project = projects.find(p => p.name === todoInformation.project);
//     if (project)
//     {
//         const addElement = document.createElement("div");
//         addElement.textContent = todoInformation.title;
//         addElement.id  = "add Id HERE so i can later track it right?"
//         project.list.appendChild(addElement);
        
//         addElement.addEventListener("click", (e) =>{
//             const project = document.getElementById("project").value;
//             const title = document.getElementById("title").value;
//             const description = document.getElementById("description").value;
//             const duedate = document.getElementById("dueDate").value;
//             const priority = document.getElementById("priority").value;
//         })
//     }
// }

// function loadTodos() {
//   const todos = JSON.parse(localStorage.getItem("todos")) || [];
//   todos.forEach(displayNewProject);
// }
// loadTodos(); 



    // let projectElement1 = projectLista("Home");
    // let projectElement2 = projectLista("Enterntainment");
    // let projectElement3 = projectLista("Extra");

    // addToList(projectElement1,"wash dished");
    // addToList(projectElement2,"watch tv");
    // addToList(projectElement3,"homework");
    return {projectHolder,sidebar,projects};

}

