//selectors

let flag = 1;

const collectionBtn = document.querySelector(".ham-menu");

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

//functions
