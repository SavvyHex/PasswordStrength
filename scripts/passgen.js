function get_new_password() {
  let password = "";
  for (let i = 0; i < Math.floor(Math.random() * 5) + 15; i++) {
    password += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
  }
  return password;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".gen-button").addEventListener("click", function () {
    document.querySelector(".new-pass").textContent = get_new_password();
  });
});
