const login_button = document.querySelector(".login_button");

login_button.addEventListener(
  "click",
  (e) => {
    window.localStorage.setItem("login_state", true);
    window.location.href = "/entry.html"
  }
);