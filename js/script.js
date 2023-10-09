
let parsedItems = JSON.parse(localStorage.getItem("isTask"))
let items = parsedItems;
if(localStorage.getItem("isTask")===undefined || localStorage.getItem("isTask")=== null){
    items=[];
}

const generateHTML = html=>{
    const template = document.createElement("template")
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

const newTaskElemnt = generateHTML('<div class="input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input"></div></div><input type="text" class="form-control" aria-label="Text input with checkbox"></div>');

console.log(newTaskElemnt);

const addTask = event => { 
    event.preventDefault();
    let newTask = document.getElementById("toDoTask").value;
    items.push(newTask);
    localStorage.setItem("isTask", JSON.stringify(items));
}
