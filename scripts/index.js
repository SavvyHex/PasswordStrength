function get_pass_strength(password) {
  // Main variable to be returned
  let score = 0;
  // Flag variables
  let nFlag = false;
  let uFlag = false;
  let lFlag = false;
  let dFlag = false;
  let sFlag = false;

  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (password.length >= 8) {
    nFlag = true;
    score++;
  }

  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9" && !dFlag) {
      dFlag = true;
      score++;
    } else if (
      (password[i] >= "a" && password[i] <= "z") ||
      (password[i] >= "A" && password[i] <= "Z")
    ) {
      if (password[i] == password[i].toUpperCase() && !uFlag) {
        uFlag = true;
        score++;
      } else if (password[i] == password[i].toLowerCase() && !lFlag) {
        lFlag = true;
        score++;
      }
    } else if (format.test(password[i]) && !sFlag) {
      sFlag = true;
      score++;
    }
  }

  return score;
}

function get_strength_message(score) {
  switch (score) {
    case 0:
      return "Did you accidentally click on the submit button?";
    case 1:
      return "Your password can be very easily guessed";
    case 2:
      return "Your password can be much stronger";
    case 3:
      return "Consider diversifying your password with digits and special characters";
    case 4:
      return "That's a decent password";
    case 5:
      return "A very strong password";
  }
}

function get_bar_colour(score) {
  if (score < 3) {
    return "#BB1E10";
  } else if (score < 5) {
    return "#EFB700";
  } else {
    return "#32A431";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".submit-button")
    .addEventListener("click", function () {
      const score = get_pass_strength(
        document.getElementById("password").value
      );
      document
        .getElementById("bar")
        .setAttribute("style", `width : ${score * 20}%`);
      document.getElementById("bar").style.backgroundColor =
        get_bar_colour(score);
      document.querySelector(".strength-message").textContent =
        get_strength_message(score);
    });
});
