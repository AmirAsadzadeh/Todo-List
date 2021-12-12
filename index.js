//selectors

let flag = 1;

const collectionBtn = document.querySelector(".ham-menu");

const container = document.getElementById("container");

//event listeners

collectionBtn.addEventListener("click", () => {
  if (flag === 1) {
    document.querySelector("aside").style.transform = "translateX(-350px)";
    // document.querySelector("aside").style.position = "absolute";
    container.style.marginLeft = "-300px";

    flag = 0;
  } else if (flag === 0) {
    document.querySelector("aside").style.transform = "translateX(0px)";
    // document.querySelector("aside").style.position = "static";
    container.style.marginLeft = "0";

    flag = 1;
  }
});

//functions
