import { editTodo } from "./editTodo.js";

const todo_container = document.getElementById(
  "todo_container"
);

const todo_card_template = document.querySelector(
  "#todo_card_template"
);

function renderTodo(todoList = []) {
  console.log(todoList);
  if (todoList.length <= 0) {
    todo_container.innerHTML =
      "<p> No Task available, Add task to see one </p>";
    return;
  }
  todo_container.innerHTML = "";
  todoList.forEach((el) => {
    let clone = todo_card_template.content.cloneNode(true);
    let h4 = clone.querySelector("h4");
    let p = clone.querySelector("p");
    clone
      .querySelector(".edit_btn")
      .addEventListener("click", () => {
        editTodo(el);
      });
    h4.innerText = el.title;
    p.innerText = el.deadline;

    todo_container.appendChild(clone);
  });
}

export default renderTodo;
