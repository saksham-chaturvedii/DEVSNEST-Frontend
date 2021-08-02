const input = document.querySelector("input");
const AddButton = document.getElementById("add_button");
const todolist = document.querySelector(".todolist");
const done = document.querySelector(".done");
/* Better Way to load the to-do entries*/
var entries = [];

AddButton.addEventListener("click", () => {
  if (input.value.trim() === "") alert("Invalid Input");
  else addEntries();
});

function addEntries() {
  entries.push({ title: input.value.trim(), done: "false" });
  localStorage.setItem("todo", JSON.stringify(entries));
  const newEntry = document.createElement("div");
  newEntry.className = "entry";
  newEntry.innerHTML = "→ " + entries[entries.length - 1].title;
  const clear_button = document.createElement("button");
  clear_button.setAttribute("class", "clear_button");
  clear_button.innerText = "DONE";
  newEntry.appendChild(clear_button);
  todolist.appendChild(newEntry);
  input.value = "";

  clear_button.addEventListener("click", (e) => {
    if (e.target.parentNode.tagName === "DIV") {
      for (let i of entries) {
        var todo_element_text = "→ " + i.title + "DONE";
        if (todo_element_text === e.target.parentNode.textContent) {
          entries.splice(todo_element_text, 1);
          localStorage.setItem("todo", JSON.stringify(entries));
        }
      }
      e.target.parentNode.remove();
    }
  });
}

window.onload = () => {
  let localStorageData = localStorage.getItem("todo");
  if (!localStorageData) return;

  JSON.parse(localStorageData).forEach(function (item) {
    console.log(item);
    entries.push(item);
    const newEntry = document.createElement("div");
    newEntry.className = "entry";
    newEntry.innerHTML = "→ " + entries[entries.length - 1].title;
    var clear_button = document.createElement("button");
    clear_button.setAttribute("class", "clear_button");
    clear_button.innerText = "DONE";
    newEntry.appendChild(clear_button);
    todolist.appendChild(newEntry);
  });
};

// done.addEventListener('click',(e)=>{
//   entries[e].pop
// })

/* Naive Way
button.addEventListener('click', ()=>{
    const entry = document.createElement('div');
    entry.innerHTML = input.value;
    todolist.appendChild(entry);
    input.value="";
})
*/
