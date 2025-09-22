export default function form(){

let formElement = document.createElement("form");
    function createLabelandType(htmlFor,type,textContent)
    {
        const label = document.createElement("label");
        label.htmlFor = htmlFor;
        label.textContent = textContent;
        const input = document.createElement("input");
        input.type = type;
        input.id = htmlFor;
        formElement.append(label,input);
    }

    createLabelandType("title","text","title");
    createLabelandType("description","text","description");
    createLabelandType("dueDate","date","dueDate");
    createLabelandType("priority","text","priority");

    return formElement;
}







    // let form = document.createElement("form");

    // const label = document.createElement("label");
    // label.htmlFor = "title";
    // label.textContent = "title";
    // const title = document.createElement("input");
    // title.type = "text";
    // title.id = "test";
    // form.append(label,title);

    // const labelDescription = document.createElement("label");
    // labelDescription.htmlFor = "description";
    // labelDescription.textContent = "description"
    // const description = document.createElement("input");
    // description.type = "text";
    // description.id = "description";
    // form.append(labelDescription,description);

    // const labelDueDate = document.createElement("label");
    // labelDueDate.htmlFor = "dueDate";
    // labelDueDate.textContent = "dueDate";
    // const dueDate = document.createElement("input");
    // dueDate.type = "date";
    // dueDate.id = "dueDate";
    // form.append(labelDueDate,dueDate);

    // const labelPriority = document.createElement("label");
    // labelPriority.htmlFor = "priority";
    // labelPriority.textContent = "priority";
    // const priority = document.createElement("input")
    // priority.type = "select";
    // priority.type = "priority";
    // form.append(labelPriority,priority);