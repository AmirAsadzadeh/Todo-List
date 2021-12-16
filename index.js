//selectors

let flag = 1;

let completeTaskCounter = 0;

const collectionBtn = document.querySelector(".ham-menu");

const addTaskBtn = document.getElementById("add-btn");

const todoInput = document.getElementById("todo-input");

const taskList = document.getElementById("task-list");

const unCompeletedCount = document.getElementById("uncompeleted-count");

//event listeners

collectionBtn.addEventListener("click", () => {
  if (flag === 1) {
    collectionBtn.classList.remove("active-background");
    document.querySelector("aside").style.width = "0";

    flag = 0;
  } else if (flag === 0) {
    collectionBtn.classList.add("active-background");
    document.querySelector("aside").style.width = "300px";

    flag = 1;
  }
});

addTaskBtn.addEventListener("click", add);

//functions

function add(event) {
  completeTaskCounter += 1;

  event.preventDefault();

  if (todoInput.value !== "") {
    const newTask = document.createElement("div");

    unCompeletedCount.innerHTML = `${completeTaskCounter}`;

    taskList.append(newTask);

    newTask.classList.add("task");

    newTask.innerHTML = `<input type="checkbox" id="uncompleted-${completeTaskCounter}" />
  <label for="uncompleted-${completeTaskCounter}" class="task-label"
    >${todoInput.value}</label
  >
  <button class="trash-btn">
    <i class="far fa-trash-alt"></i>
  </button>
</div>`;
    todoInput.value = "";
  }
}
