console.log(window);

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("loggedIn")) {
    console.log("hello");
    window.location.href = "login.html";
    return;
  }
});
