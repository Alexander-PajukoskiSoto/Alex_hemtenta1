
let parsedItems = JSON.parse(localStorage.getItem("isTask"))
let items = parsedItems;
if(localStorage.getItem("isTask")===undefined || localStorage.getItem("isTask")=== null){
    items=[];
}

const addTask = event => { 
    event.preventDefault();
    let newTask = document.getElementById("toDoTask").value;
    items.push(newTask);
    localStorage.setItem("isTask", JSON.stringify(items));
}
