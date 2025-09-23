export default function addProject (projectHolder,sidebar,rightside,form,sideBarData)
{
//     const {projects} = sideBarData;
//     const addButton = document.createElement("button");
//     addButton.textContent= "Add new task+";
//     addButton.id = "addButton";
//     projectHolder.append(addButton);

//     addButton.addEventListener("click",(e) =>{
//         rightside.appendChild(form);
//         });
    

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

}