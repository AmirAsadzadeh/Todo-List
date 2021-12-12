//selectors

let flag = 1;

const collectionBtn = document.querySelector(".ham-menu");

const container = document.getElementById("container");

//event listeners

collectionBtn.addEventListener("click", () => {
  if (flag === 1) {
    document.querySelector("aside").style.transform = "translateX(-350px)";
    container.style.marginLeft = "-300px";
    collectionBtn.classList.remove("active-background");
    flag = 0;
  } else if (flag === 0) {
    document.querySelector("aside").style.transform = "translateX(0px)";
    container.style.marginLeft = "0";
    collectionBtn.classList.add("active-background");
    flag = 1;
  }
});

//functions
