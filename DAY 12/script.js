const input = document.querySelector("input");
const AddButton = document.querySelector("button");
const todolist = document.querySelector(".todolist");

/* Better Way to load the to-do entries*/
var entries = [];

AddButton.addEventListener("click", () => {
  if (input.value.trim() === "") alert("Invalid Input");
  else addEntries();
});

function addEntries() {
  entries.push({ title: input.value.trim(), done: "false" });
  const newEntry = document.createElement("div");
  const done = document.createElement("button");
  newEntry.innerHTML = "→ " + entries[entries.length - 1].title;
  todolist.appendChild(newEntry, done);
  input.value = "";
  localStorage.setItem("todo", JSON.stringify(entries));
}

window.onload = () => {
  let localStorageData = localStorage.getItem("todo"); 
  if (!localStorageData) return;

  JSON.parse(localStorageData).forEach(function (item) {
    entries.push(item);
    const newEntry = document.createElement("div");
    newEntry.innerHTML = "→ " + item.title;
    todolist.appendChild(newEntry);
  });
};

/* Naive Way
button.addEventListener('click', ()=>{
    const entry = document.createElement('div');
    entry.innerHTML = input.value;
    todolist.appendChild(entry);
    input.value="";
})
*/
