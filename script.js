const input = document.getElementById("input");
const addBtn = document.getElementById("add");

const taskField = document.querySelector(".tasks");

function addTask() {
  if (input.value === "") {
    alert("You must write something");
  } else {
    let h4 = document.createElement("h4");
    let span = document.createElement("span");
    let div = document.createElement("div");
    span.innerHTML = "+";
    span.classList.add("span");
    h4.classList.add("task-style");
    h4.innerHTML = input.value;
    taskField.appendChild(span);
    taskField.appendChild(h4);
    h4.appendChild(span);
    div.appendChild(h4);
    div.classList.add("task-container");
    taskField.appendChild(div);
  }
  input.value = "";
}

taskField.addEventListener("click", (e) => {
  if (e.target.tagName === "H4") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
