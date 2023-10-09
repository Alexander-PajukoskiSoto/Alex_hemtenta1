const addTask = event => { 
    event.preventDefault();

    var newTask = document.getElementById("toDoTask").value;
    localStorage.setItem("isTask", newTask);
}