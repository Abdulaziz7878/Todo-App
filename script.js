let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

renderToDo();

function toDoNameAccepter() {
  let toDoElement = document.querySelector(".to-do-input");
  let dateElement = document.querySelector(".js-date-input");

  let name = toDoElement.value;
  let date = dateElement.value;

  if (name) {
    toDoList.push({ name, date });

    localStorage.setItem("toDoList", JSON.stringify(toDoList));

    toDoElement.value = "";
    dateElement.value = "";

    renderToDo();
  }
}

function renderToDo() {
  let toDoView = document.querySelector(".js-todo-view");
  toDoView.innerHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    let toDoLists = toDoList[i];

    let { name, date } = toDoLists;
    let toDoHtml = `
      <div>${name}</div>
      <div>${date}</div>
      <button class="padd red js-delet-button">
      Delete 
      </button>`;
    toDoView.innerHTML += toDoHtml;
  }
  document.querySelectorAll(".js-delet-button").forEach((delet, index) => {
    delet.addEventListener("click", () => {
      toDoList.splice(index, 1);
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
      renderToDo();
    });
  });
}

document.querySelector(".js-add-button").addEventListener("click", () => {
  toDoNameAccepter();
});
