//selectors

let flag = 1;

let completeTaskCounter = 0;

const collectionBtn = document.querySelector(".ham-menu");

const addTaskBtn = document.getElementById("add-btn");

const todoInput = document.getElementById("todo-input");

const taskList = document.getElementById("task-list");

const unCompeletedCount = document.getElementById("uncompeleted-count");

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
  completeTaskCounter += 1;

  event.preventDefault();

  if (todoInput.value !== "") {
    const newTask = document.createElement("div");

    unCompeletedCount.innerHTML = `${completeTaskCounter}`;

    taskList.append(newTask);

    newTask.classList.add("task");

    newTask.innerHTML = `<div class="parent"><input type="checkbox" id="uncompleted-${completeTaskCounter}" class="check" />
                         <label for="uncompleted-${completeTaskCounter}" class="check task-label" id="task-value">${todoInput.value}</label></div>
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
    completeTaskCounter -= 1;
    unCompeletedCount.innerHTML = `${completeTaskCounter}`;
  }
  if (item.classList[0] === "check") {
    item.classList.toggle("checked");
  }
}
