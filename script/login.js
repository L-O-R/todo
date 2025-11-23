document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document
      .getElementById("email")
      .value.trim()
      .toLowerCase();
    const password = document
      .getElementById("password")
      .value.trim();

    //  bringing data of users from backend(localstorage)
    let userList =
      JSON.parse(localStorage.getItem("userList")) || [];

    let userexits = userList.find(
      (user) =>
        user.email === email && user.pasword === password
    );

    console.log(userexits);

    if (!userexits) {
      alert(
        "Username and password do not match, Try Again!"
      );
      return;
    }

    localStorage.setItem("user_email", userexits.email);
    localStorage.setItem("name", userexits.name);
    localStorage.setItem("loggedIn", true);

    window.location.href = "index.html";
  });
});
