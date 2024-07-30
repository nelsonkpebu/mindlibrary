const btnRegister = document.querySelector(".btnRegister");
const btnBack = document.querySelector(".back-btn");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  window.localStorage.setItem("login_state", true);
  window.location.href = "/entry.html";
});

btnBack.addEventListener("click", (e) => {
  window.history.back();
});
