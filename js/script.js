
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
//AAAAA FUNKAR INTEE AAAAAAA AAAAAAAAAA
let newTaskElemnt = generateHTML('<div class="input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="checkbox"></div></div><input type="text" class="form-control" readonly> <input type="button" name="delete${count}" id="" class="btn btn-primary"></div>');
for(i=0;items.length>i;i++){
    document.getElementById("theForm").append(newTaskElemnt);
}   

const addTask = event => { 
    event.preventDefault();
    let newTask = document.getElementById("toDoTask").value;
    items.push(newTask);
    localStorage.setItem("isTask", JSON.stringify(items));
}
