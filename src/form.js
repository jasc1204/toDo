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

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "save";
    formElement.appendChild(submitButton);
    const close = document.createElement("button");
    close.type = "button";
    close.textContent = "close";
    formElement.appendChild(close);

    return formElement;
}
