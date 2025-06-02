const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✔️";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = "";
}
