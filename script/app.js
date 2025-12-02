import { addTodo } from "./addTodo.js";
import renderTodo from "./renderTodo.js";

console.log(window);

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("loggedIn")) {
    console.log("hello");
    window.location.href = "login.html";
    return;
  }

  // logout logic
  document
    .getElementById("logout_btn")
    .addEventListener("click", () => {
      localStorage.removeItem("user_email");
      localStorage.removeItem("loggedIn");
      window.location.href = "login.html";
    });

  // Calling the user's Data
  let userList =
    JSON.parse(localStorage.getItem("userList")) || [];
  let user_email = localStorage.getItem("user_email") || "";

  function dataUpdate() {
    let userList =
      JSON.parse(localStorage.getItem("userList")) || [];

    return userList;
  }

  userList = dataUpdate();

  let indexValue = userList.findIndex(
    (el) => el.email === user_email
  );

  let user_data = userList.find(
    (user) => user.email === user_email
  );

  //  displaying the user name
  document.getElementById("user_name").innerText =
    user_data.name || "user";

  //  modal logic
  const add_form_modal = document.getElementById(
    "add_form_modal"
  );
  const add_todo_btn =
    document.getElementById("add_todo_btn");
  const close_btn = document.getElementById("close_btn");

  add_todo_btn.addEventListener("click", () => {
    add_form_modal.showModal();
  });
  close_btn.addEventListener("click", () => {
    add_form_modal.close();
  });

  //  add todo logic
  document
    .getElementById("add_todo_form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      addTodo(user_data.todo);
      userList[indexValue] = user_data;
      localStorage.setItem(
        "userList",
        JSON.stringify(userList)
      );

      renderTodo(user_data.todo);
    });

  //  show todo
  renderTodo(user_data.todo);
});
