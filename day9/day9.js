// Activity 1
// task 1
let heading = document.getElementById("heading");
heading.style.color = "blue";

// task 2
document.querySelector(".container").style.backgroundColor = "pink";

// Activity 3 :creating and appendingElements
// task 3
let div = document.createElement("div");
div.innerText = "Hi I am added ";
let container = document.querySelector(".container");
container.append(div);

// task 4
let li = document.createElement("li");
let ul = document.querySelector(".ul-box");
li.innerText = "I am too";
ul.append(li);

// Activity 3 :Removing Elements
// task 5
div.remove();

// task 6
ul.lastChild.remove();

// Activity 4 :
// Modifying attributes and classes
// task 7
let img = document.querySelector("#image");

img.setAttribute("alt", "no");
// task 8
ul.classList.add("sze");
ul.classList.remove("sze");

// Activity 5
// task 9
function handleclick() {
  document.querySelector("#para").innerText = "it is changed";
}
let btn = document.querySelector("#btn");

btn.addEventListener("click", handleclick);

// task 10
container.addEventListener("mouseover", () => {
  container.style.border = "2px solid blue";
});
