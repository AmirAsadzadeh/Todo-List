//selectors

let flag = 1;

let umCompleteTaskCounter = 0;

let completedTaskCounter = 0;

const collectionBtn = document.querySelector(".ham-menu");

const addTaskBtn = document.getElementById("add-btn");

const todoInput = document.getElementById("todo-input");

const taskList = document.getElementById("task-list");

const unCompeletedCount = document.getElementById("uncompeleted-count");

const completedTaskList = document.getElementById("completed-tasks-list");

//event listeners

collectionBtn.addEventListener("click", hamOpener);

addTaskBtn.addEventListener("click", add);

taskList.addEventListener("click", removeCheck);

//functions

function hamOpener() {
  if (flag === 1) {
    collectionBtn.classList.remove("active-background");

    document.querySelector("aside").style.width = "0";

    flag = 0;
  } else if (flag === 0) {
    collectionBtn.classList.add("active-background");

    document.querySelector("aside").style.width = "300px";

    flag = 1;
  }
}

function add(event) {
  event.preventDefault();

  if (todoInput.value !== "") {
    umCompleteTaskCounter += 1;

    const newTask = document.createElement("div");

    unCompeletedCount.innerHTML = `${umCompleteTaskCounter}`;

    taskList.append(newTask);

    newTask.classList.add("task");

    newTask.innerHTML = `<div class="parent"><input type="checkbox" id="uncompleted-${umCompleteTaskCounter}" class="checkbox" />
                         <label for="uncompleted-${umCompleteTaskCounter}" class=" task-label" id="task-value">${todoInput.value}</label></div>
                         <button class="trash-btn">
                           <i class="far fa-trash-alt"></i>
                         </button>`;
    todoInput.value = "";
  }
}

function removeCheck(event) {
  const item = event.target;

  if (item.classList[1] === "fa-trash-alt") {
    const todoTask = item.parentElement.parentElement;

    todoTask.remove();

    umCompleteTaskCounter -= 1;

    unCompeletedCount.innerHTML = `${umCompleteTaskCounter}`;
  }
  if (item.classList.contains("checkbox")) {
    item.parentElement.classList.toggle("checked");

    item.parentElement.parentElement.classList.toggle("opacity");

    complete(item);
  }
}

function complete(item) {
  const checked = document.createAttribute("checked");

  item.setAttributeNode(checked);

  const goDownTask = item.parentElement.parentElement;

  const goDownTaskValue = item.parentElement.parentElement.innerHTML;

  goDownTask.remove();

  const newTask = document.createElement("div");

  newTask.classList.add("task", "opacity");

  newTask.innerHTML = goDownTaskValue;

  completedTaskList.appendChild(newTask);

  umCompleteTaskCounter -= 1;

  unCompeletedCount.innerHTML = `${umCompleteTaskCounter}`;
}
