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
    // createLabelandType("project","text","Project");
    // createLabelandType("title","text","Title");
    // createLabelandType("description","text","Description");
    // createLabelandType("dueDate","date","DueDate");
    // createLabelandType("priority","text","Priority");

    return formElement;
}
