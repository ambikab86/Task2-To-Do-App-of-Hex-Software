let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button onclick="removeTask(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value === "") return;

  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  showTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

showTasks();