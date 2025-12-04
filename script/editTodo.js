import { todo } from "./Todo.js";

// edit todo logic
let edit_form_modal = document.getElementById(
  "edit_form_modal"
);

document
  .getElementById("edit_close_btn")
  .addEventListener("click", () => {
    edit_form_modal.close();
  });

const title = document.getElementById("edit_task_title");
const description = document.getElementById(
  "edit_description"
);
const priority = document.getElementById("edit_priority");
const deadline = document.getElementById("edit_deadline");

let oldTitle = "";
export const editTodo = (todo) => {
  edit_form_modal.showModal();

  title.value = todo.title;
  description.value = todo.description;
  priority.value = todo.priority;
  deadline.value = todo.deadline;

  oldTitle = todo.title;
};

// edit data update
export const editFormMethod = (todoList) => {
  const new_title = title.value;

  const new_description = description.value;
  const new_deadline = deadline.value;
  const new_priority = priority.value;

  if (new_title.length <= 0) {
    alert("todo cannot be empty");
    return;
  }

  //   console.log(todoList);

  let index_number = todoList.findIndex(
    (el) => el.title === oldTitle
  );
  //   if (found) {
  //     alert("Task already added, try another name !");
  //     return;
  //   }

  let updatedTodo = new todo(
    new_title,
    new_description,
    new_priority,
    new_deadline
  );

  todoList[index_number] = updatedTodo;

  return todoList;
};
