import UserClass from "./User.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document
      .getElementById("name")
      .value.trim()
      .toLowerCase();
    const email = document
      .getElementById("email")
      .value.trim()
      .toLowerCase();
    const password = document
      .getElementById("password")
      .value.trim();
    const confirm_password = document
      .getElementById("confirm_password")
      .value.trim();

    if (password !== confirm_password) {
      alert("password do not match");
      return;
    }

    //  bringing data of users from backend(localstorage)
    let userList =
      JSON.parse(localStorage.getItem("userList")) || [];

    let userexits = userList.some(
      (user) => user.email === email
    );

    console.log(userexits);

    if (userexits) {
      alert("email already taken , try another!");
      return;
    }

    let newUser = new UserClass(name, email, password);

    userList.push(newUser);

    localStorage.setItem(
      "userList",
      JSON.stringify(userList)
    );

    alert(
      "user register succesfully , Redirecting to the login page!"
    );

    window.location.href = "login.html";
  });
});
