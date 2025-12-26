const addBtn = document.getElementById("add-btn");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);
newTaskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter") addTask();
});

function addTask() {
    const taskText = newTaskInput.value.trim();
    if(taskText === "") return;

    const li = document.createElement("li");

    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task-" + Date.now();

    
    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = taskText;

    li.appendChild(checkbox);
    li.appendChild(label);
    taskList.appendChild(li);

    newTaskInput.value = "";
}
