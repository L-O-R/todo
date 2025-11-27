import { todo } from "./Todo.js";

export const addTodo = (todolist) => {
  const title = document
    .getElementById("task_title")
    .value.trim();
  const description = document
    .getElementById("description")
    .value.trim();
  const deadline = document
    .getElementById("deadline")
    .value.trim();
  const priority = document
    .getElementById("priority")
    .value.trim();

  if (title.length <= 0) {
    alert("todo cannot be empty");
    return;
  }

  let found = todolist.some((el) => el.title === title);
  if (found) {
    alert("Task already added, try another!");
    return;
  }

  let newTodo = new todo(
    title,
    description,
    priority,
    deadline
  );

  todolist.push(newTodo);
};
